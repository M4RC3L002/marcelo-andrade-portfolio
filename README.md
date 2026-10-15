# Marcelo Andrade — Portfólio

Next.js App Router + React + TypeScript + Tailwind CSS. Conteúdo em português, cinco páginas de projetos, filtros, menu mobile acessível e metadados sociais.

## Executar
Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000. Para validar: `npm run build` e `npm run typecheck`. Para servir a compilação: `npm start`.

## Configuração pública
Copie `.env.example` para `.env.local` e preencha somente dados verdadeiros:

- `NEXT_PUBLIC_GITHUB_URL`: URL completa do perfil, por exemplo https://github.com/SEU-USUARIO (substitua o exemplo).
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: código do país, DDD e telefone, apenas números.
- `NEXT_PUBLIC_SITE_URL`: origem HTTPS real da produção, sem barra final. Ausente: sitemap vazio e canonical da home omitido.

Valores NEXT_PUBLIC são públicos e incorporados durante o build. Recompile após editar. Não coloque senhas ou tokens nesses campos.

## Publicar na Vercel
1. Coloque esta pasta em um repositório Git próprio e importe-o em Add New > Project na Vercel. Se o repositório contiver outras pastas, selecione esta pasta como Root Directory.
2. Selecione o preset Next.js, instalação `npm ci` e build `npm run build`. A saída padrão do Next.js é detectada automaticamente.
3. Configure as três variáveis públicas no ambiente desejado. WhatsApp/GitHub podem continuar vazios e aparecem como placeholders.
4. Gere uma implantação Preview. Verifique home, cinco projetos, menu, filtros, retorno de navegação e 404 em desktop e celular.
5. Publique em Production. Defina NEXT_PUBLIC_SITE_URL com o endereço final e reimplante para canonical/sitemap corretos.
6. Confirme que a URL pública responde, que /sitemap.xml contém o domínio correto e que os canais abrem os destinos reais antes de anunciar a publicação.

Alternativa: Vercel CLI autenticada, `vercel` para Preview e `vercel --prod` para produção. Não envie tokens pelo chat; autentique-se na sua conta.

Referências oficiais: [Next.js](https://nextjs.org/docs/app/getting-started/installation), [Tailwind](https://tailwindcss.com/docs/installation/framework-guides/nextjs), [Vercel](https://vercel.com/docs/projects/deploy-from-cli).

## Conteúdo pendente
GitHub, WhatsApp, biografia detalhada e evidências dos produtos não foram fornecidos. Nenhum projeto é apresentado como concluído. As prévias são conceitos visuais com dados sintéticos. Contato não possui formulário que simule envio.

Veja PLANEJAMENTO.md para layout e roteiro de evolução. Este pacote não comprova implantação na Vercel.
