---
mode: ask
description: >
  Consulta a Knowledge Base do projeto (identidade visual e conteúdo da academia)
  para garantir que o Copilot use textos, cores e dados reais da FitCode.
---

# Prompt: Knowledge Base — Academia FitCode

Use este prompt para instruir o Copilot a consultar a base de conhecimento do projeto
antes de gerar qualquer conteúdo ou código visual.

---

## Instrução

Antes de gerar qualquer seção HTML, texto de marketing, card de modalidade, banner
ou componente visual, consulte obrigatoriamente os seguintes arquivos:

1. **Identidade visual:** `docs/wiki/identidade-visual.md`
   - Paleta de cores e tokens CSS
   - Tipografia e escala de tamanhos
   - Bordas, sombras e efeitos
   - Componentes fixos (botões, cards, logo)

2. **Conteúdo da academia:** `docs/wiki/conteudo-academia.md`
   - Descrições reais de cada modalidade
   - Dados estatísticos para usar em benefícios
   - Textos de CTAs aprovados
   - Frases de impacto para heroes
   - Informações sobre parceiros (Boa Farma)

---

## Como usar este prompt

No Copilot Chat, envie:

```
/bloco6-knowledge-base

Gere o card da modalidade Natação usando as informações da wiki.
```

Ou combine com agente:

```
@qa-academia /bloco6-knowledge-base

Revise se o banner do patrocinador usa as cores corretas da Boa Farma.
```

---

## Checklist de consistência com a KB

Antes de finalizar qualquer entrega, verifique:

- [ ] Cores usam os tokens `--fc-color-*` definidos em `identidade-visual.md`
- [ ] Textos das modalidades correspondem às descrições em `conteudo-academia.md`
- [ ] Estatísticas dos benefícios são as da tabela da wiki (não inventadas)
- [ ] CTAs usam os textos aprovados da seção "Textos prontos para CTAs"
- [ ] Logo renderizado como `Fit<span>Code</span>` com cores corretas
- [ ] Citação da Boa Farma é a oficial da wiki (não parafraseada)
