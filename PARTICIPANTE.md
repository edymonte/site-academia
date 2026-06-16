# 🏆 Challenge — GitHub Copilot Platform Extensibility
## Academia FitCode · Workshop Fase 2

> **Objetivo:** criar um site funcional localmente e configurar
> os 8 pilares de governança do Copilot — um a um, entendendo o que cada um faz.
>
> O challenge termina quando você rodar `gerar_evidencia.py` e ver **8/8 pilares** no HTML.

---

## Antes de começar

### 1. Clone e configure o ambiente

```bash
git clone https://github.com/<seu-usuario>/site-academia.git
cd site-academia

# Windows:
setup.bat

# Linux / Mac:
bash setup.sh
```

O script verifica e instala automaticamente o que estiver faltando (Python 3, Node.js, gh CLI).

### 2. Faça checkout da branch do seu time

```bash
# Escolha a branch do seu time:
git checkout feature/front      # Time Front-End
git checkout feature/conteudo   # Time Conteúdo
git checkout feature/devops     # Time DevOps
```

Leia o arquivo `SQUAD.md` que aparece — ele confirma que você está na branch certa.

### 3. Confirme que o site abre no navegador

```bash
# Abra o index.html no navegador (ou use o Live Server do VS Code)
# Você deve ver a página inicial da Academia FitCode com estilo base aplicado
```

Esse é o estado inicial — com o site funcional mas **sem nenhuma governança do Copilot**.

---

## Passo 0 — Crie o Site com o Copilot

> Antes de aplicar governança, você vai usar o Copilot para criar as seções do site.
> Isso mostra o "antes" — o que o Copilot gera sem nenhuma regra configurada.

**Abra o Copilot Chat no modo Agent e envie:**

```
Crie a seção "Sobre a Academia" do site em HTML semântico.
Inclua: título h2, parágrafo de apresentação, e três cards
com diferenciais (Profissionais certificados, Equipamentos modernos,
Localização central). Use classes CSS com prefixo "fc-".
```

Salve o resultado em `src/sections/sobre.html`.

> ⚠️ **Anote o resultado**: ele provavelmente não vai seguir padrões de acessibilidade
> (aria-label, roles, contraste) nem SEO (meta tags, alt em imagens). Você vai ver
> a diferença após configurar as instructions.

**✅ Critério de sucesso:** a seção existe e renderiza no navegador.

---

## Passo 1 — Abra o site no navegador

> Antes de aplicar governança, confirme que o site abre corretamente no navegador.

```bash
# Abra o index.html diretamente no navegador
# Windows:
start index.html

# Linux / Mac:
open index.html
```

Ou, no VS Code, clique com o botão direito em `index.html` e escolha **Open with Live Server** (recomendado — atualiza automaticamente ao salvar).

> 💡 Você vai acompanhar as mudanças visualmente conforme aplica cada pilar de governança.

---

## Os 8 Pilares — configure um a um

A pasta `governanca/.github/` contém todos os arquivos prontos.
**Você vai copiar cada um manualmente** para `.github/` — e entender o que cada
arquivo faz antes de copiar.

---

### Pilar 1 — Instructions 📋

**O que é:** regras permanentes que o Copilot lê em **todo** contexto, automaticamente.
É o "combinado do time" — padrões de código, acessibilidade, SEO e nomenclatura.

**Faça:**

```bash
# Cria as pastas necessárias
mkdir -p .github/instructions

# Copia o arquivo principal de instructions
cp governanca/.github/copilot-instructions.md .github/copilot-instructions.md

# Copia as instructions específicas por contexto
cp governanca/.github/instructions/acessibilidade.instructions.md .github/instructions/
cp governanca/.github/instructions/seo.instructions.md .github/instructions/
```

**Abra os arquivos copiados e leia:**
- `copilot-instructions.md` — padrão HTML semântico, nomenclatura CSS, regras de imagem e performance
- `acessibilidade.instructions.md` — aria-label, roles, contraste mínimo WCAG AA
- `seo.instructions.md` — meta tags obrigatórias, Open Graph, alt em imagens

