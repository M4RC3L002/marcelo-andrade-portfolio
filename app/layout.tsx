import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';
import { site } from '@/lib/site';
export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url), alternates: { canonical: '/' } } : {}),
  title: { default: 'Marcelo Andrade — Desenvolvedor web', template: '%s | Marcelo Andrade' },
  description: 'Marcelo Andrade desenvolve sites e sistemas web. Conheça AndradeTech OS, Brasa Burger e Amarílis Jóias e converse sobre o seu projeto.',
  openGraph: { title: 'Marcelo Andrade — Desenvolvedor web', description: 'Ideias bem pensadas. Experiências bem construídas.', locale: 'pt_BR', type: 'website', ...(site.url ? { url: site.url } : {}) },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#101415', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
