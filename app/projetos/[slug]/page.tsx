import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { projects, site } from '@/lib/site';
import Preview from '@/components/preview';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name||'Projeto não encontrado',description:p?.text,...(site.url ? {alternates:{canonical:`/projetos/${slug}`}} : {})};}
export default async function Project({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=projects.find(p=>p.slug===slug); if(!p)notFound();
 return <main className="container detail">
  <a className="text-link" href="/#projetos"><ArrowLeft size={18}/> Voltar aos projetos</a>
  <div className="detail-heading"><h1 style={{viewTransitionName:`title-${p.tone}`}}>{p.name}</h1><p>{p.text}</p><span className="status">{p.demo ? 'Demonstração publicada' : p.tone === 'os' ? 'Interface apresentada · visão inicial' : 'Planejado · conceito de produto'}</span>
   {p.demo && <div className="project-actions"><a className="button primary" href={p.demo} target="_blank" rel="noopener noreferrer">Abrir demonstração <ArrowUpRight size={18}/></a>{p.repository && <a className="text-link" href={p.repository} target="_blank" rel="noopener noreferrer">Ver código no GitHub <Github size={18}/></a>}</div>}
  </div>
  <Preview tone={p.tone} large/>
  {p.stack && <div className="skills" aria-label="Tecnologias do projeto">{p.stack.map(x=><span key={x}>{x}</span>)}</div>}
  <div className="detail-columns">
   <section><h2>{p.demo ? 'A proposta' : 'O problema a explorar'}</h2><p>{p.problem}</p><p>{p.note || (p.tone === 'os' ? 'A imagem mostra o dashboard do AndradeTech OS em seu estado inicial, sem ordens cadastradas. O nome do usuário foi ocultado para esta apresentação. A captura não comprova, por si só, o funcionamento de todos os módulos.' : 'Esta página apresenta a proposta de desenvolvimento. A prévia é ilustrativa e não representa um sistema já implementado.')}</p></section>
   <section><h2>{p.demo ? 'O que você pode explorar' : 'Escopo inicial'}</h2><ul>{p.scope.map(x=><li key={x}>{x}</li>)}</ul></section>
   <section><h2>{p.demo ? 'Experimente o projeto' : 'Próximos passos'}</h2>{p.demo ? <><p>Abra a demonstração para conhecer a interface e explorar os fluxos disponíveis.</p><a className="text-link" href={p.demo} target="_blank" rel="noopener noreferrer">Visitar {p.tone === 'os' ? 'o AndradeTech Demo' : p.tone === 'menu' ? 'o cardápio' : p.tone === 'schedule' ? 'a Forma' : p.tone === 'finance' ? 'o Controle Financeiro' : 'a Amarílis'} <ArrowUpRight size={16}/></a></> : <><p>Validar requisitos, desenhar os fluxos, construir o MVP e testar com pessoas antes da publicação.</p><p>Demonstração e repositório: ainda não disponíveis.</p></>}</section>
  </div>
  <a className="button primary" href="/#contato">Conversar sobre uma ideia <ArrowUpRight size={18}/></a>
 </main>;
}
