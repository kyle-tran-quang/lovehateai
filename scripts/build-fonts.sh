#!/usr/bin/env bash
# Builds the web copies of the typeface from fonts/ (read-only source).
# Needs: pip install fonttools brotli
#
#   bash scripts/build-fonts.sh [main|condensed|all]     (default: all)
#
#   main       fonts/CargoDiatypePlusVariable.ttf  -> src/assets/fonts/Diatype.woff2
#   condensed  fonts/CargoDiatypeWidthsVariable.ttf -> src/assets/fonts/DiatypeCondensed.woff2
#              Pinned to wdth 75 (Condensed), weight 400-700, no slant, no MONO. Used for
#              the homepage headline only. That file's license is not confirmed in
#              CLAUDE.md, so check it before the generated copy goes in a public repo.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
target="${1:-all}"
out_dir="$root/src/assets/fonts"

# Everything the site can plausibly print. pyftsubset keeps only the codepoints
# the font actually has, so ranges can be generous. Anything outside this list
# falls through to Inter (see global.css).
unicodes=(
  U+0020-007E            # Basic Latin
  U+00A0-024F            # Latin-1, Latin Extended-A and B
  U+02C6-02DD            # Spacing modifiers
  U+0394,U+03A9,U+03BC,U+03C0   # Δ Ω μ π
  U+1E80-1E85,U+1E9E,U+1EF2-1EF3
  U+2002-200A            # Spaces
  U+2010-2027,U+2030-203A,U+2044   # Punctuation, fraction slash
  U+2070-2079,U+2080-2089          # Super- and subscripts
  U+20A0-20BF            # Currency
  U+2113,U+2116,U+2117,U+2122,U+2126   # ℓ № ℗ ™ Ω
  U+2153-215F            # Fractions
  U+2190-2199            # Arrows
  U+2202-2206,U+220F,U+2211-2212,U+2215,U+221A,U+221E,U+222B   # Math
  U+2248,U+2260,U+2264-2265
  U+FB01-FB02            # fi fl
)
# Join with commas, dropping the comments above.
list="$(IFS=,; echo "${unicodes[*]}")"

subset() { # input output
  pyftsubset "$1" \
    --output-file="$2" \
    --flavor=woff2 \
    --unicodes="$list" \
    --layout-features='*' \
    --no-hinting \
    --desubroutinize
}

build_main() {
  subset "$root/fonts/CargoDiatypePlusVariable.ttf" "$out_dir/Diatype.woff2"
}

build_condensed() {
  local tmp
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' RETURN
  fonttools varLib.instancer "$root/fonts/CargoDiatypeWidthsVariable.ttf" \
    wght=400:700 wdth=75 slnt=0 MONO=0 \
    -o "$tmp/condensed.ttf" -q
  subset "$tmp/condensed.ttf" "$out_dir/DiatypeCondensed.woff2"
}

case "$target" in
  main) build_main ;;
  condensed) build_condensed ;;
  all) build_main; build_condensed ;;
  *) echo "usage: build-fonts.sh [main|condensed|all]" >&2; exit 2 ;;
esac
