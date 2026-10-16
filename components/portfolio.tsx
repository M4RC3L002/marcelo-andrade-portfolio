'use client';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Github, Mail, Menu, MessageCircle, X } from 'lucide-react';
import { projects, site } from '@/lib/site';
import Preview from './preview';
import ProjectFilters from './project-filters';
import HeroBackground from './hero-background';
import MotionEffects from './motion-effects';

const links = [['inicio', 'Início'], ['servicos', 'Serviços'], ['sobre', 'Sobre'], ['projetos', 'Projetos'], ['contato', 'Contato']];
const covers = [
 {name:'AndradeTech OS', src:'/images/andradetech-demo-preview.jpg', href:'https://andradetech-demo.vercel.app/', tone:'os'},
 {name:'Brasa Burger', src:'/images/brasa-preview.jpg', href:'https://projeto-02-cardapio-digital-brasa-b.vercel.app/', tone:'menu'},
 {name:'Amarílis Jóias', src:'/images/amarilis-preview.jpg', href:'https://amarilis-joias.pages.dev/', tone:'shop'},
];
export default function Portfolio() {
 const [open,setOpen] = useState(false);
 const [filter,setFilter] = useState('Todos');
 const [active,setActive] = useState('inicio');
 const changeFilter=(value:string)=>{
  if(value===filter)return;
  if(document.startViewTransition&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&document.documentElement.dataset.motionPaused!=='true')document.startViewTransition(()=>flushSync(()=>setFilter(value)));
  else setFilter(value);
 };
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(entry.target.id);},{rootMargin:'-18% 0px -57% 0px',threshold:0});
  links.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el);});
  return()=>observer.disconnect();
 },[]);
 const menuButton = useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(!open)return; const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);menuButton.current?.focus();}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[open]);
 const filtered=projects.filter(p=>filter==='Todos'||p.category===filter);
 return <>
  <MotionEffects filter={filter}/>
  <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header className="header"><div className="container header-inner">
   <a className="wordmark" href="#inicio" aria-label="Marcelo Andrade, início">ma<span>.</span></a>
   <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined}>{label}</a>)}</nav>
   <div className="header-actions"><a className="button primary small" href={site.whatsapp || '#contato'} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16}/></a><button ref={menuButton} className="menu-button" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Fechar menu':'Abrir menu'}>{open?<X/>:<Menu/>}</button></div>
  </div><nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>{links.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={20}/></a>)}</nav></header>
  <main id="conteudo">
   <section className="hero" id="inicio"><HeroBackground/><div className="hero-layout container">
    <div className="hero-copy"><h1><span className="title-mask"><span>Da sua ideia</span></span><strong className="title-mask"><span>para o<br/>mundo<span className="title-dot">.</span></span></strong></h1><p>Sou Marcelo Andrade. Desenvolvo sites e sistemas web que conectam o seu negócio às pessoas.</p><div className="hero-actions"><a className="button primary" href="#projetos">Conheça meu trabalho <ArrowRight size={20}/></a><a className="text-link" href="#contato">Vamos tirar do papel <ArrowUpRight size={18}/></a></div></div>
    <div className="showreel" aria-label="Conheça os sites dos projetos"><div className="showcase-orbit" aria-hidden="true"/>{covers.map((cover,i)=><a className={`reel-card reel-${cover.tone}`} key={cover.name} href={cover.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir site de ${cover.name} (nova aba)`}><div className="window-chrome" aria-hidden="true"><span/><span/><span/><small>{new URL(cover.href).hostname}</small><ArrowUpRight size={12}/></div><div className="reel-image"><Image unoptimized src={cover.src} alt={`Interface de ${cover.name}`} width={1280} height={900} priority={i===1}/></div><span>{cover.name}<ArrowUpRight size={16}/></span></a>)}</div>
   </div><div className="hero-foot container"><p>Design com intenção. Código que conecta.</p><a className="scroll-cue" href="#projetos">Explore os projetos <ArrowRight size={16}/></a></div></section>
   <section className="manifesto container"><h2>Uma boa ideia merece<br/><span>uma experiência à altura.</span></h2><div className="manifesto-bottom"><p>Clareza para quem visita.<br/>Lógica para quem usa.<br/>Cuidado em cada tela.</p><p>Do primeiro contato ao último clique, o desenvolvimento e o design trabalham juntos para tornar a sua presença digital mais útil.</p></div></section>
   <section className="services light-section" id="servicos"><div className="container"><div className="section-lead"><h2>O que vamos<br/>construir juntos?</h2><p>Seu negócio tem uma necessidade.<br/>O projeto começa por ela.</p></div><div className="service-list">{[
    {title:'Sites & landing pages',description:'Presença digital com identidade, conteúdo bem organizado e uma boa experiência em qualquer tela.',detail:'Apresente seu negócio. Facilite o contato.'},
    {title:'Sistemas web',description:'Interfaces para organizar processos e transformar tarefas do dia a dia em fluxos mais simples.',detail:'Conecte informações. Simplifique a rotina.'},
    {title:'Experiências de comércio',description:'Catálogos, cardápios e lojas virtuais que facilitam a descoberta de produtos e a jornada de compra.',detail:'Mostre seus produtos. Aproxime as pessoas.'},
   ].map(s=><a className="service-row" href={site.whatsapp || '#contato'} target="_blank" rel="noopener noreferrer" key={s.title}><h3>{s.title}</h3><div><p>{s.description}</p><span>{s.detail}</span></div><ArrowUpRight size={26} strokeWidth={1.5}/></a>)}</div></div></section>
   <section className="projects section container" id="projetos"><div className="section-lead"><h2>Já saiu<br/><span>do papel.</span></h2><p>Explore as interfaces, abra as demonstrações e conheça as ideias que seguem em construção.</p></div><div className="projects-toolbar"><ProjectFilters value={filter} onChange={changeFilter}/><p aria-live="polite">{filtered.length} {filtered.length===1?'projeto':'projetos'}</p></div><div className="project-grid" id="project-results">{filtered.map(p=><article className="project" key={p.slug}>
    {p.demo ? <a className="project-photo" href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir site de ${p.name} (nova aba)`}><Preview tone={p.tone}/><span className="preview-action" aria-hidden="true">Abrir site <ArrowUpRight size={18}/></span></a> : <a className="project-photo" href={`/projetos/${p.slug}`} aria-label={`Conhecer projeto: ${p.name}`}><Preview tone={p.tone}/></a>}
    <div className="project-title"><h3 style={{viewTransitionName:`title-${p.tone}`}}>{p.name}</h3><a className="project-open" href={`/projetos/${p.slug}`} aria-label={`Explorar projeto: ${p.name}`}>Explorar projeto <ArrowUpRight size={16}/></a></div><p>{p.text}</p><div className="project-meta"><span>{p.kind}</span><span>{p.demo?'Demonstração publicada':'Planejado'}</span></div>{p.repository&&<a className="code-link" href={p.repository} target="_blank" rel="noopener noreferrer">Ver código no GitHub <Github size={15}/></a>}
   </article>)}</div><p className="project-disclosure">Brasa Burger é uma hamburgueria fictícia. Amarílis Jóias é uma vitrine demonstrativa, sem vendas disponíveis. O AndradeTech pode ser testado com dados fictícios salvos no navegador; pagamentos e mensagens são simulados. Forma é uma demonstração de solicitação de horário, sujeita a confirmação pelo estabelecimento. Controle Financeiro simula conexões bancárias com dados fictícios. Ponto & Papel é uma demonstração local de vendas e estoque, sem pagamentos reais.</p></section>
   <section className="about light-section" id="sobre"><div className="container about-grid"><div><h2>Código com lógica.<br/><span>Design com intenção.</span></h2><a className="text-link" href={site.github || '#projetos'} target="_blank" rel="noopener noreferrer">Por dentro do código <Github size={18}/></a></div><div className="about-copy"><p className="large-copy">Sou Marcelo Andrade.<br/>Meu foco é desenvolvimento web: unir a estrutura de um bom sistema ao cuidado de uma boa interface.</p><p>Este portfólio reúne projetos desenvolvidos e ideias em construção: ferramentas para negócios, experiências de compra e soluções para organizar a rotina.</p><p>Por aqui, cada projeto começa com uma pergunta: como tornar essa experiência mais clara e útil para quem vai usar?</p><div className="skills" aria-label="Tecnologias deste portfólio">{['Next.js','React','TypeScript','Tailwind CSS','Design responsivo'].map(s=><span key={s}>{s}</span>)}</div></div></div></section>
   <section className="contact section container" id="contato"><h2>O próximo projeto<br/>pode ser <span>o seu.</span></h2><p>Conte sua ideia. Vamos conversar sobre o que você precisa<br className="wide-break"/> e encontrar o caminho para construir.</p><a className="button primary contact-cta" href={site.whatsapp || '#contato'} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={22}/></a><div className="contact-direct"><a href={`mailto:${site.email}`}><Mail size={18}/>{site.email}</a><a href={site.whatsapp || '#contato'} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>{site.phoneLabel}</a></div></section>
  </main>
  <footer className="container footer"><a className="wordmark" href="#inicio" aria-label="Voltar ao início">ma<span>.</span></a><p>Marcelo Andrade © {new Date().getFullYear()}</p><a className="text-link" href="#inicio">Voltar ao topo <ArrowUpRight size={16}/></a></footer>
 </>;
}
