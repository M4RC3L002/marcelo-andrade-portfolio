# Watermelon UI — adaptações

Fontes consultadas pelo complemento Watermelon UI em 15/10/2026:
- Navigation 1: https://ui.watermelon.sh/block/navigation-1 — estados dos links, espaçamento e organização desktop/mobile. Adaptado para âncoras, indicação da seção atual e menu existente, sem mega menu desnecessário.
- Tabs 1: https://ui.watermelon.sh/components/tabs — superfície segmentada, estados selecionados e espaçamento. Adaptado em components/project-filters.tsx para filtros com aria-pressed e contagem; não são painéis de abas.
- Contact 1: https://ui.watermelon.sh/block/contact-1 — métodos tipados com título, descrição e ação explícita. Adaptado em components/contact-methods.tsx, com Lucide e tokens locais, preservando placeholders honestos.

As fontes foram obtidas com get_component. As dependências de shadcn/Base UI não foram adicionadas: os padrões foram adaptados ao HTML semântico e à biblioteca de ícones já instalada. Não foi instalada uma biblioteca runtime Watermelon. As sugestões de dashboards financeiros e heroes de terapia/comércio foram descartadas por não corresponderem ao portfólio.

Refinamentos próprios: captura do AndradeTech sem inclinação e com mais espaço; ações visíveis nos projetos; status distinguíveis; filtros em duas colunas no celular; links de contato com alvos de toque maiores.

Direção adicional: acabamento contemporâneo e glassmorphism restrito ao AndradeTech OS, conforme pedido explícito do usuário. Sem biblioteca de animação extra.
