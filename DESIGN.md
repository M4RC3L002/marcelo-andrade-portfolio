# Portfólio alternativo

Direção editorial inspirada na referência MATE inspecionada em 15/10/2026. Implementação própria, sem reaproveitar materiais da agência.

## Tokens
Fundo #101415, superfície #192022, texto #f0eee5, texto secundário #adb6b5, ciano #63d9d3. Seções claras #f0eee5 com texto #182627. Manrope auto-hospedada. Headline principal fluida de 47 a 112px, leve/itálica na primeira linha e forte/ciano na segunda. Corpo 13 a 16px; texto de apoio 10 a 12px.

## Composição
Cabeçalho de 80px (72px mobile), abertura centralizada, galeria inclinada com três interfaces reais. Serviços em linhas abertas em seção clara. Projetos em duas colunas com prévias de proporção 1.4 e navegação independente para site e detalhes. Sobre em duas colunas claras; contato tipográfico centralizado. Até 700px, menu recolhível e conteúdo em coluna única.

## Interação
Foco visível; menu fecha com Escape e retorna foco ao botão. Seletores aria-pressed; nomes acessíveis; alvos de 44px. Movimento apenas na apresentação inicial do título e no feedback de interação; prefers-reduced-motion desliga as animações. Cabeçalho opaco como fallback de blur e de preferência por transparência reduzida. Projetos são a mídia principal; nenhum vídeo ou fundo decorativo da referência foi copiado.

## Fundo animado
Canvas decorativo com partículas e conexões em ciano, linhas em fluxo e reação ao cursor apenas com mouse. 30 fps, 66 partículas no desktop e 30 no celular, DPR limitado. Pausa manual, pausa fora da tela e em aba oculta. Movimento reduzido desenha quadro estático. Sem biblioteca adicional ou atualizações React por frame.
