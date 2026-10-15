import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects, site } from '@/lib/site';
import Preview from '@/components/preview';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(p=>p.slug===slug);return {title:p?.name||'Projeto não encontrado',description:p?.text,...(site.url ? {alternates:{canonical:`/projetos/${slug}`}} : {})};}
export default async function Project({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <main className="container detail"><Link className="text-link" href="/#projetos"><ArrowLeft size={18}/> Voltar aos projetos</Link><div className="detail-heading"><h1>{p.name}</h1><p>{p.text}</p><span className="status">Planejado · conceito de produto</span></div><Preview tone={p.tone} large/><div className="detail-columns"><section><h2>O problema a explorar</h2><p>{p.problem}</p><p>Esta página apresenta a proposta de desenvolvimento. A prévia é ilustrativa e não representa um sistema já implementado.</p></section><section><h2>Escopo inicial</h2><ul>{p.scope.map(x=><li key={x}>{x}</li>)}</ul></section><section><h2>Próximos passos</h2><p>Validar requisitos, desenhar os fluxos, construir o MVP e testar com pessoas antes da publicação.</p><p>Demonstração e repositório: ainda não disponíveis.</p></section></div><Link className="button primary" href="/#contato">Conversar sobre uma ideia <ArrowUpRight size={18}/></Link></main>;}

