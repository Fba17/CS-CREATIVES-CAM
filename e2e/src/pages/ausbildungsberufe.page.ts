import { Page, expect } from '@playwright/test';
import { BerufsfeldPage } from './components/berufsfeld-page.base';
import { Tile } from './components/tile.component';

/**
 * Transcribed in full from screenshots of the real `ausbildungsberufe.page.ts`
 * (152 lines, confirmed by the editor's status bar) — no gaps.
 */
export const AUSBILDUNGSBERUFE_PAGE = {
  url: /berufetv.*\/ausbildungsberufe$/,
  kacheln: {
    landwirtschaft: {
      kachel: '#kachel-berufsfeld-67170',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67170"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67170"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67170"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67170"]//DIV[@class=\'ba-image\']',
    },
    produktion_fertigung: {
      kachel: '#kachel-berufsfeld-67174',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67174"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67174"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67174"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67174"]//DIV[@class=\'ba-image\']',
    },
    bau_architektur_vermessung: {
      kachel: '#kachel-berufsfeld-67189',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67189"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67189"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67189"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67189"]//DIV[@class=\'ba-image\']',
    },
    metall_maschinenbau: {
      kachel: '#kachel-berufsfeld-67197',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67197"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67197"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67197"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67197"]//DIV[@class=\'ba-image\']',
    },
    elektro: {
      kachel: '#kachel-berufsfeld-67206',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67206"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67206"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67206"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67206"]//DIV[@class=\'ba-image\']',
    },
    it_computer: {
      kachel: '#kachel-berufsfeld-67212',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67212"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67212"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67212"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67212"]//DIV[@class=\'ba-image\']',
    },
    naturwissenschaften: {
      kachel: '#kachel-berufsfeld-67218',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67218"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67218"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67218"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67218"]//DIV[@class=\'ba-image\']',
    },
    technik_technologiefelder: {
      kachel: '#kachel-berufsfeld-67226',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67226"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67226"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67226"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67226"]//DIV[@class=\'ba-image\']',
    },
    wirtschaft_verwaltung: {
      kachel: '#kachel-berufsfeld-67236',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67236"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67236"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67236"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67236"]//DIV[@class=\'ba-image\']',
    },
    verkehr_logistik: {
      kachel: '#kachel-berufsfeld-67248',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67248"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67248"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67248"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67248"]//DIV[@class=\'ba-image\']',
    },
    dienstleistung: {
      kachel: '#kachel-berufsfeld-67254',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67254"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67254"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67254"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67254"]//DIV[@class=\'ba-image\']',
    },
    gesundheit: {
      kachel: '#kachel-berufsfeld-67269',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67269"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67269"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67269"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67269"]//DIV[@class=\'ba-image\']',
    },
    soziales_paedagogik: {
      kachel: '#kachel-berufsfeld-67278',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67278"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67278"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67278"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67278"]//DIV[@class=\'ba-image\']',
    },
    gesellschaft_geisteswissenschaften: {
      kachel: '#kachel-berufsfeld-67286',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67286"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67286"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67286"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67286"]//DIV[@class=\'ba-image\']',
    },
    kunst_kultur_gestaltung: {
      kachel: '#kachel-berufsfeld-67291',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67291"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67291"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67291"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67291"]//DIV[@class=\'ba-image\']',
    },
    medien: {
      kachel: '#kachel-berufsfeld-67299',
      titel: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67299"]//H2',
      text: 'xpath=(//BA-BUB-KACHEL[@id="kachel-berufsfeld-67299"]//P)[2]',
      link: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67299"]//A',
      bild: 'xpath=//BA-BUB-KACHEL[@id="kachel-berufsfeld-67299"]//DIV[@class=\'ba-image\']',
    },
  },
};

/**
 * Kachel Prüfungsmethode. Prüft Titel, Text, Bild und Link
 *
 * Pre-existing generic tile checker — functionally equivalent to
 * `Tile.expectContent()` with `image: { kind: 'background-url', ... }`
 * (added to `Tile` specifically to match what this function already
 * checks: an exact `background-image` URL built from a fixed prefix +
 * filename, plus the absence of an `alt` attribute). Left exactly as-is
 * rather than migrated, since other specs may already call it directly;
 * new category pages should prefer `Tile` for one unified API.
 */
export async function kachelPruefung(
  page: Page,
  kachel: {
    kachelSelector: string;
    titelSelector: string;
    expectedTitel: string;
    textSelector: string;
    expectedText: string;
    bildSelector: string;
    expectedBild: string;
    linkSelector: string;
    expectedLinkHref: RegExp;
  }
) {
  await expect.soft(page.locator(kachel.kachelSelector)).toBeVisible();
  await expect.soft(page.locator(kachel.titelSelector)).toHaveText(kachel.expectedTitel);
  await expect.soft(page.locator(kachel.textSelector)).toHaveText(kachel.expectedText);
  await expect
    .soft(page.locator(kachel.linkSelector))
    .toHaveAttribute('href', kachel.expectedLinkHref);
  await expect.soft(page.locator(kachel.bildSelector)).not.toHaveAttribute('alt');
  await expect
    .soft(page.locator(kachel.bildSelector))
    .toHaveAttribute(
      'style',
      'background-image: url("assets/images/kachel/dkzid/maxcompressed/' + kachel.expectedBild + '");'
    );
}

/**
 * Page object for the central "Ausbildungsberufe" page
 * (`/berufetv/ausbildungsberufe`), which links out to every Berufsfeld
 * category page (Medien, Gesundheit, Elektro, IT & Computer, ...).
 */
export class AusbildungsberufePage extends BerufsfeldPage {
  constructor(page: Page) {
    super(page, AUSBILDUNGSBERUFE_PAGE.url);
  }

  get landwirtschaftTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.landwirtschaft);
  }

  get produktionFertigungTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.produktion_fertigung);
  }

  get bauArchitekturVermessungTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.bau_architektur_vermessung);
  }

  get metallMaschinenbauTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.metall_maschinenbau);
  }

  get elektroTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.elektro);
  }

  get itComputerTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.it_computer);
  }

  get naturwissenschaftenTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.naturwissenschaften);
  }

  get technikTechnologiefelderTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.technik_technologiefelder);
  }

  get wirtschaftVerwaltungTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.wirtschaft_verwaltung);
  }

  get verkehrLogistikTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.verkehr_logistik);
  }

  get dienstleistungTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.dienstleistung);
  }

  get gesundheitTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.gesundheit);
  }

  get sozialesPaedagogikTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.soziales_paedagogik);
  }

  get gesellschaftGeisteswissenschaftenTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.gesellschaft_geisteswissenschaften);
  }

  get kunstKulturGestaltungTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.kunst_kultur_gestaltung);
  }

  get medienTile(): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln.medien);
  }

  /**
   * Looks up a tile by its key in `AUSBILDUNGSBERUFE_PAGE.kacheln` instead
   * of its named getter — for data-driven loops (e.g. over a `.data.ts`
   * file keyed the same way) instead of one call per named getter.
   */
  tileByKey(key: keyof typeof AUSBILDUNGSBERUFE_PAGE.kacheln): Tile {
    return this.tile(AUSBILDUNGSBERUFE_PAGE.kacheln[key]);
  }
}
