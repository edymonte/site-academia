# ⚙️ Squad DevOps — Academia FitCode

Você está na branch correta: **`feature/devops`** ✅

---

## Missão do Time

O time DevOps é responsável pela infraestrutura, automação, CI/CD e governança técnica do projeto Academia FitCode.

---

## Responsabilidades

| Área | Descrição |
|------|-----------|
| **CI/CD** | GitHub Actions — build, lint e deploy automático no GitHub Pages |
| **MCP Servers** | Servidores Model Context Protocol (preços, fetch, filesystem) |
| **Hooks** | `lint-guard` — validação automática de código gerado pelo Copilot |
| **Ambiente** | `.vscode/mcp.json`, configurações de workspace |
| **Segurança** | Revisão de permissões, secrets, AGENTS.md |

---

## Arquivos sob responsabilidade

```
.github/workflows/deploy.yml        ← Pipeline de deploy (GitHub Pages)
.github/hooks/lint-guard.json       ← Hook de validação automática
.github/hooks/scripts/              ← Scripts bash e PowerShell
.vscode/mcp.json                    ← Registro de servidores MCP
mcp-precos/index.js                 ← Servidor MCP de preços (Node.js)
AGENTS.md                           ← Regras para o Coding Agent
```

---

## Governança Copilot aplicada a este time

- 🪝 **Hooks** → `.github/hooks/lint-guard.json` + scripts bash/PowerShell
- 🔌 **MCP** → `.vscode/mcp.json` (fetch, filesystem, precos-fitcode)
- ⚙️ **Coding Agent** → `AGENTS.md` + `.github/workflows/deploy.yml`
- 💻 **CLI** → `gh copilot` para sugestões de comandos

---

## Pipeline CI/CD

```
push → main
  └─ .github/workflows/deploy.yml
       ├─ actions/checkout@v4
       ├─ actions/upload-pages-artifact@v3
       └─ actions/deploy-pages@v4
            └─ https://edymonte.github.io/site-academia/
```

---

## Como contribuir

```bash
# Crie sua feature a partir desta branch
git checkout -b feature/devops/nome-da-feature

# Após as alterações
git add .
git commit -m "ci: descrição da mudança"
git push origin feature/devops/nome-da-feature

# Abra um Pull Request → feature/devops
```

---

> **Dica:** Sempre valide hooks e workflows localmente antes do push. Use `gh copilot explain` para entender comandos complexos.
