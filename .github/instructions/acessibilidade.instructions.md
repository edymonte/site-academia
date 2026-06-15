---
applyTo: "**/*.html"
---

# Instructions de Acessibilidade — Academia FitCode

Aplique estas regras em **todo** arquivo HTML do projeto.

## Atributos ARIA obrigatórios

- `<nav>` principal: `aria-label="Navegação principal"`
- `<nav>` secundária: `aria-label="Navegação secundária"`
- `<button>` sem texto visível: `aria-label` descritivo obrigatório
- `<a>` que abre em nova aba: `aria-label="... (abre em nova aba)"` + `target="_blank" rel="noopener noreferrer"`
- Ícones decorativos em SVG: `aria-hidden="true"`
- Ícones funcionais em SVG: `role="img"` + `<title>` + `aria-labelledby`

## Roles ARIA

- Use `role="banner"` no `<header>` principal
- Use `role="main"` no `<main>`
- Use `role="contentinfo"` no `<footer>`
- Use `role="search"` em formulários de busca

## Contraste de cores (WCAG AA)

- Texto normal (< 18pt / 14pt bold): contraste mínimo **4.5:1**
- Texto grande (≥ 18pt / 14pt bold): contraste mínimo **3:1**
- Componentes UI e bordas de formulário: contraste mínimo **3:1**
- Nunca use cinza claro em texto sobre fundo branco

## Foco e teclado

- Nunca use `outline: none` sem substituir por foco visível equivalente
- Ordem de tabulação lógica (não use `tabindex` positivo)
- Elementos interativos personalizados: `tabindex="0"` + `role` adequado + evento `keydown`

## Imagens

- `alt` descritivo: descreva o **conteúdo e propósito**, não a aparência literal
  - Correto: `alt="Nadador realizando nado crawl na piscina olímpica"`
  - Incorreto: `alt="imagem"`, `alt="foto"`, `alt="img1"`
- Imagens puramente decorativas: `alt=""`
- Imagens com texto: o `alt` deve conter o texto da imagem

## Formulários

- Todo `<input>`, `<select>`, `<textarea>`: precisa de `<label for="id">` correspondente
- Mensagens de erro: `aria-describedby` apontando para o elemento de erro
- Campos obrigatórios: `required` + `aria-required="true"`

## Skip links

- Adicione `<a href="#main-content" class="fc-skip-link">Pular para conteúdo</a>` como primeiro filho do `<body>`
