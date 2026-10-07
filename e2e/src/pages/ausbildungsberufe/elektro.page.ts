import { Page } from '@playwright/test';
import { BerufsfeldPage } from '../components/berufsfeld-page.base';
import { Tile } from '../components/tile.component';

/**
 * Transcribed in full from screenshots of the real `elektro.page.ts` — no
 * gaps. Note the Berufsfeld ids (67208, 67210, 67211 — 67209 is absent):
 * preserved exactly as seen, not a transcription slip on this end.
 */
export const ELEKTRO_PAGE = {
  url: /berufetv.*\/ausbildungsberufe\/elektro$/,
  kacheln: {
    berufe_in_der_energietechnik: {
      kachel: '#kachel-berufsfeld-67208',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67208']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67208']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67208']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67208']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67208']//BUTTON[@id='anzahlButton-67208']",
    },
    berufe_in_der_informationskommunikationstechnik: {
      kachel: '#kachel-berufsfeld-67210',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67210']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67210']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67210']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67210']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67210']//BUTTON[@id='anzahlButton-67210']",
    },
    berufe_in_der_mechatronikautomatisierungstechnik: {
      kachel: '#kachel-berufsfeld-67211',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67211']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67211']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67211']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67211']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67211']//BUTTON[@id='anzahlButton-67211']",
    },
  },
};

/** Page object for the "Elektro" Berufsfeld category page (`/berufetv/ausbildungsberufe/elektro`). */
export class ElektroPage extends BerufsfeldPage {
  constructor(page: Page) {
    super(page, ELEKTRO_PAGE.url);
  }

  get energietechnikTile(): Tile {
    return this.tile(ELEKTRO_PAGE.kacheln.berufe_in_der_energietechnik);
  }

  get informationskommunikationstechnikTile(): Tile {
    return this.tile(ELEKTRO_PAGE.kacheln.berufe_in_der_informationskommunikationstechnik);
  }

  get mechatronikautomatisierungstechnikTile(): Tile {
    return this.tile(ELEKTRO_PAGE.kacheln.berufe_in_der_mechatronikautomatisierungstechnik);
  }
}
