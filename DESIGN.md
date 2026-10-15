---
name: Marcelo Andrade
description: Portfólio editorial de desenvolvimento web em azul-marinho e ciano.
colors:
  background: "#081823"
  surface: "#102530"
  accent: "#57dcdf"
  text: "#edf5f7"
  muted: "#a4bac6"
  line: "#29414e"
  accent-hover: "#9ceff0"
typography:
  display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(46px, 5.5vw, 76px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 46px)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "15px"
    lineHeight: 1.7
rounded:
  chip: "4px"
  control: "5px"
  window: "6px"
  preview: "7px"
  hero-frame: "10px"
spacing:
  desktop-section: "104px"
  mobile-section: "65px"
  desktop-gutter: "48px"
  tablet-gutter: "32px"
  mobile-gutter: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.background}"
  filter-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.control}"
    padding: "10px 18px"
  technology-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.chip}"
    padding: "5px 12px"
---

# Design System: Marcelo Andrade

## Overview

**Creative North Star: "Portfólio editorial de produtos digitais"**

Composição própria em português, com títulos amplos, superfícies escuras e ciano para ações. O trabalho aparece como conceito visual desde a primeira tela.

**Key Characteristics:**
- Hierarquia tipográfica ampla e espaços generosos.
- Linhas abertas para organizar serviços e conteúdo.
- Prévias ilustrativas acompanhadas de estado explícito.

Extraído de app/globals.css e dos componentes. Revisão em navegador e validação visual indisponíveis nesta etapa. A direção registra a implementação atual, sem alegar aprovação visual adicional.

## Colors

### Primary
Ciano luminoso (accent) para ações, foco, seleção e palavras em destaque. Accent-hover clareia a ação principal no hover.

### Neutral
Marinho profundo (background) sustenta a página; surface organiza menu e etiquetas. Text é branco frio; muted é azul acinzentado para apoio; line separa seções. Prévias ilustrativas têm paletas locais próprias.

## Typography

Manrope Variable auto-hospedada pelo pacote de fontes, com fallback sans-serif. Escalas principais no frontmatter. Corpo por componente entre 13 e 15px; textos de apoio e miniaturas são menores. Títulos têm tracking negativo. Hero mobile: clamp(41px, 10.7vw, 65px). Descrição do hero limitada a 40ch; apresentação pessoal a 55ch. Miniaturas são decorativas.

## Layout

Conteúdo máximo de 1184px. Gutters do frontmatter correspondem a desktop, até 1000px e até 700px. Hero em duas colunas, serviços em três, sobre e contato em duas. Grade de projetos com duas colunas e primeiro resultado amplo. Até 700px, uma coluna, monograma decorativo oculto e navegação recolhível. Cabeçalho sticky de 88px, reduzido a 72px no mobile. Seções usam espaçamentos do frontmatter.

## Elevation & Depth

Camadas tonais e divisores predominam. Janelas ilustrativas usam sombra 0 16px 35px #0002. Moldura do hero levemente rotacionada retorna a zero no hover com transição de 0.3s ease-out. Movimento reduzido remove transições, animações e a rotação do hero.

## Shapes

Raios variam conforme o papel descrito no frontmatter. Conteúdo principal aberto, com linhas em vez de cartões ao redor de cada seção.

## Components

- Ação principal: peso 750, altura mínima 48px, hover claro; foco com contorno ciano de 2px e afastamento de 6px.
- Filtros: altura mínima 44px, aria-pressed, seleção ciano, hover sobre superfície e contagem anunciada.
- Navegação: links de apoio ficam ciano no hover. Mobile usa botão de 44px; Escape fecha e devolve foco; links fecham o menu.
- Etiquetas de tecnologia: rótulos sem ação sobre superfície escura.
- Prévias: interfaces decorativas HTML/CSS, com dados ilustrativos e estado Planejado. Detalhes apresentam problema, escopo e próximos passos.
- Contato: canais pendentes são texto estático. Não há formulário ou campo de entrada.

## Do's and Don'ts

### Do:
- Do manter ciano nas ações, seleção e foco.
- Do preservar rótulos de conceito e estado Planejado nas propostas.
- Do respeitar movimento reduzido e manter conteúdo visível sem animação de entrada.

### Don't:
- Don't apresentar prévias como capturas de produtos concluídos.
- Don't criar links falsos para canais ainda não informados.
- Don't substituir a composição aberta por cartões em todas as seções.
