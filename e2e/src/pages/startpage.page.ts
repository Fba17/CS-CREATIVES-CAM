import { Locator, Page } from '@playwright/test';
import { CookieBanner } from './components/cookie-banner.component';
import { NewsTile } from './components/news-tile.component';
import { Tile } from './components/tile.component';

/**
 * Transcribed from screenshots of the real `startpage.page.ts`. As far as
 * `startseite.spec.ts` exercises it, this map is now complete.
 */
export const STARTPAGE_PAGE = {
  cookiesDisclaimer: {
    button: {
      alleUebernehmen: 'bahf-cookie-disclaimer-btn-alle',
    },
  },
  url: /berufetv.*\/start$/,
  zurueck_zur_startseite: '//DIV[@class="error-404"]//button',
  kacheln: {
    filmkategorien: {
      ausbildungsberufeTile: {
        kachel: '#start_ausbildungsberufe',
        titel: 'xpath=//*[@id="start_ausbildungsberufe"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-overlay-tile//H3)[1]',
        text: 'xpath=//*[@id="start_ausbildungsberufe"]//p',
        link: 'xpath=//*[@id="start_ausbildungsberufe"]//a',
        bild: 'xpath=//*[@id="start_ausbildungsberufe"]//DIV[@class="ba-image"]',
      },
      studienberufeTile: {
        kachel: '#start_studienberufe',
        titel: 'xpath=//*[@id="start_studienberufe"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-overlay-tile//H3)[2]',
        text: 'xpath=//*[@id="start_studienberufe"]//p',
        link: 'xpath=//*[@id="start_studienberufe"]//a',
        bild: 'xpath=//*[@id="start_studienberufe"]//DIV[@class="ba-image"]',
      },
      neueFilmeTile: {
        kachel: '#start_neuefilme',
        titel: 'xpath=//*[@id="start_neuefilme"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-overlay-tile//H3)[3]',
        text: 'xpath=//*[@id="start_neuefilme"]//p',
        link: 'xpath=//*[@id="start_neuefilme"]//a',
        bild: 'xpath=//*[@id="start_neuefilme"]//DIV[@class="ba-image"]',
      },
    },
    weitereInteressanteBereiche: {
      sektionUeberschrift: '#field-section-heading',
      themenfilmeSchmalTile: {
        kachel: '#start_themenfilme',
        titel: 'xpath=//*[@id="start_themenfilme"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[1]',
        text: 'xpath=//*[@id="start_themenfilme"]//p',
        link: 'xpath=//*[@id="start_themenfilme"]//a',
        bild: 'xpath=//*[@id="start_themenfilme"]//IMG[@class="ba-image"]',
      },
      willkommenInDeutschlandSchmalTile: {
        kachel: '#start_willkommen_in_deutschland',
        titel: 'xpath=//*[@id="start_willkommen_in_deutschland"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[2]',
        text: 'xpath=//*[@id="start_willkommen_in_deutschland"]//p',
        bild: 'xpath=//*[@id="start_willkommen_in_deutschland"]//IMG[@class="ba-image"]',
      },
      alleFilmeA_ZSchmalTile: {
        kachel: '#banner_abisz',
        titel: 'xpath=//*[@id="banner_abisz"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[3]',
        text: 'xpath=//*[@id="banner_abisz"]//p',
        bild: 'xpath=//*[@id="banner_abisz"]//IMG[@class="ba-image"]',
      },
      digitaleNutzerreisenTile: {
        kachel: '#start_digitale_nutzerreisen',
        titel: 'xpath=//*[@id="start_digitale_nutzerreisen"]//h3',
        text: 'xpath=//*[@id="start_digitale_nutzerreisen"]//p',
        bild: 'xpath=//*[@id="start_digitale_nutzerreisen"]//IMG[@class="ba-image"]',
      },
      wegeInsAuslandSchmalTile: {
        kachel: '#start_wege_ins_ausland',
        titel: 'xpath=//*[@id="start_wege_ins_ausland"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[4]',
        text: 'xpath=//*[@id="start_wege_ins_ausland"]//p',
        bild: 'xpath=//*[@id="start_wege_ins_ausland"]//IMG[@class="ba-image"]',
      },
      rundUmDenBerufsalltagSchmalTile: {
        kachel: '#rund_um_den_Berufsalltag',
        titel: 'xpath=//*[@id="rund_um_den_Berufsalltag"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[5]',
        text: 'xpath=//*[@id="rund_um_den_Berufsalltag"]//p',
        bild: 'xpath=//*[@id="rund_um_den_Berufsalltag"]//IMG[@class="ba-image"]',
      },
      beruflicheIdeenUndImpulseSchmalTile: {
        kachel: '#weitere_inspirationen',
        titel: 'xpath=//*[@id="weitere_inspirationen"]//h3',
        titel_fuerReihenfolge: 'xpath=(//ba-berufetv-narrow-image-tile//H3)[6]',
        text: 'xpath=//*[@id="weitere_inspirationen"]//p',
        bild: 'xpath=//*[@id="weitere_inspirationen"]//IMG[@class="ba-image"]',
      },
    },
    andereHilfreicheAnwendungen: {
      sektionUeberschrift: '#otherapps-section-heading',
      serviceLink_01Tile: {
        link: 'xpath=(//ba-berufetv-servicelinks//article)[1]//a',
        text: 'xpath=(//ba-berufetv-servicelinks//article)[1]//div/p',
      },
      serviceLink_02Tile: {
        link: 'xpath=(//ba-berufetv-servicelinks//article)[2]//a',
        text: 'xpath=(//ba-berufetv-servicelinks//article)[2]//div/p',
      },
      serviceLink_03Tile: {
        link: 'xpath=(//ba-berufetv-servicelinks//article)[3]//a',
        text: 'xpath=(//ba-berufetv-servicelinks//article)[3]//div/p',
      },
      serviceLink_04Tile: {
        link: 'xpath=(//ba-berufetv-servicelinks//article)[4]//a',
      },
    },
    unsereServices: {
      sektionUeberschrift: '#footer-section-heading',
      berufsberatungTile: {
        kachel: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[1]',
        titel: '#berufsberatung-forward-heading',
        text: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[1]/div/p',
        link: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[1]//a',
      },
      azubiWeltTile: {
        kachel: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[2]',
        titel: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[2]//H3',
        text: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[2]/div/p',
        link: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[2]//a',
        logo: '(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[2]/img',
      },
      newsTile: {
        kachel: 'xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, "ba-tile")])[3]',
        titel: "xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, 'ba-tile')])[3]/H3",
        text: "xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, 'ba-tile')])[3]/div/p",
        link_01: 'xpath=(//ba-berufetv-news-teaser-list/ul/li)[1]/a',
        link_02: 'xpath=(//ba-berufetv-news-teaser-list/ul/li)[2]/a',
        link_03: 'xpath=(//ba-berufetv-news-teaser-list/ul/li)[3]/a',
        link_AlleNews:
          "xpath=(//BA-BERUFETV-START-FOOTER//section[contains(@class, 'ba-tile')])[3]/footer/a",
      },
    },
  },
} as const;

