import { Locator, Page, expect } from '@playwright/test';

/**
 * Generic accordion toggle component (a `button[aria-expanded]` that
 * shows/hides content). First seen on the news page's archive, but the
 * pattern is generic enough to reuse anywhere else an accordion shows up.
 */
export class Accordion {
  constructor(
    private readonly page: Page,
    private readonly buttonSelector: string
  ) {}

  get button(): Locator {
    return this.page.locator(this.buttonSelector);
  }

  async toggle(): Promise<void> {
    await this.button.click();
  }

  async expectCollapsed(): Promise<void> {
    await expect(this.button).toHaveAttribute('aria-expanded', 'false');
  }

  async expectExpanded(): Promise<void> {
    await expect(this.button).toHaveAttribute('aria-expanded', 'true');
  }
}
