import { Page } from '@playwright/test';
import { BerufsfeldPage } from '../components/berufsfeld-page.base';
import { Tile } from '../components/tile.component';

/**
 * SKELETON — not yet implemented from real screenshots, only from
 * confirmed usage in `ausbildungsberufeUeberblick.spec.ts`:
 *  - these 17 kachel names are real (`PRODUKTIONFERTIGUNG_PAGE.kacheln.<name>.anzahl`
 *    is asserted for every one of them)
 *  - the shape is assumed to be the standard 6-field one
 *    (kachel/titel/text/link/bild/anzahl) used by every other Berufsfeld
 *    category page (medien/gesundheit/elektro/it_computer) — NOT verified
 *    for this page specifically
 *  - `url` slug "produktion-fertigung" is now CONFIRMED (every
 *    `expectedLinkHref` in produktionFertigung.data.ts targets
 *    `/ausbildungsberufe/produktion-fertigung/<sub-slug>/`)
 * Replace every `'TODO'` below with the real locators from your own
 * produktion_fertigung.page.ts before relying on this file.
 */
export const PRODUKTIONFERTIGUNG_PAGE = {
  url: /berufetv.*\/ausbildungsberufe\/produktion-fertigung$/,
  kacheln: {
    berufe_mit_bergbau: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_baustoffen_und_natursteinen: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_edelsteinen: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_farben_lacke: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_glas: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_keramik: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_kunststoff: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_papier: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_holz: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_textillien: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_bekleidung: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_leder: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_lebensmittel: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_getraenke: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_musikinstrumentenbau: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_arbeitsvorbereitung: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
    berufe_mit_qualitaetssicherung: {
      kachel: 'TODO',
      titel: 'TODO',
      text: 'TODO',
      link: 'TODO',
      bild: 'TODO',
      anzahl: 'TODO',
    },
  },
};

/** Page object for the "Produktion, Fertigung" Berufsfeld category page. SKELETON, see note above. */
export class ProduktionFertigungPage extends BerufsfeldPage {
  constructor(page: Page) {
    super(page, PRODUKTIONFERTIGUNG_PAGE.url);
  }

  get bergbauTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_bergbau);
  }

  get baustoffenUndNatursteinenTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_baustoffen_und_natursteinen);
  }

  get edelsteinenTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_edelsteinen);
  }

  get farbenLackeTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_farben_lacke);
  }

  get glasTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_glas);
  }

  get keramikTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_keramik);
  }

  get kunststoffTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_kunststoff);
  }

  get papierTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_papier);
  }

  get holzTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_holz);
  }

  get textillienTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_textillien);
  }

  get bekleidungTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_bekleidung);
  }

  get lederTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_leder);
  }

  get lebensmittelTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_lebensmittel);
  }

  get getraenkeTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_getraenke);
  }

  get musikinstrumentenbauTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_musikinstrumentenbau);
  }

  get arbeitsvorbereitungTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_arbeitsvorbereitung);
  }

  get qualitaetssicherungTile(): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln.berufe_mit_qualitaetssicherung);
  }

  /** Looks up a tile by its key in `PRODUKTIONFERTIGUNG_PAGE.kacheln` — for data-driven loops. */
  tileByKey(key: keyof typeof PRODUKTIONFERTIGUNG_PAGE.kacheln): Tile {
    return this.tile(PRODUKTIONFERTIGUNG_PAGE.kacheln[key]);
  }
}