**Instructions vs. Skills — quando usar cada um:**

| | Instructions | Skills |
|---|---|---|
| **Quando ativa** | Sempre — em todo chat do repo | Sob demanda — quando o contexto é relevante |
| **O que define** | Regras que sempre se aplicam (semântica, a11y, SEO) | Procedimentos específicos (como gerar seções, como estruturar um componente) |
| **Exemplo** | "Toda imagem deve ter atributo alt descritivo" | "Ao gerar uma seção hero, use este template com CTA e mobile-first" |

**✅ Valide:** abra um novo chat no Copilot e peça _"Crie um card de plano de academia"_ — ele deve gerar com `aria-label`, classes com prefixo `fc-` e `alt` nas imagens.

---

### Pilar 2 — Skills 🧠

**O que é:** conhecimento especializado injetado **sob demanda**. A skill entra quando
o Copilot detecta que o contexto é relevante (ex: ao gerar uma seção do site).

**Faça:**

```bash
mkdir -p .github/skills/gerar-secao
cp governanca/.github/skills/gerar-secao/SKILL.md .github/skills/gerar-secao/
```

**Leia o `SKILL.md`:** o arquivo tem uma estrutura específica que o Copilot interpreta:

```markdown
# Skill: Gerar Seção — Academia FitCode
## Quando usar: seção, hero, cards, planos, depoimentos, rodapé
## Template
...
```

Os campos `# Skill:` e `## Quando usar:` determinam **quando** a skill é injetada.
O Copilot lê o `description` e decide se o contexto da pergunta é relevante.

> 💡 **Por que importa:** um participante novo recebe automaticamente o template
> correto de seção (mobile-first, semântico, acessível) ao pedir para o Copilot
> gerar qualquer parte do site.

**✅ Valide:** peça ao Copilot _"Gere a seção de depoimentos do site"_ e veja se ele
usa o template da skill (estrutura HTML semântica com `<blockquote>` e `aria-label`).

---

### Pilar 3 — Agents 🤖

**O que é:** agente especializado com identidade, escopo e ferramentas próprias.
Você o invoca explicitamente com `@nome-do-agente`.

**Faça:**

```bash
mkdir -p .github/agents
cp governanca/.github/agents/qa-academia.agent.md .github/agents/
```

**Leia o arquivo:** veja a estrutura que todo agente deve ter:

```yaml
---
description: >
  Agente revisor de qualidade do site da Academia FitCode.
  Verifica acessibilidade, SEO, performance e boas práticas HTML.
tools:
  - read_file
  - grep
  - list_directory
---
# QA Academia

## O que verificar
1. Acessibilidade — aria-label, roles, contraste
2. SEO — meta tags, alt, headings hierarchy
3. Performance — imagens sem lazy loading, scripts bloqueantes
4. HTML semântico — uso correto de section, article, header, nav

## Formato de resposta
### 🔴 Bloqueante | 🟡 Atenção | 🟢 Sugestão
```

> 💡 **Por que importa:** diferente das instructions (que orientam quem *gera*),
> o agent `@qa-academia` é um *revisor* — você o chama para avaliar código já gerado.
> É o QA automatizado do time de front-end.

**✅ Valide:** no Copilot Chat, invoque `@qa-academia` e peça para ele revisar
o arquivo `src/sections/sobre.html` que você gerou no Passo 0.

---

### Pilar 4 — MCP 🔌

**O que é:** conexão do Agent Mode a ferramentas externas via Model Context Protocol.
Com isso, o agente pode buscar conteúdo real da academia, consultar APIs de CEP,
ler documentação de acessibilidade — sem você copiar e colar nada.

**O arquivo `.vscode/mcp.json` já existe no repositório.** Leia-o agora.

**Leia `.vscode/mcp.json`:** o arquivo tem dois servidores configurados:

| Servidor | O que faz |
|---|---|
| `fetch` | Busca qualquer URL pública em tempo real (docs, APIs, conteúdo externo) |
| `filesystem` | Acessa arquivos do projeto com busca semântica |

