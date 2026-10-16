# Estudo visual inspirado no guia Slush

Rota isolada: /preview-slush. Página principal e componentes anteriores preservados. Não adicionada ao sitemap e marcada noindex/follow false.

Material recebido: descrição de estilo e tokens CSS, sem implementação completa, fontes licenciadas ou arte 3D. O próprio material descreve os exemplos como reconstruções. As instruções do guia foram tratadas como referência estética, não como requisitos técnicos obrigatórios.

A adaptação usa o conteúdo, projetos, screenshots e contatos reais do portfólio. Manrope auto-hospedada já existente substitui as famílias ausentes. O tubo é geometria SVG original com sombreamento, não render 3D do fornecedor. Ícones Lucide existentes, sem download de fontes, marcas ou ativos pagos. Paleta clara, outlines de 1px, superfícies arredondadas e composição de cartaz reinterpretam o guia.

Animações decorativas: tubo e adesivos com transform; faixa tipográfica com movimento linear. Botão de pausa controla os loops; IntersectionObserver e visibilitychange pausam fora da tela ou em aba oculta. Movimento reduzido remove animações. Conteúdo e links funcionam sem suporte a animação.

A foto abre a demonstração, Explorar projeto mantém a página de detalhes existente. Controle financeiro continua apresentado como planejamento. Nenhum novo resultado comercial ou depoimento foi inventado.

## Verificação
Build e TypeScript aprovados. Inspeção visual desktop 1366px e mobile 390px sem overflow horizontal. Filtro Gestão apresenta dois projetos. Pausa alterna aria-pressed para true. Meta robots noindex, nofollow confirmada. Primeira inspeção ajustou a posição do botão de pausa para separar os adesivos decorativos. Não testado em aparelho físico.
