import { Locator, Page, expect } from '@playwright/test';
import { Accordion } from './components/accordion.component';

/** Transcribed in full from screenshots of the real `newspage.page.ts` — no gaps. */
export const NEWS_PAGE = {
  url: /berufetv.*\/news$/,
  kacheln: {
    aktuelleMeldungen: {
      text: 'xpath=//*[@id="aktuell-0"]//article/div/p',
      datum: 'xpath=//*[@id="aktuell-0"]//article/span',
      titel: 'xpath=//*[@id="aktuell-0"]//article/h4',
      link: 'xpath=//*[@id="aktuell-0"]//article/a',
    },
    newsanzeige: {
      titel: 'xpath=//aside/H3',
      text: '//aside//P',
    },
    archiv: {
      newsarchiv_accordion_01: {
        button: '#accordion_Archiv12-2020_Link',
        datum: 'xpath=//*[@id="arch-12-2020-0"]//span',
        text: 'xpath=//*[@id="arch-12-2020-0"]//p',
        link: 'xpath=//*[@id="arch-12-2020-0"]//a',
      },
      newsarchiv_accordion_02: {
        button: '#accordion_Archiv11-2020_Link',
      },
    },
  },
} as const;

/**
 * Page object for the berufe.TV news page (`/berufetv/news`).
 *
 * `aktuelleMeldungen`/`newsanzeige` are exposed as plain `Locator` getters
 * rather than wrapped in a `Tile`: unlike the startseite kacheln, the
 * specs here check each field individually (a date-format regex, a lone
 * `toBeVisible()`, a CSS color check on `link`), never as one unified
 * "content" call — forcing them through `Tile.expectContent()` would add
 * ceremony without removing any real duplication.
 */
export class NewsPage {
  constructor(private readonly page: Page) {}

  async expectUrl(): Promise<void> {
    await expect(this.page).toHaveURL(NEWS_PAGE.url);
  }

  get aktuelleMeldungenText(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.aktuelleMeldungen.text);
  }

  get aktuelleMeldungenDatum(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.aktuelleMeldungen.datum);
  }

  get aktuelleMeldungenTitel(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.aktuelleMeldungen.titel);
  }

  get aktuelleMeldungenLink(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.aktuelleMeldungen.link);
  }

  get newsanzeigeTitel(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.newsanzeige.titel);
  }

  get newsanzeigeText(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.newsanzeige.text);
  }

  get archivAccordion01(): Accordion {
    return new Accordion(this.page, NEWS_PAGE.kacheln.archiv.newsarchiv_accordion_01.button);
  }

  get archivAccordion01Datum(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.archiv.newsarchiv_accordion_01.datum);
  }

  get archivAccordion01Text(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.archiv.newsarchiv_accordion_01.text);
  }

  get archivAccordion01Link(): Locator {
    return this.page.locator(NEWS_PAGE.kacheln.archiv.newsarchiv_accordion_01.link);
  }

  get archivAccordion02(): Accordion {
    return new Accordion(this.page, NEWS_PAGE.kacheln.archiv.newsarchiv_accordion_02.button);
  }
}
