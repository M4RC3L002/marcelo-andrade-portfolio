# Planejamento de layout e desenvolvimento

## Direção
A referência Figma foi consultada pelo conector: node 587:638 contém desktop e mobile, fundo escuro, apresentação pessoal, serviços, sobre, portfólio e contato. O contexto de código retornou erro de seleção; a captura foi obtida. A implementação é original e usa a referência apenas para a sequência de conteúdo e contraste visual. Não reutiliza retrato, logotipo, texto ou miniaturas da referência.

Identidade: azul-marinho #081823, superfície #102530, ciano #57dcdf, texto #EDF5F7 e secundário #A4BAC6. Tipografia Manrope variável, servida localmente pelo pacote de fontes. Linguagem direta em português, sem métricas ou experiência inventadas.

## Desktop — 1280 a 1600 px
Área útil máxima 1184 px, margens mínimas 48 px. Cabeçalho fixo no fluxo sticky, 88 px: marca ma., cinco âncoras e contato. Hero em duas colunas: título de 46–76 px, apresentação e duas ações à esquerda; conceito do AndradeTech OS à direita. Etiqueta explícita de conceito e dados ilustrativos. Rodapé do hero leva aos serviços.

Serviços: três colunas, separadas por espaço e linhas, sem depender de cartões. Sobre: título e assinatura tipográfica à esquerda, apresentação e tecnologias à direita. Projetos: filtro por categoria, primeiro conceito em largura total e quatro propostas em duas colunas. Cada projeto abre página própria com problema, escopo e próximos passos. Contato: chamada à esquerda e canais à direita. Rodapé com identidade, direitos e retorno ao topo.

Espaçamento vertical principal: 104 px; títulos 32–46 px; corpo 13–15 px. Miniaturas são interfaces ilustrativas feitas em HTML/CSS, não capturas de produtos concluídos.

## Tablet — 701 a 1000 px
Margens de 32 px, colunas fluidas, navegação compacta, remoção do CTA duplicado do cabeçalho. Hero e projetos preservam duas colunas enquanto o conteúdo couber. Sem largura fixa de página.

## Mobile — 320 a 700 px
Margens de 20 px e cabeçalho de 72 px. Menu recolhível com rótulo, aria-expanded, Escape para fechar e retorno do foco ao acionador. Links fecham o menu. Conteúdo segue uma coluna, texto antes da prévia, serviços empilhados, sobre sem assinatura decorativa grande, projetos em lista e contato abaixo da chamada. Filtros quebram linha; nada exige rolagem horizontal. Título fluido, corpo legível e alvos principais com pelo menos 44 px.

## Acessibilidade e SEO
HTML semântico, um h1 por página, títulos hierárquicos, link para pular navegação, foco visível, prévias decorativas excluídas da árvore acessível, estado dos filtros com aria-pressed e contagem anunciada. Movimento reduzido respeitado; conteúdo visível sem animação de entrada. Metadados em português, Open Graph gerado, robots e sitemap condicionado ao domínio real. Sem domínio fictício em canonical.

## Organização
app/: rotas e metadados. components/: navegação, composição e prévias. lib/site.ts: cinco projetos e configuração pública de contato. .env.example: campos a preencher. Dependências exatas resolvidas em package-lock.json.

## Sequência de evolução dos produtos
1. AndradeTech OS: validar clientes/equipamentos/ordens, implementar um fluxo completo e testar permissões e persistência.
2. Cardápio digital: catálogo responsivo, seleção e resumo, integração com canal de pedidos.
3. Loja virtual: produtos e carrinho; pagamento somente após escolher provedor e requisitos.
4. Agendamento: disponibilidade, conflito de horários e confirmação, com testes de concorrência.
5. Controle financeiro: lançamentos, categorias e resumo, com testes de cálculo e autorização.

Cada produto deve ganhar repositório, README, demonstração, imagens reais e estudo de caso após verificação. Atualizar o estado de Planejado apenas com evidência. Publicar primeiro o portfólio; evoluir os produtos separadamente.
