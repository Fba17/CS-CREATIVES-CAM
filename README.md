# CS-CREATIVES-CAM — berufe.TV Playwright Tests

Playwright End-to-End-Tests für [berufe.TV](https://web.arbeitsagentur.de/berufetv/start),
das Videoportal der Bundesagentur für Arbeit.

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Tests ausführen

```bash
npm test              # headless, alle Browser (Chromium, Firefox, WebKit)
npm run test:headed   # mit sichtbarem Browser
npm run test:ui       # Playwright UI-Mode (empfohlen zum Debuggen)
npm run report        # letzten HTML-Report öffnen
```

## Testdatei

- `tests/berufetv.spec.ts` — Smoke-Test (Seite lädt), Suche, Video abspielen.
- `tests/helpers.ts` — Hilfsfunktion zum Wegklicken des Cookie-Banners.

## Wichtiger Hinweis

Diese Tests wurden **ohne Live-Zugriff** auf `web.arbeitsagentur.de` erstellt
(die Domain war vom Erstellungsnetzwerk aus blockiert). Die Selektoren sind
bewusst robust gewählt (ARIA-Rollen, sichtbare Texte), einige Stellen sind
aber mit `TODO` markiert, weil sie gegen die echte Seite verifiziert werden
müssen — z. B.:

- Exakter Button-Text des Cookie-/Consent-Banners
- Genaue Struktur der Video-Kacheln auf der Startseite
- Ob die Suche direkt ein Eingabefeld zeigt oder erst über einen Button
  geöffnet werden muss
- Ob nach Klick auf ein Video ein `<video>`-Element direkt eingebettet wird
  oder sich ein Player-Overlay öffnet

Am einfachsten lassen sich die TODOs mit dem Playwright-Codegen-Tool gegen
die echte Seite abgleichen:

```bash
npx playwright codegen https://web.arbeitsagentur.de/berufetv/start
```