> 💡 **Por que importa:** o agente pode ler as diretrizes WCAG diretamente da
> W3C, consultar a documentação do Google Lighthouse, ou buscar conteúdo real
> da academia em um CMS — e usar tudo isso diretamente no código que está escrevendo.

**Isolamento por repositório:** o `mcp.json` fica dentro do `.vscode/` de cada repo.
Time Front acessa conteúdo do site; Time DevOps acessa logs de deploy. **Sem
vazamento de contexto entre times.**

**✅ Valide — dois experimentos:**

1. **MCP fetch:** no Agent Mode, pergunte _"Busque as diretrizes WCAG 2.1 de nível AA
   para contraste de cores e aplique ao nosso CSS"_ — o agente vai buscar e aplicar.
2. **MCP filesystem:** pergunte _"Quais arquivos CSS existem no projeto e qual contém
   as variáveis de cor?"_ — o agente explora o projeto sem você indicar o caminho.

---

### Pilar 5 — Hooks 🪝

**O que é:** o único primitivo que **bloqueia e corrige** o agente. Hooks interceptam
ações (antes ou depois) e podem injetar mensagens de volta para o agente.

**Faça:**

```bash
mkdir -p .github/hooks/scripts
cp governanca/.github/hooks/lint-guard.json .github/hooks/
cp governanca/.github/hooks/scripts/lint-guard.ps1 .github/hooks/scripts/
cp governanca/.github/hooks/scripts/lint-guard.sh .github/hooks/scripts/
```

**Leia `lint-guard.json`:** note o evento `postToolUse`. Hooks são o único primitivo
com eventos — cada um com uma finalidade diferente:

| Evento | Quando dispara | O que pode fazer |
|---|---|---|
| `sessionStart` | Início de cada sessão do agente | Log de início, aviso de políticas |
| `preToolUse` ⭐ | **Antes** de o agente executar qualquer ferramenta | Único que pode **BLOQUEAR** a ação antes de acontecer |
| `postToolUse` | Após o agente executar uma ferramenta | Validar resultado, rodar lint, notificar |
| `userPromptSubmitted` | Quando o usuário envia um prompt | Filtrar dados sensíveis antes de processar |
| `errorOccurred` | Quando ocorre um erro | Alerta automático + sugestão de rollback |

> ⚠️ `preToolUse` é o único evento que pode BLOQUEAR uma ação antes de acontecer.
> O nosso `lint-guard.json` usa `postToolUse` — após o agente editar um arquivo HTML,
> ele roda o validador e injeta os erros de volta, forçando autocorreção.

> 💡 **Por que importa:** em vez de "agente gera e pronto", temos "agente gera,
> valida e conserta". O HTML chega limpo e acessível automaticamente.

**✅ Valide:** este pilar você vai ver em ação no Bloco 4 — é o momento mais
impactante do workshop.

---

### Pilar 6 — Knowledge Base 📚

**O que é:** documentação versionada no repositório que o Copilot consulta e
**aplica diretamente no código**. Identidade visual, regras de conteúdo, guia de
tom de voz — o agente encontra a resposta antes de escrever uma linha.

**Skills vs. Knowledge Base — a distinção:**

| | Skills | Knowledge Base |
|---|---|---|
| **Escopo** | Procedimento específico e pontual | Índice amplo de toda a documentação |
| **Ativação** | Injetada on-demand quando relevante | Pesquisada semanticamente em background |
| **Exemplo** | "Ao gerar uma seção, use este template" | "Qual é a cor primária da marca? → busca em identidade-visual.md" |
| **Artefato** | `SKILL.md` em `.github/skills/` | `docs/wiki/*.md` no repo |

**Faça:**

```bash
# A pasta docs/wiki/ já existe — explore os arquivos:
cat docs/wiki/identidade-visual.md     # paleta de cores, tipografia, logo
cat docs/wiki/conteudo-academia.md     # tom de voz, frases proibidas, público-alvo
cat docs/wiki/planos-precos.md         # planos, valores, benefícios de cada

# Copia o prompt do Bloco 6
mkdir -p .github/prompts
cp governanca/.github/prompts/bloco6-knowledge-base.prompt.md .github/prompts/
```

