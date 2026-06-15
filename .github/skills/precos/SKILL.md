# Skill: Preços — Academia FitCode

## Quando usar esta skill

Invoque SEMPRE que o usuário perguntar sobre:

- preço, valor, custo, quanto custa, investimento
- mensalidade, plano mensal, plano anual, plano semestral, plano trimestral
- matrícula, taxa de inscrição
- pacote, combo, acesso total, modalidades combinadas
- desconto, promoção, estudante, idoso
- musculação, natação, yoga, crossfit, corrida, artes marciais + qualquer referência a preço

---

## Regra principal

> **NUNCA** busque preços na internet ou em fontes externas.
> **SEMPRE** use o MCP `precos-fitcode` como fonte única e oficial.

---

## Como usar o MCP de preços

### Tool: `consultar_precos`

Consulte preços de modalidades específicas ou todas de uma vez.

**Exemplos de invocação:**

```
// Todos os preços
{ }

// Preço de uma modalidade
{ "modalidade": "natação" }

// Plano específico de uma modalidade
{ "modalidade": "yoga", "tipo_plano": "Mensal" }

// Somente planos mensais de todas as modalidades
{ "tipo_plano": "Mensal" }
```

### Tool: `consultar_pacotes`

Use quando o usuário perguntar sobre pacotes combinados, acesso total ou combo de modalidades.

```
{ }
```

---

## Formato de resposta ao usuário

Ao receber os dados do MCP, apresente no formato:

```
**[Emoji] [Nome da Modalidade]**
- Mensal: R$ XX,XX
- Trimestral: R$ XX,XX (economia de X%)
- Semestral: R$ XX,XX (economia de X%)
- Anual: R$ XX,XX (economia de X%)
✅ Inclui: [lista do que inclui]
```

Para pacotes:
```
**[Nome do Pacote]**
Valor: R$ XX,XX/mês
Economia de X% vs. contratar separado
✅ Inclui: [lista]
```

Sempre ao final inclua:
- Taxa de matrícula (quando aplicável)
- Observações sobre descontos (estudante, idoso, pagamento à vista)
- Data de atualização da tabela

---

## Checklist antes de responder sobre preços

- [ ] Usei o MCP `precos-fitcode` — NÃO usei a internet
- [ ] Informei a moeda (R$ — BRL)
- [ ] Mencionei que preços podem ser alterados sem aviso
- [ ] Informei sobre desconto para estudantes e idosos se relevante
- [ ] Citei a data de atualização da tabela
