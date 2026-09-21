import { Locator, Page } from '@playwright/test';
import { CookieBanner } from './components/cookie-banner.component';
import { Tile } from './components/tile.component';

/**
 * NOTE (staged transcription): this locator map was transcribed from
 * screenshots. Everything below is faithful to what was captured, but
 * two gaps remain, marked inline:
 *  - the tail of `weitereInteressanteBereiche` (a "servicelinks" related
 *    section referencing `ba-berufetv-servicelinks//article` was visible
 *    at the very edge of a screenshot, but its full shape wasn't captured)
 *  - nothing else is known to be missing.
 * Do not treat this file as 100% ground truth until that gap is filled in.
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
      // TODO(transcription-gap): `startseite.spec.ts` confirms a further
      // tile here, `beruflicheIdeenUndImpulseSchmalTile` (kachel, titel,
      // titel_fuerReihenfolge, text, bild — same shape as its siblings
      // above), but its raw locator strings weren't captured. Add it here
      // once available; DO NOT guess the xpath/id strings.
    },
    // TODO(transcription-gap): a section (name unconfirmed, e.g.
    // `andereHilfreicheAnwendungen`) sits here with a `sektionUeberschrift`
    // and at least 4 `serviceLink_0{1..4}Tile` entries (each only `link` +
    // `text`, no `kachel`/`titel`/`bild`) — confirmed by
    // `startseite.spec.ts` usage of `serviceLink_01Tile` and by a
    // `link: 'xpath=(//ba-berufetv-servicelinks//article)[4]/a'` fragment
    // seen at a screenshot edge. Add it here once available.
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
 * Exposes `Tile` components for every kachel currently exercised by
 * `startseite.spec.ts` (the "@smoke 01" content test and the "@smoke 02"
 * order test, via `Tile.expectOrderLabel`). The tiles under
 * `unsereServices` and `andereHilfreicheAnwendungen` are intentionally
 * not wrapped yet — their shapes (multiple links, a "logo" instead of
 * "bild", link-only tiles with no separate title) don't fit the generic
 * `Tile` component, and `beruflicheIdeenUndImpulseSchmalTile` can't be
 * wrapped at all yet since its locators weren't captured (see TODO above).
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
}