**Teste antes de executar o prompt:**

No Copilot Chat, pergunte:
> `@workspace Qual é a cor primária da marca Academia FitCode?`

O Copilot vai encontrar a resposta em `docs/wiki/identidade-visual.md` sem você
precisar explicar. **Esse é o conceito de Knowledge Base.**

**Execute o prompt do Bloco 6:**

Abra `bloco6-knowledge-base.prompt.md` e execute (`/` para listar prompts).

O agente vai:
1. Ler `docs/wiki/planos-precos.md` para encontrar os valores exatos
2. Ler `docs/wiki/identidade-visual.md` para usar as cores corretas da marca
3. Gerar a seção de planos com os dados **da documentação** — não inventados
4. Aplicar o tom de voz definido em `docs/wiki/conteudo-academia.md`

> 💡 **Por que importa:** conteúdo mudou? Preço do plano alterou? Atualiza o
> Markdown e o agente passa a usar a informação nova automaticamente.

**✅ Valide:** o `gerar_evidencia.py` verifica que `docs/wiki/identidade-visual.md`,
`docs/wiki/conteudo-academia.md` e `bloco6-knowledge-base.prompt.md` existem.

---

### Pilar 7 — Coding Agent ⚙️

**O que é:** o Copilot como agente autônomo no GitHub.com. Você atribui uma issue
ao Copilot; ele lê as instructions, explora o repositório, escreve o código e
**abre o PR automaticamente** — sem intervenção humana até a revisão.

**O fluxo completo em 4 etapas:**

| Etapa | O que acontece |
|---|---|
| **1 → Atribuir issue** | Você cria a issue no GitHub e atribui ao Copilot |
| **2 → Copilot planeja** | Lê `AGENTS.md`, instructions e explora o repo para definir a abordagem |
| **3 → Codifica + valida** | Escreve o HTML/CSS, roda o lint e corrige falhas |
| **4 → Abre o PR** | Draft PR com código e link do deploy de preview. Marca dev para revisão |

**Pré-requisito:** `AGENTS.md` na raiz do repositório instrui o Coding Agent sobre
as regras do time. Leia-o agora.

**Leia também `.github/workflows/deploy.yml`:** o Coding Agent sabe que há CI
configurando deploy automático no GitHub Pages a cada push — e não pode quebrar
o pipeline.

**Faça — demo do Issue → PR automático:**

1. Acesse **github.com/seu-usuario/site-academia/issues** no navegador
2. Crie uma nova issue com o título:
   > `feat: seção de depoimentos de alunos — 3 cards com foto, nome e texto`
3. No corpo da issue, descreva:
   > Criar a seção `#depoimentos` seguindo os padrões de acessibilidade e identidade
   > visual do repositório. Usar fotos placeholder do Unsplash. Responsivo mobile-first.
4. No campo **Assignees**, atribua ao **Copilot** (aparece como opção ao clicar)
5. Aguarde — o Copilot vai:
   - Explorar o codebase e a wiki
   - Escrever o HTML/CSS seguindo as instructions
   - Fazer o deploy de preview
   - Abrir um **draft PR** com o código e link ao vivo
6. Revise o PR aberto pelo Copilot no GitHub

> 💡 **Por que importa:** o Coding Agent opera fora do VS Code — em automações
> noturnas, PRs gerados por issue, atualizações de conteúdo. O `AGENTS.md` garante
> que ele segue os mesmos padrões do time, mesmo sem supervisão humana direta.

**✅ Valide:** o `gerar_evidencia.py` verifica que `AGENTS.md` existe e contém
as regras de governança. O PR aberto pelo Copilot é a evidência em tempo real.

---

### Pilar 8 — CLI 💻

**O que é:** GitHub Copilot no terminal — dois modos:

| Modo | Comando | Quando usar |
|---|---|---|
| **gh copilot** | `gh copilot suggest` / `explain` | Comandos git, shell e diagnóstico rápido |
| **copilot CLI** | `copilot` | Agente completo no terminal — edita arquivos, roda lint, delega tarefas |

