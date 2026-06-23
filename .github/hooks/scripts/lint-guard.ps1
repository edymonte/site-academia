# lint-guard.ps1 - Hook de governanca para Windows (PowerShell)
# Executado pelo Copilot Agent apos operacoes de escrita em arquivos HTML/CSS
# Evento: postToolUse

param(
    [string]$FilePath = "",
    [string]$Content  = ""
)

$violations = @()

# Regra 1: <img> sem alt
if ($Content -match '<img(?![^>]*alt=)[^>]*>') {
    $violations += "[ERRO] img-requires-alt: <img> sem atributo alt detectado em $FilePath"
}

# Regra 2: Classes sem prefixo fc-
if ($Content -match 'class="(?!fc-)[a-z][a-z0-9-]*"') {
    $violations += "[AVISO] css-prefix: classe CSS sem prefixo fc- detectada em $FilePath"
}

# Regra 3: outline: none sem alternativa
if ($Content -match 'outline:\s*none') {
    $violations += "[AVISO] outline-none: outline none remove foco visivel (WCAG 2.4.7) em $FilePath"
}

# Regra 4: <div> com papel semantico no id/class
if ($Content -match '<div\s+(class|id)="(header|nav|main|footer|section|article|aside)"') {
    $violations += "[ERRO] no-div-semantic: <div> usado onde elemento semantico se aplica em $FilePath"
}

if ($violations.Count -gt 0) {
    Write-Host "" 
    Write-Host "[lint-guard] $($violations.Count) violacao(es) encontrada(s) em $FilePath" -ForegroundColor Red
    Write-Host ""
    foreach ($v in $violations) {
        if ($v.StartsWith("[ERRO]")) {
            Write-Host $v -ForegroundColor Red
        } else {
            Write-Host $v -ForegroundColor Yellow
        }
    }
    Write-Host ""
    Write-Host "Consulte: .github/copilot-instructions.md" -ForegroundColor Cyan
    Write-Host ""
    exit 0
}

Write-Host "[lint-guard] OK - nenhuma violacao detectada em $FilePath" -ForegroundColor Green
exit 0
