import { Page, expect } from '@playwright/test';

/**
 * Locators for the "Unsere Services" news tile — structurally different
 * from the generic `Tile` (a numbered list of news links instead of one
 * `link`), so it gets its own small component rather than being forced
 * into `Tile`'s shape.
 */
export type NewsTileLocators = {
  kachel: string;
  titel: string;
  text: string;
  link_01: string;
  link_02: string;
  link_03: string;
  link_AlleNews: string;
};

export type NewsLinkExpectation = { text: string } | { hidden: true };

export type NewsTileContentExpectation = {
  titel: string;
  text: string;
  link_01: NewsLinkExpectation;
  link_02: NewsLinkExpectation;
  link_03: NewsLinkExpectation;
  alleNews: { text: string; title: string };
};

export class NewsTile {
  constructor(
    private readonly page: Page,
    private readonly locators: NewsTileLocators
  ) {}

  private async expectNewsLink(selector: string, expectation: NewsLinkExpectation): Promise<void> {
    const link = this.page.locator(selector);
    if ('hidden' in expectation) {
      await expect.soft(link).toBeHidden();
    } else {
      await expect.soft(link).toHaveText(expectation.text);
    }
  }

  async expectContent(content: NewsTileContentExpectation): Promise<void> {
    await expect.soft(this.page.locator(this.locators.kachel)).toBeVisible();
    await expect.soft(this.page.locator(this.locators.titel)).toHaveText(content.titel);
    await expect.soft(this.page.locator(this.locators.text)).toHaveText(content.text);

    await this.expectNewsLink(this.locators.link_01, content.link_01);
    await this.expectNewsLink(this.locators.link_02, content.link_02);
    await this.expectNewsLink(this.locators.link_03, content.link_03);

    const alleNews = this.page.locator(this.locators.link_AlleNews);
    await expect.soft(alleNews).toHaveText(content.alleNews.text);
    await expect.soft(alleNews).toHaveAttribute('title', content.alleNews.title);
  }
}
