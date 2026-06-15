#!/usr/bin/env bash
# lint-guard.sh — Hook de governança para Linux/Mac (bash)
# Executado pelo Copilot Agent após operações de escrita em arquivos HTML/CSS
# Evento: postToolUse

FILE_PATH="${1:-}"
CONTENT="${2:-}"

violations=()

# Regra 1: <img> sem alt
if echo "$CONTENT" | grep -qP '<img(?![^>]*\balt=)[^>]*>'; then
  violations+=("[ERRO] img-requires-alt: <img> sem atributo 'alt' detectado em $FILE_PATH")
fi

# Regra 2: Classes sem prefixo fc-
if echo "$CONTENT" | grep -qP 'class="(?!fc-)[a-z][a-z0-9-]*"'; then
  violations+=("[AVISO] css-prefix: classe CSS sem prefixo 'fc-' detectada em $FILE_PATH")
fi

# Regra 3: outline: none
if echo "$CONTENT" | grep -qP 'outline:\s*none'; then
  violations+=("[AVISO] outline-none: 'outline: none' remove foco visível (WCAG 2.4.7) em $FILE_PATH")
fi

# Regra 4: <div> com papel semântico
if echo "$CONTENT" | grep -qP '<div\s+(class|id)="(header|nav|main|footer|section|article|aside)"'; then
  violations+=("[ERRO] no-div-semantic: <div> usado onde elemento semântico se aplica em $FILE_PATH")
fi

if [ ${#violations[@]} -gt 0 ]; then
  echo ""
  echo "╔══════════════════════════════════════════════════════╗"
  echo "║  [lint-guard] Violações de Governança FitCode        ║"
  echo "╚══════════════════════════════════════════════════════╝"
  for v in "${violations[@]}"; do
    echo "$v"
  done
  echo ""
  echo "Consulte: .github/copilot-instructions.md"
  echo ""
  # exit 0 = warn (não bloqueia). Mude para exit 1 para bloquear o agente.
  exit 0
fi

echo "[lint-guard] OK — nenhuma violação detectada em $FILE_PATH"
exit 0