**Faça:**

```bash
# gh copilot (já instalado via setup.bat)
gh copilot suggest "como fazer deploy manual de um site no GitHub Pages"
gh copilot explain "git rebase -i HEAD~3"

# copilot CLI (agente completo no terminal)
npm install -g @github/copilot   # instala uma vez
copilot                           # inicia sessão interativa
```

Dentro da sessão `copilot`:
```
> Verifique se existe alguma imagem sem atributo alt em src/
> &Gere a seção de horários de funcionamento enquanto continuo trabalhando
> /model                          # lista modelos disponíveis
> /resume                         # retoma sessão delegada com &
```

O prefixo `&` delega a tarefa em background — o agente trabalha enquanto você
continua no terminal.

> 💡 **Por que importa:** onboarding de devs que ainda não conhecem os comandos
> git avançados. E para automações — você pode usar `gh copilot suggest` em scripts
> de CI para diagnóstico de falhas de build.

---

## Execute os Blocos

Agora que todos os pilares estão configurados, execute os blocos do workshop
usando os prompts que você copiou:

| Bloco | Como executar | O que demonstra |
|-------|---------------|------------------|
| **Bloco 1** | prompt `bloco1-sem-padrao` (na raiz) | Agente sem governança — HTML sem a11y |
| **Bloco 2** | prompt `bloco2-com-instructions` | Instructions + Skills — HTML acessível e semântico |
| **Bloco 3** | prompt `bloco3-mcp-fetch` | MCP — agente busca diretrizes WCAG ao vivo |
| **Bloco 4** | prompt `bloco4-adicionar-animacao` | Hook de autocorreção — lint dispara e agente corrige |
| **Bloco 5** | `@qa-academia` no chat | Custom Agent revisor de acessibilidade/SEO |
| **Bloco 6** | prompt `bloco6-knowledge-base` | Knowledge Base — wiki de conteúdo → código |
| **Bloco 7** | Atribuir issue ao Copilot em github.com | Coding Agent — Issue → PR + deploy ao vivo |
| **Bloco 8** | `gh copilot suggest` / `copilot` CLI | CLI |

> Os prompts aparecem automaticamente no Copilot Chat (`/` para listar).

---

## 🏁 Gere sua evidência

Após executar todos os blocos:

```bash
# Substitua com seu nome e sua turma (front / conteudo / devops)
python setup/gerar_evidencia.py --nome "Seu Nome Completo" --turma front
```

O HTML abrirá automaticamente no navegador. Você deve ver **8/8 pilares configurados**.

**Tire o screenshot do card** e envie como evidência de conclusão.

---

## Revise o PR aberto pelo Copilot

No **Bloco 7**, o Copilot abriu um draft PR automaticamente a partir da issue
que você criou.

1. Acesse **github.com/seu-usuario/site-academia/pulls** no navegador
2. Encontre o PR aberto pelo Copilot
3. Leia o código gerado — verifique se ele seguiu as instructions do time
4. Acesse o link de preview no comentário do PR — o site está ao vivo
5. Aprove e faça o merge (ou solicite ajustes deixando um comentário — o Copilot vai iterar)

> O PR aberto pelo Copilot é a evidência viva do Pilar 7. Guarde o link.

---

## Checklist final

- [ ] Clonei o repo e rodei `setup.bat` / `setup.sh`
- [ ] Fiz checkout da minha branch (`feature/front|conteudo|devops`)
- [ ] Gerei a seção inicial do site com o Copilot (Passo 0)
- [ ] Confirmei que o site abre corretamente no navegador (Passo 1)
- [ ] Copiei e li cada arquivo de governança de `governanca/.github/`
- [ ] Executei os Blocos 1 a 8
- [ ] O Copilot abriu o PR automaticamente no Bloco 7 (Coding Agent)
- [ ] Rodei `gerar_evidencia.py` e obtive 8/8 pilares
- [ ] Tirei o screenshot do HTML
- [ ] Revisei e aprovei o PR aberto pelo Copilot
- [ ] O site abre corretamente no navegador local
