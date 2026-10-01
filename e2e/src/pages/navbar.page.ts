import { expect } from '../fixtures/fixture';
import { Locator, Page } from '@playwright/test';

/**
 * NOTE: these selectors (`ausbildungsberufe`/`studienberufe`/`themenfilme`/
 * `filme_a_z` → `#navbar-*`) are the exact same ones already present in
 * `OVERALL_PAGE.navbar` (see overall.page.ts). This file additionally has
 * `registerkarte` and the "which tab is active" checker that overall.page.ts
 * doesn't. Left as two separate locator maps for now (not touching
 * overall.page.ts without knowing what currently depends on it) — worth
 * consolidating into one source of truth once we see which specs use which.
 */
export const NAVBAR_PAGE = {
  registerkarte: '#navbar-registerkarten',
  ausbildungsberufe: '#navbar-ausbildungsberufe',
  studienberufe: '#navbar-studienberufe',
  themenfilme: '#navbar-themenfilme',
  filme_a_z: '#navbar-filmeaz',
} as const;

export type NavbarTab = 'ausbildungsberufe' | 'studienberufe' | 'themenfilme' | 'filme_a_z';

const TAB_ORDER: NavbarTab[] = ['ausbildungsberufe', 'studienberufe', 'themenfilme', 'filme_a_z'];

const TAB_LABELS: Record<NavbarTab, { text: string; title: string }> = {
  ausbildungsberufe: { text: 'Ausbildungsberufe', title: 'Ausbildungsberufe' },
  studienberufe: { text: 'Studienberufe', title: 'Studienberufe' },
  themenfilme: { text: 'Themenfilme', title: 'Themenfilme' },
  filme_a_z: { text: 'Filme A - Z', title: 'Alle Filme A - Z' },
};

/** Maps the legacy numeric `type` (1-4) used by `navbarUeberpruefen` to a tab name. */
const TYPE_TO_TAB: Record<1 | 2 | 3 | 4, NavbarTab> = {
  1: 'ausbildungsberufe',
  2: 'studienberufe',
  3: 'themenfilme',
  4: 'filme_a_z',
};

/**
 * Component object for the global category navbar (Ausbildungsberufe /
 * Studienberufe / Themenfilme / Filme A-Z tabs), shown across berufe.TV's
 * category pages.
 */
export class Navbar {
  constructor(private readonly page: Page) {}

  get registerkarte(): Locator {
    return this.page.locator(NAVBAR_PAGE.registerkarte);
  }

  tab(tab: NavbarTab): Locator {
    return this.page.locator(NAVBAR_PAGE[tab]);
  }

  async expectVisible(): Promise<void> {
    await expect(this.registerkarte).toBeVisible();
  }

  /** Asserts every tab's visible text and `title` tooltip. */
  async expectLabels(): Promise<void> {
    for (const tab of TAB_ORDER) {
      const { text, title } = TAB_LABELS[tab];
      await expect(this.tab(tab)).toHaveText(text);
      await expect(this.tab(tab)).toHaveAttribute('title', title);
    }
  }

  /** Asserts `active` carries the "selected" class and every other tab the plain one. */
  async expectActiveTab(active: NavbarTab): Promise<void> {
    for (const tab of TAB_ORDER) {
      const expectedClass = tab === active ? 'ba-btn ba-btn-primary' : 'ba-btn';
      await expect(this.tab(tab)).toHaveAttribute('class', expectedClass);
    }
  }
}

/**
 * Prüft die Titel, TOOLTIP, und Class des Navbars.
 * type: mit Typ kann man die ensprechende Navbar Titel überprüfen, ob es ausgewählt wird.
 * type 1 = ausbildungsberufe, type 2 = studienberufe, type 3 = themenfilme, type 4 = filme_a_z
 *
 * @deprecated prefer `new Navbar(page)` with `expectVisible()` /
 * `expectLabels()` / `expectActiveTab()`, which this delegates to.
 */
export async function navbarUeberpruefen(page: Page, type: 1 | 2 | 3 | 4) {
  const navbar = new Navbar(page);
  await navbar.expectVisible();
  await navbar.expectLabels();
  await navbar.expectActiveTab(TYPE_TO_TAB[type]);
}
