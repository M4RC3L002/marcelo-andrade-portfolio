const github = process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || 'https://github.com/M4RC3L002';
const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '5573988343028').replace(/\D/g, '');
export const site = {
  email: 'marcelo.andrade.webdev@gmail.com',
  phoneLabel: '(73) 98834-3028',
  github: github && /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/?$/.test(github) ? github : null,
  whatsapp: phone && /^[1-9]\d{9,14}$/.test(phone) ? `https://wa.me/${phone}` : null,
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://marcelo-andrade-portfolio-virid.vercel.app',
};
export type Project = {
 slug: string; name: string; category: string; kind: string; text: string;
 problem: string; scope: readonly string[]; tone: string;
 demo?: string; repository?: string; stack?: readonly string[]; note?: string;
};
export const projects: readonly Project[] = [
  { slug: 'andradetech-os', name: 'AndradeTech OS', category: 'Gestão', kind: 'Sistema de gestão', text: 'Um ponto de encontro para clientes, equipamentos e ordens de serviço.', problem: 'Organizar o acompanhamento de uma assistência técnica em um único lugar.', scope: ['Ordens de serviço e etapas de atendimento', 'Cadastro de clientes e equipamentos', 'Visão geral da operação'], tone: 'os' },
  { slug: 'cardapio-digital', name: 'Brasa Burger · Cardápio digital', category: 'Comércio', kind: 'Cardápio mobile', text: 'Escolher, personalizar e montar a sacola: um cardápio pensado para o celular.', problem: 'Reunir produtos, adicionais e observações em um pedido fácil de revisar pelo celular.', scope: ['Busca por nome e ingrediente, com categorias', 'Adicionais, observações e quantidades', 'Sacola persistente, entrega ou retirada e resumo do pedido', 'Envio pelo WhatsApp quando o número da loja estiver configurado'], tone: 'menu', demo: 'https://projeto-02-cardapio-digital-brasa-b.vercel.app/', repository: 'https://github.com/M4RC3L002/projeto-02-cardapio-digital-brasa-burguer', stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'], note: 'Hamburgueria fictícia. Fotos, produtos e preços ilustrativos. A demonstração prepara o resumo; o envio depende de WhatsApp configurado. Não recebe pagamentos nem registra pedidos em servidor.' },
  { slug: 'loja-virtual', name: 'Amarílis Jóias', category: 'Comércio', kind: 'Vitrine de joias', text: 'Uma vitrine em verde e dourado, com catálogo, favoritos e uma seleção feita com cuidado.', problem: 'Traduzir a identidade da Amarílis em uma experiência de descoberta e seleção de joias.', scope: ['Catálogo por categoria e busca', 'Detalhes das peças e favoritos', 'Carrinho local e revisão demonstrativa de checkout', 'Apresentação da marca e navegação responsiva'], tone: 'shop', demo: 'https://amarilis-joias.pages.dev/', stack: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'], note: 'Vitrine demonstrativa com catálogo em preparação e fotografias de referência. Vendas, pagamentos e frete ainda não estão disponíveis. Código-fonte em repositório privado.' },
  { slug: 'agendamento-online', name: 'Agendamento online', category: 'Produtividade', kind: 'Organização de agenda', text: 'Menos troca de mensagens. Mais clareza para escolher o próximo horário.', problem: 'Tornar visíveis os serviços e horários disponíveis para uma reserva.', scope: ['Seleção de serviço, data e horário', 'Confirmação de agendamento', 'Planejamento de regras de disponibilidade'], tone: 'schedule' },
  { slug: 'controle-financeiro', name: 'Controle financeiro', category: 'Gestão', kind: 'Finanças pessoais', text: 'Entradas, saídas e decisões mais claras em uma visão organizada.', problem: 'Reunir movimentações financeiras e facilitar sua leitura por período.', scope: ['Registro de entradas e saídas', 'Categorias e filtros por período', 'Resumo de movimentações'], tone: 'finance' },
] as const;
