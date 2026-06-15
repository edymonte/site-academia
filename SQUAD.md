# ✍️ Squad Conteúdo — Academia FitCode

Você está na branch correta: **`feature/conteudo`** ✅

---

## Missão do Time

O time de Conteúdo é responsável por toda a comunicação textual, identidade de marca e base de conhecimento do site da Academia FitCode.

---

## Responsabilidades

| Área | Descrição |
|------|-----------|
| **Copywriting** | Textos de hero, CTAs, benefícios, descrições das modalidades |
| **Knowledge Base** | Wiki de identidade visual e conteúdo da academia |
| **SEO On-page** | `<title>`, `<meta description>`, `og:*`, headings |
| **Prompts** | Prompts do Copilot que injetam contexto de marca |
| **Documentação** | `docs/wiki/` — guia de voz, tom, vocabulário da marca |

---

## Arquivos sob responsabilidade

```
docs/wiki/identidade-visual.md     ← Paleta, tipografia, tom de voz
docs/wiki/conteudo-academia.md     ← Textos, modalidades, benefícios
.github/prompts/                   ← Prompts de Knowledge Base
index.html  (seções de texto)      ← Hero, benefícios, modalidades
```

---

## Governança Copilot aplicada a este time

- 📋 **Instructions** → `.github/instructions/seo.instructions.md` (applyTo: `**/*.html`)
- 📋 **Instructions** → `.github/copilot-instructions.md` (regras de SEO e semântica)
- 📚 **Knowledge Base** → `.github/prompts/bloco6-knowledge-base.prompt.md`
- 🧠 **Skill** → `.github/skills/gerar-secao/SKILL.md`
- 🤖 **Agent** → `@qa-academia` para validar SEO e semântica

---

## Como contribuir

```bash
# Crie sua feature a partir desta branch
git checkout -b feature/conteudo/nome-da-feature

# Após as alterações
git add .
git commit -m "content: descrição da mudança"
git push origin feature/conteudo/nome-da-feature

# Abra um Pull Request → feature/conteudo
```

---

> **Dica:** Antes de alterar textos, consulte `docs/wiki/conteudo-academia.md` para manter a voz e o tom da marca consistentes.
