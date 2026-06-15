# Skill: Gerar Seção — Academia FitCode

## Quando usar
seção, hero, cards, planos, depoimentos, rodapé, modalidades, benefícios, sobre, contato, formulário, banner

---

## Contexto do projeto

- **Projeto:** Site institucional Academia FitCode
- **Stack:** HTML5 semântico + CSS puro (sem frameworks)
- **Prefixo CSS obrigatório:** `fc-`
- **Padrão de nomenclatura:** BEM — `fc-bloco__elemento--modificador`
- **Variáveis CSS:** `--fc-color-primary` (#10b981), `--fc-color-bg` (#0d1117), `--fc-font-body` (system-ui)
- **Idioma:** pt-BR

---

## Template base para qualquer seção

```html
<section id="[id-da-secao]" class="fc-[nome-secao]" aria-labelledby="[id-da-secao]-titulo">
  <div class="fc-container">

    <!-- Cabeçalho da seção -->
    <header class="fc-[nome-secao]__header">
      <p class="fc-section-label">[RÓTULO EM MAIÚSCULAS]</p>
      <h2 id="[id-da-secao]-titulo" class="fc-section-title">[Título da Seção]</h2>
      <p class="fc-section-sub">[Subtítulo ou descrição curta]</p>
    </header>

    <!-- Conteúdo principal — adapte conforme o tipo de seção -->
    <div class="fc-[nome-secao]__body">
      <!-- cards, grid, lista, formulário, etc. -->
    </div>

  </div>
</section>
```

---

## Template: Card de modalidade / benefício

```html
<article class="fc-card" aria-labelledby="card-[slug]-titulo">
  <div class="fc-card__icon" aria-hidden="true">[emoji ou SVG]</div>
  <div class="fc-card__content">
    <h3 id="card-[slug]-titulo" class="fc-card__title">[Nome]</h3>
    <p class="fc-card__desc">[Descrição breve]</p>
    <span class="fc-card__tag">[Tag]</span>
  </div>
</article>
```

---

## Template: Hero com CTA

```html
<section id="hero" class="fc-hero" aria-labelledby="hero-titulo">
  <!-- Camadas de fundo (pool, gradiente, overlay) -->
  <div class="fc-hero__bg" aria-hidden="true">
    <div class="fc-hero__pool"></div>
    <div class="fc-hero__overlay"></div>
  </div>

  <!-- Conteúdo -->
  <div class="fc-hero__content">
    <p class="fc-hero__badge">[Badge]</p>
    <h1 id="hero-titulo" class="fc-hero__title">[Título principal]</h1>
    <p class="fc-hero__subtitle">[Subtítulo]</p>
    <div class="fc-hero__actions">
      <a href="#[ancora]" class="fc-btn fc-btn--primary">[CTA Principal]</a>
      <a href="#[ancora]" class="fc-btn fc-btn--outline">[CTA Secundário]</a>
    </div>
  </div>
</section>
```

---

## Regras obrigatórias de responsividade (mobile-first)

```css
/* Base: mobile (< 480px) */
.fc-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet (≥ 640px) */
@media (min-width: 640px) {
  .fc-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (≥ 1024px) */
@media (min-width: 1024px) {
  .fc-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Viewport meta obrigatório */
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */
```

---

## Checklist antes de entregar a seção

- [ ] `<section>` tem `id` e `aria-labelledby` apontando para o `<h2>` interno
- [ ] Todas as classes usam prefixo `fc-`
- [ ] `<img>` tem `alt` descritivo
- [ ] Contraste de texto ≥ 4.5:1 (WCAG AA)
- [ ] Layout mobile-first com `@media` para tablet e desktop
- [ ] Nenhum `<div>` onde um elemento semântico se aplica
- [ ] `<meta name="viewport">` presente no `<head>`
