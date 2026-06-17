<style>
a {
    text-decoration: none;
    color: #464feb;
}
tr th, tr td {
    border: 1px solid #e6e6e6;
}
tr th {
    background-color: #f5f5f5;
}
</style>

# 🚀 Guia de Início — Workshop GitHub Copilot

> Bem-vindo! Este guia vai te conduzir passo a passo pela configuração do seu ambiente
> antes de mergulharmos nos **pilares de Governança do Copilot**.
>
> Siga cada etapa na ordem indicada. Ao final, você terá seu repositório pronto para o workshop. 💪

---

## 📋 Pré-requisitos

Antes de começar, verifique se você tem instalado:

| Ferramenta | Verificar com | Download |
|------------|--------------|----------|
| **Git** | `git --version` | [git-scm.com](https://git-scm.com/download/win) |
| **Node.js** | `node --version` | [nodejs.org](https://nodejs.org) |
| **GitHub CLI** | `gh --version` | [cli.github.com](https://cli.github.com) |
| **VS Code** | — | [code.visualstudio.com](https://code.visualstudio.com) |

> 💡 **Dica:** Com o GitHub CLI instalado, autentique-se antes de continuar:
> ```bash
> gh auth login
> ```

---

## 🗺️ Visão Geral do que vamos construir

```
📁 site-academia/          ← repositório base (referência, não mexa)
📁 site-participante/      ← SEU repositório (onde tudo acontece)
    ├── .github/
    │   └── workflows/     ← CI/CD já configurado
    ├── setup/             ← gerador de evidências
    ├── evidencias/        ← HTMLs gerados ao final
    ├── PARTICIPANTE.md
    └── 🌐 seu site aqui
```

---

## ✅ Etapas

### **Etapa 1 — Clonar o repositório base** 📥

Este repositório contém a estrutura de referência do workshop.

```bash
git clone https://github.com/edymonte/site-academia
```

> ℹ️ Você usará este repositório apenas como **referência e fonte de arquivos**.
> Não desenvolva nada diretamente aqui.

---

### **Etapa 2 — Criar o seu repositório no GitHub** 🏗️

Este será o repositório onde você vai desenvolver seu site e aplicar os pilares de Governança.

> ⚠️ **Substitua `site-participante` pelo nome do seu projeto antes de executar.**

```bash
gh repo create site-participante --public
```

Em seguida, clone-o localmente — este será o seu **diretório de trabalho**:

```bash
git clone https://github.com/<seu-usuario>/site-participante
cd site-participante
```

---

### **Etapa 3 — Copiar a estrutura base** 📂

Copie os arquivos necessários do repositório base para o seu:

```bash
# Windows (PowerShell)
Copy-Item -Recurse ..\site-academia\.github\workflows  .github\workflows
Copy-Item -Recurse ..\site-academia\setup              .\
Copy-Item -Recurse ..\site-academia\evidencias         .\
Copy-Item           ..\site-academia\PARTICIPANTE.md   .\

# Linux / Mac
cp -r ../site-academia/.github/workflows  .github/
cp -r ../site-academia/setup              ./
cp -r ../site-academia/evidencias         ./
cp    ../site-academia/PARTICIPANTE.md    ./
```

> 💡 **Por que apenas o `workflows/`?**
> O restante do `.github/` — instructions, skills, agents, hooks — será construído
> **pilar por pilar** durante o workshop. Esse é o objetivo! 🎯

Confirme a estrutura criada:

```bash
git add .
git commit -m "chore: estrutura base do projeto"
git push origin main
```

---

### **Etapa 4 — Desenvolver o seu site** 🎨

- Desenvolva seu site dentro do diretório `site-participante/`
- Use a tecnologia de sua preferência (HTML/CSS, React, Vue, etc.)

> ⚠️ **Importante:** os diretórios `setup/`, `evidencias/`, `.github/` e o arquivo
> `PARTICIPANTE.md` **devem permanecer no projeto** — eles são usados na geração
> de evidências ao final do workshop.

---

### **Etapa 5 — Criar as branches de trabalho** 🌿

Com o repositório configurado, crie as branches que representam os times:

```bash
git checkout -b feature/dev     && git push origin feature/dev     && git checkout main
git checkout -b feature/qa      && git push origin feature/qa      && git checkout main
git checkout -b feature/suporte && git push origin feature/suporte && git checkout main
```

Verifique que as três branches foram criadas:

```bash
git branch -a
```

---

### **Etapa 6 — Estrutura final esperada** 🗂️

Ao final desta etapa, seu repositório deve ter a seguinte estrutura:

```
site-participante/
├── .github/
│   └── workflows/        ← CI/CD (pipeline de deploy)
├── setup/                ← scripts do workshop
├── evidencias/           ← onde sua evidência será gerada
├── PARTICIPANTE.md       ← suas informações
└── <seu site>            ← código do seu projeto
```

> ✅ **Checklist rápido antes de avançar:**
> - [ ] Repositório criado e público no GitHub
> - [ ] Estrutura base copiada e commitada
> - [ ] Site rodando localmente
> - [ ] Branches `feature/dev`, `feature/qa` e `feature/suporte` criadas

---

## 🏁 Próximos passos

Tudo pronto? Ótimo! 🎉

A partir daqui vamos implementar os **pilares de Governança do Copilot** — um a um —
e ao final você vai gerar sua evidência de conclusão com o script:

```bash
python setup/gerar_evidencia.py --nome "Seu Nome" --turma dev
```

> 🙋 Ficou com alguma dúvida nesta etapa? Chame o instrutor antes de avançar!
