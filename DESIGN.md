# Portfólio de Marcelo Andrade

Direção editorial inspirada na referência MATE inspecionada em 15/10/2026. Implementação própria, sem reaproveitar materiais da agência.

## Tokens
Fundo azul-marinho #0a141a, superfície #14252d, texto #f0eee5, texto secundário #adb6b5, ciano #63d9d3. Seções claras #edf2f0 com texto #132b33. Manrope auto-hospedada. Headline principal fluida de 60 a 96px, leve/itálica na primeira linha e forte/ciano na segunda. Corpo 13 a 16px; texto de apoio 10 a 12px.

## Composição
Cabeçalho de vidro de 88px (74px mobile), navegação com seção ativa, abertura assimétrica: título à esquerda e três interfaces reais em janelas sobrepostas à direita. No celular, texto e galeria seguem em coluna. Serviços em linhas abertas em seção clara. Projetos em duas colunas com prévias de proporção 1.4 e navegação independente para site e detalhes. Sobre em duas colunas claras; contato tipográfico centralizado. Até 700px, menu recolhível e conteúdo em coluna única.

## Interação
Foco visível; menu fecha com Escape e retorna foco ao botão. Seletores aria-pressed; nomes acessíveis; alvos de 44px. O título entra por máscaras em 800ms, com apoio em 650ms. As prévias dos projetos revelam o recorte em 700ms; títulos de seção entram suavemente em 500ms, uma vez. Prefers-reduced-motion remove deslocamentos e transições de vista. Cabeçalho opaco como fallback de blur e de preferência por transparência reduzida. Projetos são a mídia principal; nenhum vídeo ou fundo decorativo da referência foi copiado.

## Fundo animado
Canvas decorativo com partículas e conexões em ciano, linhas em fluxo e reação ao cursor apenas com mouse. 30 fps, 66 partículas no desktop e 30 no celular, DPR limitado. Pausa manual, pausa fora da tela e em aba oculta. Movimento reduzido desenha quadro estático. Sem biblioteca adicional ou atualizações React por frame.

## Coreografia de movimento
Entradas seletivas ao rolar com IntersectionObserver e WAAPI, ease-out e escalonamento de 60ms, limitado a 120ms. Conteúdo visível sem JavaScript. Galeria flutua lentamente com transformações independentes; pausa compartilhada com o fundo, fora da tela e em aba oculta. Projetos ganham profundidade no mouse, serviços e setas respondem à interação. Progresso de leitura via CSS scroll timeline. Movimento reduzido elimina deslocamentos e cancela entradas em execução. Sem dependências novas.

## Continuidade e interação (15/10/2026)
Transições nativas de vista para filtros (flushSync dentro de startViewTransition) e navegação entre documentos do mesmo domínio. Imagem e título compartilham nomes estáveis por projeto; navegadores sem suporte seguem os links normalmente. Navegação para detalhes usa âncoras nativas para permitir o ciclo entre documentos, sem atraso artificial. Root cruza em 160/320ms, elementos compartilhados em 420ms. Sem dependências novas.

Profundidade das prévias segue o mouse com rotação máxima de 2,5/3 graus, atualizada em RAF sem estado React por quadro, apenas em ponteiro fino. Teclado recebe foco visível e ação da imagem legível. Cartões mantêm a mesma proporção de 1.4 em todos os projetos. A foto abre o site; Explorar projeto abre o detalhe.

Inspiração consultada: Watermelon Journal Navigation (transições curtas e continuidade de seleção), sem copiar o componente ou adicionar dependências Motion. Fotografias e capturas existentes mantidas; nova arte em CSS consiste apenas em órbitas geométricas atrás das interfaces reais.
