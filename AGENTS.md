# AGENTS.md — Academia FitCode

Instruções para o **Coding Agent** do GitHub Copilot operar neste repositório.

---

## Escopo do projeto

Site estático HTML/CSS da Academia FitCode. Sem framework JS. Sem build step.
Publicado via GitHub Pages na branch `main`.

---

## Regras obrigatórias de geração de código

### Princípio do fix mínimo
- Faça o **fix mínimo** necessário para atender ao pedido
- Preserve o código existente — não refatore sem solicitação explícita
- Preserve classes, IDs e estrutura existentes a menos que seja o alvo da alteração
- Nunca substitua seções inteiras quando um ajuste pontual resolve

### HTML semântico (obrigatório)
- Use `<section>`, `<article>`, `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`
- Nunca use `<div>` onde um elemento semântico se aplica
- Todo `<section>` deve ter `aria-labelledby` apontando para seu `<h2>`
- Hierarquia de headings: h1 → h2 → h3 sem pular níveis

### Acessibilidade (acessib — WCAG AA)
- `<img>`: sempre com `alt` descritivo
- `<button>` e `<a>` sem texto visível: `aria-label` obrigatório
- Contraste mínimo 4.5:1 para texto normal
- Nunca remova `outline` sem substituto visível de foco

### CSS
- Prefixo `fc-` em **todas** as classes criadas neste projeto
- Use as variáveis CSS definidas: `--fc-color-primary`, `--fc-color-bg`, `--fc-font-body`
- Mobile-first: escreva o CSS base para mobile, use `@media` para tablet/desktop

---

## Branches e fluxo de trabalho

| Branch           | Propósito                          | Quem usa          |
|------------------|------------------------------------|-------------------|
| `main`           | Produção — deploy automático       | Todos (via PR)    |
| `feature/front`  | Desenvolvimento de UI/HTML/CSS     | Time Front-End    |
| `feature/conteudo` | Textos, conteúdo editorial       | Time Conteúdo     |
| `feature/devops` | CI/CD, configurações, infra        | Time DevOps       |

- **Nunca faça push direto na `main`** — use Pull Request
- Commits devem seguir o padrão Conventional Commits:
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `chore:` manutenção, CI, configurações
  - `docs:` documentação

---

## Arquivos que o agente pode criar/modificar

| Permitido                         | Proibido (requer confirmação)     |
|-----------------------------------|-----------------------------------|
| `index.html`                      | `AGENTS.md`                       |
| `src/**/*.html`                   | `.github/workflows/**`            |
| `src/**/*.css`                    | `.github/copilot-instructions.md` |
| `docs/wiki/**`                    | `setup/gerar_evidencia.py`        |
| `.github/prompts/**`              |                                   |

---

## Checklist antes de cada commit

- [ ] HTML passa na revisão semântica (sem `<div>` semânticos)
- [ ] Todas as `<img>` têm `alt`
- [ ] Classes CSS usam prefixo `fc-`
- [ ] Responsivo: testado em 375px, 768px e 1280px
- [ ] Contraste de texto ≥ 4.5:1
- [ ] Mensagem de commit no formato Conventional Commits
