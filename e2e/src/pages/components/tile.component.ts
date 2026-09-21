import { Locator, Page, expect } from '@playwright/test';

/**
 * Raw locator strings for one "Kachel" (content tile), as already defined
 * in the existing `*.page.ts` locator maps (e.g. `STARTPAGE_PAGE.kacheln...`).
 * Not every tile exposes every field:
 *  - `link` is absent on tiles without an outbound link
 *    (e.g. `willkommenInDeutschlandSchmalTile`, `alleFilmeA_ZSchmalTile`).
 *  - `titel`/`text`/`bild` are absent on tiles only ever checked for
 *    visibility/hidden state.
 */
export type TileLocators = {
  kachel: string;
  titel?: string;
  text?: string;
  link?: string;
  bild?: string;
};

/**
 * How to validate a tile's image. berufe.TV mixes two implementations:
 * a `<div style="background-image:...">` ("large" filmkategorien tiles)
 * and a plain `<img src="...">` ("schmal" tiles).
 */
export type ImageExpectation =
  | { kind: 'background'; pattern: RegExp }
  | { kind: 'src'; pattern: RegExp };

export type TileContentExpectation = {
  titel?: string;
  text?: string;
  hrefPattern?: RegExp;
  image?: ImageExpectation;
};

/**
 * Component object for a "Kachel" (content tile), repeated dozens of
 * times across berufe.TV pages. Replaces the copy-pasted 4-5 line
 * assertion block that used to live in every spec with one method call.
 *
 * Single Responsibility: this class only knows how to assert a tile's
 * own visible state/content — it has no opinion on which page it lives
 * on or what the surrounding layout looks like.
 */
export class Tile {
  constructor(
    private readonly page: Page,
    private readonly locators: TileLocators
  ) {}

  get kachel(): Locator {
    return this.page.locator(this.locators.kachel);
  }

  async expectVisible(): Promise<void> {
    await expect.soft(this.kachel).toBeVisible();
  }

  async expectHidden(): Promise<void> {
    await expect.soft(this.kachel).toBeHidden();
  }

  /**
   * Verifies the tile is visible plus any of title/text/link/image the
   * caller cares about. Only asserts the fields actually passed in, so
   * callers stay terse for tiles that don't need every check.
   */
  async expectContent(content: TileContentExpectation): Promise<void> {
    await this.expectVisible();

    if (content.titel !== undefined) {
      if (!this.locators.titel) {
        throw new Error('Tile has no "titel" locator configured');
      }
      await expect.soft(this.page.locator(this.locators.titel)).toHaveText(content.titel);
    }

    if (content.text !== undefined) {
      if (!this.locators.text) {
        throw new Error('Tile has no "text" locator configured');
      }
      await expect.soft(this.page.locator(this.locators.text)).toHaveText(content.text);
    }

    if (content.hrefPattern) {
      if (!this.locators.link) {
        throw new Error('Tile has no "link" locator configured');
      }
      await expect
        .soft(this.page.locator(this.locators.link))
        .toHaveAttribute('href', content.hrefPattern);
    }

    if (content.image) {
      if (!this.locators.bild) {
        throw new Error('Tile has no "bild" locator configured');
      }
      const image = this.page.locator(this.locators.bild);
      const attribute = content.image.kind === 'background' ? 'style' : 'src';
      await expect.soft(image).toHaveAttribute(attribute, content.image.pattern);
    }
  }
}
