import { Locator, Page } from '@playwright/test';
import { expect } from '../fixtures/fixture';

/**
 * NOTE (staged transcription): this locator map was transcribed from
 * screenshots covering lines 1-43 and 141-183 of the original file.
 * Lines ~44-140 were NOT captured — that's the rest of `feedback`
 * (only `ikon_voll` was seen; there are almost certainly more fields,
 * e.g. an "ikon_leer"/empty-star counterpart) plus `kachel1` through
 * `kachel19` (kachel20-26 were captured and follow a strictly
 * mechanical `xpath=//BA-BUB-KACHEL[n]//H2` pattern — see `kachel()`
 * below, which replaces the need to hardcode any of them).
 * Do not treat this file as 100% ground truth until that gap is filled in.
 */
export const OVERALL_PAGE = {
  breadcrumbs: {
    breadcrumb: '#kontextinfo-header-breadcrumb',
    breadcrumb1: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[1]//A',
    breadcrumb1_kein_link: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[1]',
    breadcrumb2: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[2]//A',
    breadcrumb2_kein_link: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[2]',
    breadcrumb3: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[3]//A',
    breadcrumb3_kein_link: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[3]',
    breadcrumb4: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[4]//A',
    breadcrumb4_kein_link: '//Nav[@id="kontextinfo-header-breadcrumb"]//LI[4]',
  },
  navbar: {
    ausbildungsberufe: '#navbar-ausbildungsberufe',
    studienberufe: '#navbar-studienberufe',
    themenfilme: '#navbar-themenfilme',
    filmeaz: '#navbar-filmeaz',
  },
  titel: '#content-header',
  kontextInfoHeader: {
    seitenrahmen_ueberschrift: '#ueberschrift',
    seitenrahmen_ueberschrift_zusatz: '#kontextinfo-header-subheadline',
  },
  berufSuchfeld: {
    input: '#typeahead-sucheingabe-beruf-input',
    loeschen: '#typeahead-sucheingabe-beruf-clear-btn',
    suchbutton: '#typeahead-sucheingabe-beruf-search-btn',
    autocomplete: {
      inhalt: '#typeahead-sucheingabe-beruf-menu',
      warnung: '#typeahead-sucheingabe-beruf-warning',
    },
  },
  versioninfo: '#version',
  feedback: {
    alte_Komponent: '//A[@id="flyout2-icon"]',
    alte_label: '//Span[contains(@class, "flyout-label")]',
    komponent: '#main-ba-feedback',
    titel_versteckt: '#slot-title',
    titel: 'css=div.h5',
    ikon_voll: 'css=div[class="ba-star-rating alignable center"]',
    // TODO(transcription-gap): more `feedback` fields likely exist here
    // (e.g. an empty-star icon counterpart) — not captured.
  },
  // TODO(transcription-gap): `kachel1` through `kachel19` were not
  // captured. They follow the exact same shape as kachel20-26 below
  // (only a `titel` field, `xpath=//BA-BUB-KACHEL[n]//H2`), so prefer
  // `OverallPage.kachel(n)` (below) over reproducing them here by hand.
  kachel20: { titel: 'xpath=//BA-BUB-KACHEL[20]//H2' },
  kachel21: { titel: 'xpath=//BA-BUB-KACHEL[21]//H2' },
  kachel22: { titel: 'xpath=//BA-BUB-KACHEL[22]//H2' },
  kachel23: { titel: 'xpath=//BA-BUB-KACHEL[23]//H2' },
  kachel24: { titel: 'xpath=//BA-BUB-KACHEL[24]//H2' },
  kachel25: { titel: 'xpath=//BA-BUB-KACHEL[25]//H2' },
  kachel26: { titel: 'xpath=//BA-BUB-KACHEL[26]//H2' },
} as const;

/**
 * Prüft die Funktionalität des Feedbackkomponents
 *
 * @deprecated kept for existing callers; prefer `OverallPage.expectDefaultFeedbackWidget()`,
 * which delegates to this same function.
 */
export async function feedbackKomponentUeberpruefen(page: Page) {
  await expect(page.locator(OVERALL_PAGE.feedback.komponent)).toBeVisible();
  await expect(page.locator(OVERALL_PAGE.feedback.alte_Komponent)).toBeHidden();
  await expect(page.locator(OVERALL_PAGE.feedback.alte_label)).toBeHidden();
  await expect(page.locator(OVERALL_PAGE.feedback.titel_versteckt)).toHaveAttribute(
    'class',
    'h6 text-center hoverable'
  );
  await expect(page.locator(OVERALL_PAGE.feedback.ikon_voll)).toBeVisible();
  await expect(page.locator(OVERALL_PAGE.feedback.titel)).toHaveText('Wie gefällt Ihnen Berufe.TV?');
  await expect(page.locator(OVERALL_PAGE.feedback.titel_versteckt)).toHaveText(
    'Bitte bewerten Sie das genutzte Online-Angebot, indem Sie einen bis fünf Sterne vergeben.'
  );
}

/**
 * Page object for the layout/shell shared by every berufe.TV page
 * (header, breadcrumb, navbar, search field, feedback widget, "BUB"
 * kachel grid).
 */
export class OverallPage {
  constructor(private readonly page: Page) {}

  /** The page-shell heading + subheading shown at the top of every page. */
  async expectHeader(erwartet: { titel: string; zusatz: string }): Promise<void> {
    await expect
      .soft(this.page.locator(OVERALL_PAGE.kontextInfoHeader.seitenrahmen_ueberschrift))
      .toHaveText(erwartet.titel);
    await expect
      .soft(this.page.locator(OVERALL_PAGE.kontextInfoHeader.seitenrahmen_ueberschrift_zusatz))
      .toHaveText(erwartet.zusatz);
  }

  /**
   * Asserts the full breadcrumb nav's text as a single string — used on
   * pages with a single, non-linked crumb (e.g. `'Startseite (aktuelle
   * Seite)'`). For multi-crumb pages, use `breadcrumbAt()` instead.
   */
  async expectBreadcrumbLabel(text: string): Promise<void> {
    await expect(this.page.locator(OVERALL_PAGE.breadcrumbs.breadcrumb)).toHaveText(text);
  }

  /**
   * Breadcrumb item by 1-based position. `keinLink: true` targets the
   * text-only variant (typically the last, current-page crumb).
   *
   * TODO: once every direct caller of `OVERALL_PAGE.breadcrumbs.breadcrumbN[_kein_link]`
   * has migrated to this method, replace that hardcoded 8-entry map with
   * a single templated locator built from `position`.
   */
  breadcrumbAt(position: 1 | 2 | 3 | 4, options: { keinLink?: boolean } = {}): Locator {
    const key = options.keinLink ? (`breadcrumb${position}_kein_link` as const) : (`breadcrumb${position}` as const);
    return this.page.locator(OVERALL_PAGE.breadcrumbs[key]);
  }

  /**
   * One of the generic "BUB" kacheln (1-26) shown site-wide, identified
   * purely by position. Computed rather than looked up in `OVERALL_PAGE`
   * so we don't need to hardcode all 26 entries by hand.
   */
  kachel(index: number): Locator {
    return this.page.locator(`xpath=//BA-BUB-KACHEL[${index}]//H2`);
  }

  async expectDefaultFeedbackWidget(): Promise<void> {
    await feedbackKomponentUeberpruefen(this.page);
  }
}
