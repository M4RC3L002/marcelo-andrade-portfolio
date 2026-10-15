import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import { site } from '@/lib/site';
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: '/' } } : {}),
  title: { default: 'Marcelo Andrade — Desenvolvedor web', template: '%s | Marcelo Andrade' },
  description: 'Portfólio de Marcelo Andrade. Conheça propostas de sistemas de gestão, lojas virtuais, cardápios digitais e soluções web.',
  openGraph: { title: 'Marcelo Andrade — Desenvolvedor web', description: 'Ideias bem pensadas. Experiências bem construídas.', locale: 'pt_BR', type: 'website', ...(site.url ? { url: site.url } : {}) },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#081823', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
