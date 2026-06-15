---
applyTo: "**/*.html"
---

# Instructions de SEO — Academia FitCode

Aplique estas regras em **todo** arquivo HTML do projeto.

## Meta tags obrigatórias por página

```html
<!-- Obrigatório em toda página -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[120–160 caracteres descrevendo a página]">

<!-- Open Graph (redes sociais) -->
<meta property="og:title"       content="[título da página]">
<meta property="og:description" content="[mesma descrição ou variação]">
<meta property="og:image"       content="[URL absoluta da imagem 1200×630px]">
<meta property="og:url"         content="[URL canônica da página]">
<meta property="og:type"        content="website">
<meta property="og:locale"      content="pt_BR">

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="[título]">
<meta name="twitter:description" content="[descrição]">
<meta name="twitter:image"       content="[URL da imagem]">
```

## Regras para `<title>`

- Máximo **60 caracteres** (incluindo separador e nome do site)
- Formato: `[Página] — Academia FitCode`
- Único por página — nunca repita o mesmo título
- Palavras-chave relevantes no início

## Regras para `<meta name="description">`

- Entre **120 e 160 caracteres**
- Inclua chamada para ação quando possível
- Inclua a palavra-chave principal
- Não duplique entre páginas

## Estrutura de headings para SEO

- Somente **um `<h1>` por página** — descreve o tópico principal
- `<h2>` para seções principais
- `<h3>` para subseções
- Inclua palavras-chave naturalmente nos headings — sem keyword stuffing

## URLs e links

- `href` nos `<a>` devem ser URLs significativas (nunca `javascript:void(0)`)
- Links externos: `rel="noopener noreferrer"`
- Links internos: use caminhos relativos
- Texto âncora descritivo (evite "clique aqui", "saiba mais" sem contexto)

## Imagens e SEO

- `alt` de imagens indexáveis: inclua palavras-chave naturalmente
- Nomes de arquivos descritivos: `nadador-piscina.webp` (não `img001.jpg`)
- `loading="lazy"` em imagens abaixo do fold
- `width` e `height` definidos para evitar layout shift (CLS)

## Dados estruturados (Schema.org)

Para a página principal da academia, adicione:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Academia FitCode",
  "description": "Academia completa com musculação, natação, yoga e mais.",
  "url": "https://edymonte.github.io/site-academia/",
  "address": { "@type": "PostalAddress", "addressLocality": "Brasil" }
}
```
