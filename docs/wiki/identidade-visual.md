# Identidade Visual — Academia FitCode

Wiki de referência para o Copilot aplicar consistência visual em todo o projeto.

---

## Paleta de cores

### Cores primárias

| Nome              | Token CSS               | Hex       | Uso                                      |
|-------------------|-------------------------|-----------|------------------------------------------|
| Verde principal   | `--fc-color-primary`    | `#10b981` | CTAs, destaques, ícones ativos, links     |
| Verde escuro      | `--fc-color-primary-dk` | `#059669` | Hover de botões, bordas de foco           |
| Verde glow        | `--fc-color-glow`       | `rgba(16,185,129,0.35)` | Sombras e halos de destaque |

### Cores de fundo

| Nome              | Token CSS               | Hex       | Uso                                      |
|-------------------|-------------------------|-----------|------------------------------------------|
| Fundo principal   | `--fc-color-bg`         | `#0d1117` | Background da página                     |
| Fundo secundário  | `--fc-color-bg2`        | `#161b27` | Seções alternadas (ex: benefícios)       |
| Fundo terciário   | `--fc-color-bg3`        | `#1a2035` | Cards, painéis internos                  |
| Card background   | `--fc-color-card`       | `#1e2535` | Fundo de cards de modalidade/benefício   |

### Cores de texto

| Nome              | Token CSS               | Hex       | Uso                                      |
|-------------------|-------------------------|-----------|------------------------------------------|
| Texto principal   | `--fc-color-text`       | `#f0f6fc` | Corpo de texto, headings                 |
| Texto secundário  | `--fc-color-muted`      | `#8b9ab1` | Subtítulos, labels, metadados            |

### Cores de acento

| Nome              | Token CSS               | Hex       | Uso                                      |
|-------------------|-------------------------|-----------|------------------------------------------|
| Âmbar             | `--fc-color-amber`      | `#f59e0b` | Tags de modalidade, stats secundários    |
| Borda sutil       | `--fc-color-border`     | `rgba(255,255,255,0.07)` | Bordas de cards        |

---

## Tipografia

| Papel             | Token CSS               | Valor                                    |
|-------------------|-------------------------|------------------------------------------|
| Fonte do corpo    | `--fc-font-body`        | `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif` |
| Fonte de código   | `--fc-font-mono`        | `'JetBrains Mono', 'Fira Code', monospace` |

### Escala tipográfica

| Elemento          | Tamanho                  | Peso   | Uso                          |
|-------------------|--------------------------|--------|------------------------------|
| `h1` / Hero       | `clamp(2.1rem, 5.5vw, 4rem)` | 900 | Título principal do Hero  |
| `h2` de seção     | `clamp(1.7rem, 3.8vw, 2.7rem)` | 900 | Títulos de seção         |
| `h3` de card      | `1.06–1.08rem`           | 700    | Títulos de cards             |
| Corpo             | `0.86–1rem`              | 400    | Textos descritivos           |
| Labels / badges   | `0.68–0.72rem`           | 700    | Rótulos em maiúsculas        |

---

## Bordas e raios

| Elemento          | Valor                    |
|-------------------|--------------------------|
| Cards             | `border-radius: 18px`    |
| Botões            | `border-radius: 50px`    |
| Ícones de card    | `border-radius: 15px`    |
| Tags/badges       | `border-radius: 100px`   |
| Header            | sem borda arredondada    |

---

## Sombras e efeitos

| Efeito            | Valor CSS                |
|-------------------|--------------------------|
| Sombra de card    | `0 10px 36px rgba(0,0,0,0.35)` |
| Glow de botão primário | `0 0 36px rgba(16,185,129,0.45)` |
| Glow hover        | `0 0 50px rgba(16,185,129,0.6)` |
| Header blur       | `backdrop-filter: blur(14px)` |

---

## Componentes fixos

### Botão primário (`.fc-btn--primary`)
- Background: `#10b981`
- Hover: `#059669` + `translateY(-2px)` + glow
- Padding: `0.9rem 2.4rem`
- Font-weight: 700

### Botão outline (`.fc-btn--outline`)
- Border: `1.5px solid rgba(255,255,255,0.3)`
- Hover: border-color `#10b981`, color `#10b981`

### Card de modalidade (`.fc-card`)
- Background: `#1e2535`
- Border: `1px solid rgba(255,255,255,0.07)`
- Hover: `translateY(-5px)` + border-color `rgba(16,185,129,0.32)`

---

## Logo e marca

- **Nome completo:** Academia FitCode
- **Abreviação:** FitCode
- **Renderização no HTML:** `Fit<span>Code</span>` — "Fit" em verde `#10b981`, "Code" em branco `#f0f6fc`
- **Favicon:** não definido (usar emoji 💪 como placeholder)
