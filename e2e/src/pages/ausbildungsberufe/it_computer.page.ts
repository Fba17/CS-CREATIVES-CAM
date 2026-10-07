import { Page } from '@playwright/test';
import { BerufsfeldPage } from '../components/berufsfeld-page.base';
import { Tile } from '../components/tile.component';

/** Transcribed in full from screenshots of the real `it_computer.page.ts` — no gaps. */
export const ITCOMPUTER_PAGE = {
  url: /berufetv.*\/ausbildungsberufe\/it-computer$/,
  kacheln: {
    berufe_in_der_hard_softwareentwicklung: {
      kachel: '#kachel-berufsfeld-67213',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67213']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67213']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67213']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67213']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67213']//BUTTON[@id='anzahlButton-67213']",
    },
    berufe_in_der_it_administration: {
      kachel: '#kachel-berufsfeld-67214',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67214']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67214']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67214']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67214']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67214']//BUTTON[@id='anzahlButton-67214']",
    },
    berufe_in_der_it_koordination: {
      kachel: '#kachel-berufsfeld-67215',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67215']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67215']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67215']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67215']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67215']//BUTTON[@id='anzahlButton-67215']",
    },
    berufe_in_der_it_kundenbetreuung: {
      kachel: '#kachel-berufsfeld-67216',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67216']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67216']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67216']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67216']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67216']//BUTTON[@id='anzahlButton-67216']",
    },
  },
};

/** Page object for the "IT & Computer" Berufsfeld category page (`/berufetv/ausbildungsberufe/it-computer`). */
export class ItComputerPage extends BerufsfeldPage {
  constructor(page: Page) {
    super(page, ITCOMPUTER_PAGE.url);
  }

  get hardSoftwareentwicklungTile(): Tile {
    return this.tile(ITCOMPUTER_PAGE.kacheln.berufe_in_der_hard_softwareentwicklung);
  }

  get itAdministrationTile(): Tile {
    return this.tile(ITCOMPUTER_PAGE.kacheln.berufe_in_der_it_administration);
  }

  get itKoordinationTile(): Tile {
    return this.tile(ITCOMPUTER_PAGE.kacheln.berufe_in_der_it_koordination);
  }

  get itKundenbetreuungTile(): Tile {
    return this.tile(ITCOMPUTER_PAGE.kacheln.berufe_in_der_it_kundenbetreuung);
  }
}
