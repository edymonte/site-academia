# Documentação de Suporte — Academia FitCode

Base de conhecimento oficial para gestão de chamados, SLAs e atendimento do site da Academia FitCode.

---

## Visão Geral

O suporte do site Academia FitCode opera com três níveis de prioridade (**P1, P2, P3**),
cada um com SLAs, canais de comunicação e fluxos de resolução definidos.

Todos os chamados devem ser tratados pelo Copilot seguindo a skill `.github/skills/suporte/SKILL.md`.

---

## Definição dos Níveis de Prioridade (SLA)

### P1 — Crítico

**Definição:** Produção totalmente indisponível ou com falha que impede o acesso de todos os usuários.

| Métrica           | SLA              |
|-------------------|------------------|
| Tempo de resposta | 15 minutos       |
| Tempo de resolução| 2 horas          |
| Cobertura         | 24h × 7 dias     |

**Cenários típicos P1:**
- Site retornando erro 404 ou 500 em todas as páginas
- GitHub Pages fora do ar
- CSS completamente ausente — site inutilizável
- Deploy com arquivo `index.html` corrompido ou ausente

**Responsável:** Time DevOps (`feature/devops`) — acionamento imediato  
**Canal:** Slack `#incidentes-criticos` + telefone do responsável técnico

---

### P2 — Alto

**Definição:** Funcionalidade importante degradada. O site está parcialmente acessível, mas com problema significativo.

| Métrica           | SLA                              |
|-------------------|----------------------------------|
| Tempo de resposta | 1 hora                           |
| Tempo de resolução| 8 horas (horário comercial)      |
| Cobertura         | Seg–Sex 08h–20h (Brasília)       |

**Cenários típicos P2:**
- Seção inteira com layout quebrado (ex.: cards de modalidade sobrepostos)
- Imagens não carregando em produção
- Navegação mobile completamente inutilizável
- Animação da piscina travando o browser (alto consumo de CPU)
- Link do patrocinador Boa Farma redirecionando incorretamente

**Responsável:** Time Front (`feature/front`) + DevOps se for deploy  
**Canal:** Slack `#suporte-site` + e-mail

---

### P3 — Normal

**Definição:** Bug cosmético, melhoria ou comportamento inesperado com impacto mínimo no usuário.

| Métrica           | SLA                              |
|-------------------|----------------------------------|
| Tempo de resposta | 4 horas úteis                    |
| Tempo de resolução| 5 dias úteis                     |
| Cobertura         | Seg–Sex 09h–18h (Brasília)       |

**Cenários típicos P3:**
- Texto com espaçamento levemente fora do padrão
- Cor de botão não correspondendo exatamente ao design system
- Animação do nadador com pequeno glitch em Safari
- Tradução ou texto incorreto em alguma seção
- Melhoria de acessibilidade menor (ex.: melhorar `aria-label`)

**Responsável:** Time responsável pela área afetada (front ou conteúdo)  
**Canal:** GitHub Issues

---

## Fluxo Completo de Atendimento

```
┌─────────────────────────────────────────────────────────┐
│                   ABERTURA DE CHAMADO                    │
│         (usuário descreve o problema ao Copilot)        │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │  Copilot classifica  │
              │   com base na skill  │
              │  suporte/SKILL.md    │
              └──────────┬───────────┘
                         │
           ┌─────────────┼─────────────┐
           ▼             ▼             ▼
          P1             P2            P3
           │             │             │
     Resposta:     Resposta:      Resposta:
     15 min        1 hora         4 horas
           │             │             │
     Resolução:    Resolução:    Resolução:
     2 horas       8 horas       5 dias úteis
           │             │             │
     War-room       Hotfix PR     GitHub Issue
     + RCA          + Deploy      + Sprint
```

---

## Comandos Git de Emergência (P1)

Para incidentes P1 relacionados a deploy:

```bash
# Verificar último commit em produção
git log --oneline -5

# Reverter último commit problemático
git revert HEAD --no-edit
git push origin main

# Verificar status do GitHub Pages via API
gh api repos/edymonte/site-academia/pages

# Forçar novo deploy do GitHub Actions
gh workflow run deploy.yml
```

---

## Criação de Issue para P3

Para chamados P3, o Copilot deve orientar a criação de issue com o template:

```bash
gh issue create \
  --title "[P3] Descrição do bug/melhoria" \
  --label "bug" \
  --body "## Descrição\n...\n## Passos para reproduzir\n1.\n2.\n## Comportamento esperado\n...\n## Evidências\n..."
```

Labels disponíveis: `bug`, `enhancement`, `acessibilidade`, `seo`, `performance`, `conteudo`

---

## Contatos e Canais

| Canal                  | Uso                     | Acesso                              |
|------------------------|-------------------------|-------------------------------------|
| Slack `#incidentes`    | P1 exclusivamente       | Todos os times                      |
| Slack `#suporte-site`  | P2 e acompanhamento     | Todos os times                      |
| GitHub Issues          | P3 e melhorias          | https://github.com/edymonte/site-academia/issues |
| E-mail suporte         | P2 e P3                 | suporte@fitcode.com.br (fictício)   |

---

## Histórico de Versões desta Documentação

| Versão | Data       | Alteração                        |
|--------|------------|----------------------------------|
| 1.0    | 2026-06-15 | Criação inicial — P1, P2, P3     |
