# Corrigir a expiração do Firestore em 20/11/2026

A regra atual abre todo o banco até 20/11/2026 00:00 UTC (19/11 às 21h em São Paulo) e bloqueia clientes depois. Esta mudança substitui o prazo por identidade, propriedade e papéis concedidos no servidor.

**Este branch é uma preparação para migração. Não publique apenas firestore.rules e não atualize o aplicativo isoladamente.** A implantação precisa ser coordenada; ela não foi executada por este PR.

## Modelo e compatibilidade

- Aplicativo Web com Firebase compat SDK 10.14.1. Confirme no console a edição e o banco de destino antes de aplicar; o alvo esperado é Firestore Native, banco "(default)" do projeto "gerador-de-propostas-ft". A edição da instância de produção ainda não foi consultada.
- Perfis com e-mail/telefone ficam privados em "fortatech_users/{uid}", acessíveis somente ao próprio usuário.
- "fortatech_directory/{uid}" contém somente id, nome, título e áreas, para os filtros e totais de vendedores. Administradores veem o diretório; gestores veem sua área.
- "fortatech_access/{uid}" é protegido contra TODAS as escritas do cliente. Somente o Admin SDK/console atribui papéis. O campo role do perfil ou do navegador não concede acesso.
- Consultores consultam por userId. Gestores usam duas consultas: suas próprias propostas e accessAreas array-contains da área autorizada. Administradores consultam todas.
- Gestores/administradores precisam de e-mail verificado e novo login depois de validAfter. Os botões de recuperação/verificação estão na tela de entrada.
- O documento comercial é armazenado em stateJson (JSON, até 750 KB). O aplicativo o reconverte para stateData ao abrir. Identidade e áreas da proposta ficam imutáveis.
- Todas as transições entre rascunho/enviada/aprovada/recusada são permitidas, como na versão anterior.
- Sem Firebase Auth válido não há sessão, consulta ou gravação. Não há fallback com senha local nem conta administrativa sem autenticação.
- As gravações só exibem sucesso após confirmação do servidor. Impressão e edição do documento permanecem locais.
- O cache antigo é arquivado no mesmo navegador em "fortatech_v2_legacy_backup", sem senhas. Ele não é exibido para outras contas. Recupere propostas locais não sincronizadas antes de remover esse backup. Não há importação automática desse conteúdo, pois a propriedade precisa ser conferida.
- O HTML portátil não utiliza Firebase e permanece independente.

## Antes da migração

1. Confira que este repositório corresponde ao aplicativo em uso e anote a versão implantada.
2. Confira a edição, o modo Native e o banco "(default)" no console.
3. Pause o uso pelos vendedores durante a migração. As regras antigas ainda deixam o banco aberto até a publicação das regras novas.
4. Garanta um backup/exportação administrado pelo Firebase. O script também salva uma cópia JSON privada de todos os registros que vai tratar.
5. Use credenciais administrativas locais via Application Default Credentials. Nunca envie arquivo de service account, token, backup ou link de recuperação ao Git.
6. Instale as dependências deste branch com "npm install".
7. Execute os testes:
   - "npm run test:sessions"
   - "npm run test:rules" (requer Java 21+; usa SOMENTE o projeto demo-fortatech-rules no emulador)
8. Faça a análise sem escrita:

   node scripts/migrate-firestore.mjs --project gerador-de-propostas-ft

9. Confira o relatório. A migração liga proprietários primeiro pelo UID real do Firebase Auth; se não houver correspondência, usa e-mail exato da conta Auth. Revise esse pressuposto e os registros antes de aplicar. Perfis sem Auth ativo, conflitos, duplicatas e dados fora dos limites bloqueiam a migração inteira.
10. O script só autoriza o UID administrativo já identificado no aplicativo e os seis gestores da lista oficial existente. Ele IGNORA papéis administrativos declarados por usuários. Confirme a lista em scripts/migrate-firestore.mjs.

## Aplicar em janela de manutenção

1. Execute:

   node scripts/migrate-firestore.mjs --project gerador-de-propostas-ft --apply

