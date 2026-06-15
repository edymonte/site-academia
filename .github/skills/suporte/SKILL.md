# Skill: Suporte — Gestão de Chamados e SLA

## Quando usar esta skill

Invoque esta skill sempre que o usuário mencionar:

- abertura de chamado, ticket, incidente, suporte
- P1, P2, P3, prioridade, severidade
- SLA, tempo de resposta, tempo de resolução
- escalonamento, urgente, crítico, indisponível
- bug em produção, site fora do ar, falha de acesso

---

## Níveis de Prioridade

### P1 — Crítico (Site fora do ar / Impacto total)

| Critério       | Valor                                  |
|----------------|----------------------------------------|
| **Severidade** | Crítica — produção completamente impactada |
| **Exemplos**   | Site inacessível, GitHub Pages retornando 404/500 em todas as páginas, deploy totalmente quebrado |
| **SLA Resposta** | ⏱ **15 minutos** |
| **SLA Resolução** | 🕐 **2 horas** |
| **Escalação**  | Imediata para o responsável técnico + notificação ao time devops |
| **Canal**      | Slack #incidentes-criticos + e-mail + telefone |

**Ações obrigatórias ao receber P1:**
1. Confirmar recebimento ao solicitante em até 15 minutos
2. Abrir war-room no Slack imediatamente
3. Verificar status do GitHub Pages via API
4. Checar último commit/deploy na branch `main`
5. Acionar rollback se necessário (`git revert HEAD`)
6. Atualizar status a cada 30 minutos até resolução
7. Registrar RCA (Root Cause Analysis) após fechamento

---

### P2 — Alto (Funcionalidade crítica degradada)

| Critério       | Valor                                  |
|----------------|----------------------------------------|
| **Severidade** | Alta — funcionalidade importante comprometida |
| **Exemplos**   | Seção do site com layout quebrado em produção, imagens não carregando, formulário de contato inoperante, mobile completamente inacessível |
| **SLA Resposta** | ⏱ **1 hora** |
| **SLA Resolução** | 🕐 **8 horas (em horário comercial)** |
| **Escalação**  | Time `feature/front` + time `feature/conteudo` conforme o tipo |
| **Canal**      | Slack #suporte-site + e-mail |

**Ações obrigatórias ao receber P2:**
1. Confirmar recebimento em até 1 hora
2. Reproduzir o problema localmente
3. Identificar o commit que introduziu a regressão (`git log --oneline`)
4. Criar branch de hotfix a partir de `main`
5. Abrir PR com fix e solicitar review
6. Atualizar solicitante a cada 2 horas

---

### P3 — Normal (Melhoria ou bug cosmético)

| Critério       | Valor                                  |
|----------------|----------------------------------------|
| **Severidade** | Baixa — impacto estético ou funcionalidade secundária |
| **Exemplos**   | Texto desalinhado, cor levemente diferente do esperado, animação não fluindo bem, link de navegação errado |
| **SLA Resposta** | ⏱ **4 horas úteis** |
| **SLA Resolução** | 🕐 **5 dias úteis** |
| **Escalação**  | Time responsável pela área afetada (front/conteúdo) |
| **Canal**      | GitHub Issues + e-mail |

**Ações obrigatórias ao receber P3:**
1. Confirmar recebimento em até 4 horas úteis
2. Registrar issue no GitHub com label `bug` ou `enhancement`
3. Priorizar no próximo sprint
4. Notificar solicitante ao fechar a issue

---

## Matriz de Prioridade

| Impacto / Urgência | Alta urgência | Média urgência | Baixa urgência |
|--------------------|--------------|----------------|----------------|
| **Impacto total**  | P1           | P1             | P2             |
| **Impacto parcial**| P2           | P2             | P3             |
| **Impacto mínimo** | P2           | P3             | P3             |

---

## Template de Abertura de Chamado

Quando um chamado for aberto, colete as seguintes informações:

```
## Chamado de Suporte — Academia FitCode

**Data/Hora:** [DD/MM/AAAA HH:MM]
**Solicitante:** [Nome]
**Prioridade sugerida:** [ ] P1  [ ] P2  [ ] P3
**Título:** [Descrição curta do problema]

### Descrição
[Descreva o problema com detalhes]

### Impacto
[Quantos usuários/páginas estão afetados?]

### URL afetada
[Ex: https://edymonte.github.io/site-academia/]

### Passos para reproduzir
1.
2.
3.

### Comportamento esperado
[O que deveria acontecer?]

### Comportamento atual
[O que está acontecendo?]

### Evidências
[Screenshots, links, logs]

### Navegador / Dispositivo
[Ex: Chrome 124 / iPhone 14]
```

---

## Fluxo de Tratamento de Chamados

```
Chamado Aberto
      │
      ▼
Classificar P1 / P2 / P3
      │
      ├─ P1 ──► Acionamento imediato → War-room → Fix urgente → RCA
      │
      ├─ P2 ──► Confirmação em 1h → Análise → Hotfix → PR → Deploy
      │
      └─ P3 ──► Confirmação em 4h → Issue GitHub → Sprint → Deploy normal
```

---

## Horário de Atendimento

| Nível | Horário de Cobertura              |
|-------|-----------------------------------|
| P1    | 24h × 7 dias — plantão obrigatório |
| P2    | Seg–Sex 08h–20h (horário de Brasília) |
| P3    | Seg–Sex 09h–18h (horário de Brasília) |

> Fora do horário de atendimento P2/P3, o chamado é registrado e tratado no próximo horário útil sem violação de SLA.

---

## Checklist do Copilot ao Responder Chamados

- [ ] Identificar a prioridade (P1, P2 ou P3) com base no impacto descrito
- [ ] Citar o SLA de resposta e resolução correspondente
- [ ] Indicar o canal correto de comunicação
- [ ] Listar as ações obrigatórias para o nível de prioridade
- [ ] Gerar o template de chamado preenchido com as informações fornecidas
- [ ] Sugerir comandos Git relevantes se for incidente de deploy
- [ ] Orientar sobre criação de issue no GitHub para P3
