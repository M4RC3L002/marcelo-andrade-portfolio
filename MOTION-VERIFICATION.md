# Verificação de movimento e visual — 15/10/2026

- Build de produção e TypeScript concluídos com sucesso.
- Navegação local em desktop 1280px e mobile 390px, sem overflow horizontal.
- Menu mobile abre/fecha; controles têm alvos de 44px e foco visível preservado.
- Pausar animações muda aria-pressed para true e expõe Retomar animações.
- Filtro Gestão apresenta exatamente AndradeTech OS e Controle financeiro.
- Página de detalhe mantém a URL da demonstração pública e do repositório; links de imagem e detalhe são independentes.
- Capturas reais carregadas nas três janelas da abertura.
- View Transitions têm fallback instantâneo; o navegador de inspeção não expõe startViewTransition, portanto a interpolação nativa entre documentos não foi inspecionada nesse navegador.
- Caminhos de prefers-reduced-motion e pausa manual implementados em CSS/WAAPI/canvas. Não houve teste em aparelho físico.

Sem instalação de dependências, alterações em contatos, rotas, metadados ou demonstrações externas.