2. O script salva o backup, normaliza os registros, cria o diretório e as áreas das propostas. Na primeira migração, ele substitui a senha administrativa pública por uma senha aleatória, revoga sessões antigas e mostra um link PRIVADO para o responsável definir a nova senha. Esse link não é enviado automaticamente a ninguém. Guarde o backup e trate o link como credencial.
3. Confira no console os registros migrados e os papéis. O script escreve em lotes e pode parar entre lotes; mantenha a manutenção e investigue falhas antes de continuar. Não publique as regras sobre uma migração incompleta. Em repetição, contas já migradas conservam validAfter e não têm sua senha redefinida novamente.
4. Publique o aplicativo deste branch no MESMO hospedador usado atualmente. Este repositório não contém uma configuração de deploy desse hospedador; o comando de regras abaixo não publica o aplicativo.
5. Publique firestore.rules no console do projeto ou, já autenticado no Firebase CLI:

   npx firebase deploy --only firestore:rules --project gerador-de-propostas-ft

6. Administrador/gestores devem verificar o e-mail e entrar novamente. validAfter invalida os tokens emitidos antes da concessão; aguarde alguns segundos antes do novo login. E-mails não verificados continuam com acesso de consultor às próprias propostas.
7. Em sessões separadas, confira um consultor, dois gestores de áreas diferentes e o administrador:
   - cadastro e login reais, restauração após recarregar e logout;
   - salvar, abrir, duplicar, editar, alterar status e excluir;
   - consultor vê somente suas propostas; gestor vê sua área e as próprias; admin vê todas;
   - filtros de vendedores/áreas e propostas antigas, inclusive autores com múltiplas áreas;
   - tentativa não autenticada e tentativa de editar outro autor falham;
   - desconectar a internet não exibe falso sucesso de salvamento;
   - troca de contas não reaproveita o cache anterior.
8. Aguarde a propagação das regras (até 10 minutos nos listeners ativos) antes de liberar a equipe. O sinal de conclusão é o teste funcional em produção, não apenas o desaparecimento do aviso.

## Revisão de ataques e limites

Os testes do emulador cobrem leitura/listagem sem autenticação; acesso cruzado; criação por outro UID; alteração de proprietário/identidade/áreas/data de criação; remoção de campos obrigatórios; tipos errados; limites de tamanho; valor negativo/excessivo; estados inválidos; campos extras; escalação pelo perfil; escrita em papéis protegidos; consultas incompatíveis; vazamento de perfis; subcoleções órfãs e papéis sem e-mail verificado/token recente. Validadores são usados tanto em criação como em atualização.

Contadores de votação, URLs de armazenamento e referências para outros documentos não existem neste modelo; replay de contadores e travessia de caminhos são inaplicáveis aqui. stateJson é opaco para as regras: o formato JSON é interpretado pelo aplicativo, enquanto tamanho e tipo são validados no servidor. Datas históricas ISO têm formato validado; savedAt assegura a hora do servidor. Não existe prazo de expiração no novo conjunto.

A lista de papéis é protegida contra alterações pelo cliente, mas a migração inicial parte de um banco anteriormente público. A autenticidade histórica dos registros precisa ser revisada pelo responsável. Os testes não acessam produção e não confirmam a edição real, credenciais, dados legados nem a configuração de hospedagem.

I've set up prototype Security Rules to keep the data in Firestore safe. They are designed to be secure for owner-scoped proposals, area-scoped management, private profiles, server-controlled roles, and validated writes. However, you should review and verify them before broadly sharing your app. If you'd like, I can help you harden these rules.

## Recuperação

Se a migração falhar, mantenha a manutenção e preserve o backup para recuperação com Admin SDK por um administrador. A senha administrativa anterior é insegura e não deve ser restaurada. Não volte à regra pública nem estenda sua expiração. Reverter apenas o HTML não reverte o modelo de dados nem os papéis; planeje a recuperação conjunta do aplicativo, regras e registros a partir do backup.
