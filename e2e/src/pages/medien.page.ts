import { Page, expect } from '@playwright/test';
import { Tile } from './components/tile.component';

/**
 * Transcribed in full from screenshots of the real `medien.page.ts` — no
 * gaps. Note: unlike STARTPAGE_PAGE/OVERALL_PAGE, the source doesn't close
 * this object with `as const` — preserved as-is rather than silently
 * homogenized.
 */
export const MEDIEN_PAGE = {
  url: /berufetv.*\/ausbildungsberufe\/medien$/,
  kacheln: {
    berufe_rund_um_druck_und_medien: {
      kachel: '#kachel-berufsfeld-67300',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67300']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67300']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67300']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67300']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67300']//BUTTON[@id='anzahlButton-67300']",
    },
    berufe_rund_ums_foto: {
      kachel: '#kachel-berufsfeld-67301',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67301']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67301']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67301']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67301']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67301']//BUTTON[@id='anzahlButton-67301']",
    },
    berufe_rund_um_film_funk_und_fernsehen: {
      kachel: '#kachel-berufsfeld-67302',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67302']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67302']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67302']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67302']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67302']//BUTTON[@id='anzahlButton-67302']",
    },
    berufe_rund_um_archiv_bibliothek_und_dokumentation: {
      kachel: '#kachel-berufsfeld-67303',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67303']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67303']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67303']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67303']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67303']//BUTTON[@id='anzahlButton-67303']",
    },
    berufe_rund_um_journalismus_redaktion: {
      kachel: '#kachel-berufsfeld-67304',
      titel: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67304']//H2",
      text: "xpath=(//BA-BUB-KACHEL[@id='kachel-berufsfeld-67304']//P)[2]",
      link: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67304']//A",
      bild: "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67304']//DIV[@class='ba-image']",
      anzahl:
        "xpath=//BA-BUB-KACHEL[@id='kachel-berufsfeld-67304']//BUTTON[@id='anzahlButton-67304']",
    },
  },
};

/**
 * Page object for the "Medien" Berufsfeld category page under
 * Ausbildungsberufe (`/berufetv/ausbildungsberufe/medien`).
 *
 * Every kachel here shares the exact same 6-field shape
 * (kachel/titel/text/link/bild/anzahl), so they all go through the
 * generic `Tile` with no exceptions needed.
 */
export class MedienPage {
  constructor(private readonly page: Page) {}

  async expectUrl(): Promise<void> {
    await expect(this.page).toHaveURL(MEDIEN_PAGE.url);
  }

  get druckUndMedienTile(): Tile {
    return new Tile(this.page, MEDIEN_PAGE.kacheln.berufe_rund_um_druck_und_medien);
  }

  get fotoTile(): Tile {
    return new Tile(this.page, MEDIEN_PAGE.kacheln.berufe_rund_ums_foto);
  }

  get filmFunkUndFernsehenTile(): Tile {
    return new Tile(this.page, MEDIEN_PAGE.kacheln.berufe_rund_um_film_funk_und_fernsehen);
  }

  get archivBibliothekUndDokumentationTile(): Tile {
    return new Tile(this.page, MEDIEN_PAGE.kacheln.berufe_rund_um_archiv_bibliothek_und_dokumentation);
  }

  get journalismusRedaktionTile(): Tile {
    return new Tile(this.page, MEDIEN_PAGE.kacheln.berufe_rund_um_journalismus_redaktion);
  }
}