/**
 * Page object for the berufe.TV start page (`/berufetv/start`).
 *
 * Exposes `Tile` components for every kachel exercised by
 * `startseite.spec.ts` (the "@smoke 01" content test and the "@smoke 02"
 * order test, via `Tile.expectOrderLabel`), including `unsereServices`
 * (`berufsberatungTile`/`azubiWeltTile` fit the generic `Tile`; `newsTile`
 * gets the dedicated `NewsTile` component for its list of numbered links)
 * and `andereHilfreicheAnwendungen`'s `serviceLink_0{1..4}Tile` (which
 * have no dedicated `kachel` container — `Tile` falls back to `link` as
 * the visibility anchor for those).
 */
export class StartPage {
  constructor(private readonly page: Page) {}

  get cookieBanner(): CookieBanner {
    return new CookieBanner(this.page, STARTPAGE_PAGE.cookiesDisclaimer.button.alleUebernehmen);
  }

  get ausbildungsberufeTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.filmkategorien.ausbildungsberufeTile);
  }

  get studienberufeTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.filmkategorien.studienberufeTile);
  }

  get neueFilmeTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.filmkategorien.neueFilmeTile);
  }

  get weitereInteressanteBereicheUeberschrift(): Locator {
    return this.page.locator(STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.sektionUeberschrift);
  }

  get themenfilmeSchmalTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.themenfilmeSchmalTile);
  }

  get willkommenInDeutschlandSchmalTile(): Tile {
    return new Tile(
      this.page,
      STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.willkommenInDeutschlandSchmalTile
    );
  }

  get alleFilmeA_ZSchmalTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.alleFilmeA_ZSchmalTile);
  }

  get digitaleNutzerreisenTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.digitaleNutzerreisenTile);
  }

  get wegeInsAuslandSchmalTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.wegeInsAuslandSchmalTile);
  }

  get rundUmDenBerufsalltagSchmalTile(): Tile {
    return new Tile(
      this.page,
      STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.rundUmDenBerufsalltagSchmalTile
    );
  }

  get beruflicheIdeenUndImpulseSchmalTile(): Tile {
    return new Tile(
      this.page,
      STARTPAGE_PAGE.kacheln.weitereInteressanteBereiche.beruflicheIdeenUndImpulseSchmalTile
    );
  }

  get andereHilfreicheAnwendungenUeberschrift(): Locator {
    return this.page.locator(STARTPAGE_PAGE.kacheln.andereHilfreicheAnwendungen.sektionUeberschrift);
  }

  get serviceLink01Tile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.andereHilfreicheAnwendungen.serviceLink_01Tile);
  }

  get serviceLink02Tile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.andereHilfreicheAnwendungen.serviceLink_02Tile);
  }

  get serviceLink03Tile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.andereHilfreicheAnwendungen.serviceLink_03Tile);
  }

  get serviceLink04Tile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.andereHilfreicheAnwendungen.serviceLink_04Tile);
  }

  get unsereServicesUeberschrift(): Locator {
    return this.page.locator(STARTPAGE_PAGE.kacheln.unsereServices.sektionUeberschrift);
  }

  get berufsberatungTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.unsereServices.berufsberatungTile);
  }

  get azubiWeltTile(): Tile {
    return new Tile(this.page, STARTPAGE_PAGE.kacheln.unsereServices.azubiWeltTile);
  }

  get newsTile(): NewsTile {
    return new NewsTile(this.page, STARTPAGE_PAGE.kacheln.unsereServices.newsTile);
  }
}
