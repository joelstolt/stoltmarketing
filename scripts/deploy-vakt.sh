#!/bin/sh
# Deployspärr för prod (www.stoltmarketing.se). Infört 2026-10-01, efter att prod
# deployats från en gren som saknade det som bara fanns på main.
#
#   sh scripts/deploy-vakt.sh --stampla   Körs sist i pnpm cf:build och skriver vilken
#                                         commit bygget gjordes från.
#   sh scripts/deploy-vakt.sh             Körs av wrangler före varje prod-deploy
#                                         (build.command i wrangler.jsonc), alltså både
#                                         npx wrangler deploy och pnpm cf:deploy.
#
# Previewn (-c wrangler.preview.jsonc) har ingen spärr och får deployas från vilken gren som helst.
set -e
STAMP=.open-next/byggd-fran.txt
# Det som hamnar i bygget. Osparade ändringar här skulle ge prod något som inte finns i git.
KALLOR="app components lib public middleware.js next.config.mjs package.json pnpm-lock.yaml worker-with-headers.mjs open-next.config.ts postcss.config.mjs jsconfig.json wrangler.jsonc"

if [ "$1" = "--stampla" ]; then
  if [ -n "$(git status --porcelain -- $KALLOR)" ]; then
    echo osparat > "$STAMP"
  else
    git rev-parse HEAD > "$STAMP"
  fi
  exit 0
fi

stopp() { echo "STOPP, ingen deploy till prod: $1" >&2; exit 1; }

gren=$(git rev-parse --abbrev-ref HEAD)
[ "$gren" = main ] || stopp "prod deployas bara från main, den här mappen står på $gren."
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] || stopp "main är inte samma som origin/main. Pusha (eller pulla) först."

byggd=$(cat "$STAMP" 2>/dev/null || true)
[ "$byggd" != osparat ] || stopp "bygget gjordes med osparade ändringar. Committa och pusha, kör sedan pnpm cf:build igen."
[ "$byggd" = "$(git rev-parse HEAD)" ] || stopp "bygget i .open-next är inte gjort från den här commiten. Kör pnpm cf:build först."

echo "Deployspärren ok: main $(git rev-parse --short HEAD), pushad och byggd från samma commit."
