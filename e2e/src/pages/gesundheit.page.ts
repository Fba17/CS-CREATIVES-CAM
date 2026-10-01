import { Page } from '@playwright/test';
import { BerufsfeldPage } from './components/berufsfeld-page.base';
import { Tile } from './components/tile.component';

/** Transcribed in full from screenshots of the real `gesundheit.page.ts` — no gaps. */
export const GESUNDHEIT_PAGE = {
  url: /berufetv.*\/ausbildungsberufe\/gesundheit$/,
  kacheln: {
    berufe_mit_medizin: {
      kachel: '#kachel-berufsfeld-67270',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67270']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67270']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67270']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67270']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67270']//BUTTON[@id='anzahlButton-67270']",
    },
    berufe_in_der_therapie_nicht_aertzlich: {
      kachel: '#kachel-berufsfeld-67271',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67271']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67271']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67271']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67271']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67271']//BUTTON[@id='anzahlButton-67271']",
    },
    berufe_in_der_pflege: {
      kachel: '#kachel-berufsfeld-67272',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67272']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67272']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67272']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67272']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67272']//BUTTON[@id='anzahlButton-67272']",
    },
    berufe_in_der_ernaehrung: {
      kachel: '#kachel-berufsfeld-67273',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67273']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67273']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67273']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67273']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67273']//BUTTON[@id='anzahlButton-67273']",
    },
    berufe_in_der_medizin_rehatechnik: {
      kachel: '#kachel-berufsfeld-67274',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67274']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67274']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67274']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67274']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67274']//BUTTON[@id='anzahlButton-67274']",
    },
    berufe_im_rettungsdienst: {
      kachel: '#kachel-berufsfeld-67275',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67275']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67275']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67275']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67275']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67275']//BUTTON[@id='anzahlButton-67275']",
    },
    berufe_mit_psychologie: {
      kachel: '#kachel-berufsfeld-67276',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67276']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67276']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67276']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67276']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67276']//BUTTON[@id='anzahlButton-67276']",
    },
    berufe_rund_um_sport_bewegung: {
      kachel: '#kachel-berufsfeld-67277',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67277']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67277']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67277']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67277']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67277']//BUTTON[@id='anzahlButton-67277']",
    },
  },
};

/** Page object for the "Gesundheit" Berufsfeld category page (`/berufetv/ausbildungsberufe/gesundheit`). */
export class GesundheitPage extends BerufsfeldPage {
  constructor(page: Page) {
    super(page, GESUNDHEIT_PAGE.url);
  }

  get medizinTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_mit_medizin);
  }

  get therapieNichtAertzlichTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_in_der_therapie_nicht_aertzlich);
  }

  get pflegeTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_in_der_pflege);
  }

  get ernaehrungTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_in_der_ernaehrung);
  }

  get medizinRehatechnikTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_in_der_medizin_rehatechnik);
  }

  get rettungsdienstTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_im_rettungsdienst);
  }

  get psychologieTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_mit_psychologie);
  }

  get sportBewegungTile(): Tile {
    return this.tile(GESUNDHEIT_PAGE.kacheln.berufe_rund_um_sport_bewegung);
  }
}
