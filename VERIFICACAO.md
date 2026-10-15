# Verificação da entrega

- Instalação concluída, com package-lock.json.
- `npm run build`: aprovado; páginas estáticas geradas.
- `npm run typecheck`: aprovado.
- HTTP 200: home, cinco páginas de projeto, robots.txt, sitemap.xml e opengraph-image.
- HTTP 404: endereço inexistente.
- Detector de interface: nenhum achado mecânico.
- Revisão independente de código: quatro ajustes identificados e corrigidos; retorno aprovou os ajustes com limite de inspeção de fonte.

## Limites
O navegador integrado não conectou em duas tentativas. Não foram verificadas capturas desktop/mobile nem interações reais de teclado e toque. A responsividade e a acessibilidade foram inspecionadas no código, não certificadas em navegador.

NEXT_PUBLIC_SITE_URL está vazio intencionalmente. Next.js emite aviso de metadataBase e usa localhost para a imagem social durante a compilação local. Antes de publicar, configurar o domínio real e recompilar; conferir canonical, Open Graph e sitemap. O sitemap local fica vazio até isso acontecer.

GitHub e WhatsApp continuam como placeholders explícitos. Nenhuma implantação na Vercel foi realizada ou verificada.
