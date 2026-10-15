const github = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || 'https://github.com/M4RC3L002';
const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
export const site = {
  github: github && /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/.test(github) ? github : null,
  whatsapp: phone && /^[1-9]\d{9,14}$/.test(phone) ? `https://wa.me/${phone}` : null,
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://marcelo-andrade-portfolio-virid.vercel.app',
};
export const projects = [
  { slug: 'andradetech-os', name: 'AndradeTech OS', category: 'Gestão', kind: 'Sistema de gestão', text: 'Um ponto de encontro para clientes, equipamentos e ordens de serviço.', problem: 'Organizar o acompanhamento de uma assistência técnica em um único lugar.', scope: ['Ordens de serviço e etapas de atendimento', 'Cadastro de clientes e equipamentos', 'Visão geral da operação'], tone: 'os' },
  { slug: 'cardapio-digital', name: 'Cardápio digital', category: 'Comércio', kind: 'Experiência de pedidos', text: 'Do primeiro olhar ao pedido: uma experiência pensada para dar água na boca.', problem: 'Facilitar a consulta de produtos e a organização de pedidos pelo celular.', scope: ['Categorias e detalhes dos produtos', 'Seleção de itens e resumo do pedido', 'Fluxo de contato com o estabelecimento'], tone: 'menu' },
  { slug: 'loja-virtual', name: 'Loja virtual', category: 'Comércio', kind: 'E-commerce', text: 'Produtos em destaque, navegação simples e um caminho claro até o carrinho.', problem: 'Apresentar um catálogo de produtos com uma jornada de compra compreensível.', scope: ['Catálogo e filtros de produtos', 'Página de produto e carrinho', 'Planejamento da integração de pagamento'], tone: 'shop' },
  { slug: 'agendamento-online', name: 'Agendamento online', category: 'Produtividade', kind: 'Organização de agenda', text: 'Menos troca de mensagens. Mais clareza para escolher o próximo horário.', problem: 'Tornar visíveis os serviços e horários disponíveis para uma reserva.', scope: ['Seleção de serviço, data e horário', 'Confirmação de agendamento', 'Planejamento de regras de disponibilidade'], tone: 'schedule' },
  { slug: 'controle-financeiro', name: 'Controle financeiro', category: 'Gestão', kind: 'Finanças pessoais', text: 'Entradas, saídas e decisões mais claras em uma visão organizada.', problem: 'Reunir movimentações financeiras e facilitar sua leitura por período.', scope: ['Registro de entradas e saídas', 'Categorias e filtros por período', 'Resumo de movimentações'], tone: 'finance' },
] as const;


