# 🎨 Squad Front-End — Academia FitCode

Você está na branch correta: **`feature/front`** ✅

---

## Missão do Time

O time Front-End é responsável por toda a camada visual e de experiência do usuário do site da Academia FitCode.

---

## Responsabilidades

| Área | Descrição |
|------|-----------|
| **HTML Semântico** | Estrutura com `<section>`, `<article>`, `<header>`, `<nav>`, `<footer>` |
| **CSS / Design** | Tema dark, variáveis `--fc-color-*`, classes com prefixo `fc-` |
| **Acessibilidade** | WCAG AA — `aria-*`, contraste 4.5:1, foco visível |
| **Responsividade** | Mobile-first: 375px → 768px → 1280px |
| **Animações** | Pool effect, SVG swimmer, `@keyframes` |

---

## Arquivos sob responsabilidade

```
index.html          ← Página principal
src/**/*.html       ← Demais páginas
src/**/*.css        ← Estilos (classes com prefixo fc-)
```

---

## Governança Copilot aplicada a este time

- 📋 **Instructions** → `.github/instructions/acessibilidade.instructions.md` (applyTo: `**/*.html`)
- 📋 **Instructions** → `.github/instructions/seo.instructions.md` (applyTo: `**/*.html`)
- 🧠 **Skill** → `.github/skills/gerar-secao/SKILL.md`
- 🤖 **Agent** → `@qa-academia` para revisão de qualidade
- 🪝 **Hook** → `lint-guard` valida `alt`, `fc-`, `outline`

---

## Como contribuir

```bash
# Crie sua feature a partir desta branch
git checkout -b feature/front/nome-da-feature

# Após as alterações
git add .
git commit -m "feat: descrição da mudança"
git push origin feature/front/nome-da-feature

# Abra um Pull Request → feature/front
```

---

> **Dica:** Rode `@qa-academia` no Copilot Chat após cada mudança significativa para validar acessibilidade e SEO.
