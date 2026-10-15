import type { MetadataRoute } from 'next';
import { projects, site } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return site.url?['',...projects.map(p=>`/projetos/${p.slug}`)].map(path=>({url:`${site.url}${path}`})):[];}
