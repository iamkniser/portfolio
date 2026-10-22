#!/usr/bin/env bash
# Собирает PDF-резюме из cv/*.html через headless Chrome.
# Использование: cv/build.sh [папка-назначения]   (по умолчанию public/)
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
out="${1:-$root/public}"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

render() {
  "$chrome" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=10000 \
    --print-to-pdf="$out/$2" "file://$root/cv/$1" 2>/dev/null
  echo "$out/$2"
}

render ru.html Krivosheyev_Nikita_resume.pdf
render en.html Nikita_Krivosheyev_CV.pdf
