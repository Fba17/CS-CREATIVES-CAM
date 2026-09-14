import { Locator, Page, expect } from '@playwright/test';
import { CookieBanner } from './CookieBanner';

/**
 * Page object for the berufe.TV start page
 * (https://web.arbeitsagentur.de/berufetv/start).
 *
 * TODO: several locators below are educated, resilient guesses (ARIA
 * roles / visible text) rather than verified selectors, since outbound
 * access to web.arbeitsagentur.de was blocked from the authoring
 * environment. Confirm against the live DOM (e.g. via
 * `npx playwright codegen`) and tighten the locators where noted.
 */
export class BerufeTvStartPage {
  static readonly PATH = '/berufetv/start';

  readonly cookieBanner: CookieBanner;

  readonly header: Locator;
  readonly heading: Locator;
  readonly searchToggle: Locator;
  readonly searchBox: Locator;
  readonly videoCards: Locator;

  constructor(private readonly page: Page) {
    this.cookieBanner = new CookieBanner(page);

    this.header = page.locator('header');
    this.heading = page.getByRole('heading', { level: 1 });
    this.searchToggle = page.getByRole('button', { name: /suche/i });
    this.searchBox = page
      .getByRole('searchbox')
      .or(page.getByPlaceholder(/suche/i));
    // TODO: confirm the real card/tile selector for videos on the start
    // page; this assumes each entry is a link containing a thumbnail image.
    this.videoCards = page
      .getByRole('link')
      .filter({ has: page.locator('img') });
  }

  async goto(): Promise<void> {
    await this.page.goto(BerufeTvStartPage.PATH);
    await this.cookieBanner.acceptIfPresent();
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/berufe ?\.?tv/i);
    await expect(this.header).toBeVisible();
    await expect(this.heading).toBeVisible();
    await expect(this.searchBox.or(this.searchToggle)).toBeVisible();
  }

  /** Opens the search (if it needs expanding first) and submits a query. */
  async search(term: string): Promise<void> {
    if (await this.searchToggle.isVisible().catch(() => false)) {
      await this.searchToggle.click();
    }
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.fill(term);
    await this.searchBox.press('Enter');
  }

  /** Opens the nth video card (0-based) from the start page listing. */
  async openVideoCard(index = 0): Promise<void> {
    const card = this.videoCards.nth(index);
    await expect(card).toBeVisible();
    await card.click();
  }
}
