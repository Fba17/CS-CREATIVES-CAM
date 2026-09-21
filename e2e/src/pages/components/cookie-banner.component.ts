import { Page, expect } from '@playwright/test';

/**
 * Component object for the cookie consent banner shown on first visit.
 *
 * Takes its testid as a constructor argument rather than importing a
 * locator map itself, so it stays reusable from any page that shows the
 * banner (currently only the start page fixture) without depending on
 * `startpage.page.ts` (avoids a circular import: that file will hand
 * this component its own `STARTPAGE_PAGE.cookiesDisclaimer` testid).
 */
export class CookieBanner {
  constructor(
    private readonly page: Page,
    private readonly acceptAllTestId: string
  ) {}

  private get acceptAllButton() {
    return this.page.getByTestId(this.acceptAllTestId);
  }

  /**
   * Accepts all cookies if the banner appears within 10s. Preserves the
   * original fixture behaviour: a hard assertion that the banner shows up
   * at all (fails the test if it never does), then a click + wait for it
   * to disappear.
   */
  async acceptAll(): Promise<void> {
    await expect(this.acceptAllButton).toBeVisible({ timeout: 10_000 });

    if (await this.acceptAllButton.isVisible()) {
      await this.acceptAllButton.click();
      await this.acceptAllButton.waitFor({ state: 'hidden' });
    }
  }
}
