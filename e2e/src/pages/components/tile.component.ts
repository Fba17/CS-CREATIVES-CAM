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
  /** Absolute-position locator used only by order/"Reihenfolge" checks. */
  titel_fuerReihenfolge?: string;
  /** A logo image checked only via a `title` attribute (e.g. azubiWeltTile). */
  logo?: string;
};

/**
 * How to validate a tile's image. berufe.TV mixes two implementations:
 * a `<div style="background-image:...">` ("large" filmkategorien tiles)
 * and a plain `<img src="...">` ("schmal" tiles).
 */
export type ImageExpectation =
  | { kind: 'background'; pattern: RegExp }
  | { kind: 'src'; pattern: RegExp };

/**
 * A tile's `link` is checked on up to 3 independent facets across the
 * existing specs: its visible text, its `href`, and sometimes a `title`
 * attribute (used for the "opens in a new tab" hint). All optional so
 * callers only assert what they care about.
 */
export type LinkExpectation = {
  text?: string;
  hrefPattern?: RegExp;
  title?: string;
};

export type TileContentExpectation = {
  titel?: string;
  text?: string;
  link?: LinkExpectation;
  image?: ImageExpectation;
  logoTitle?: string;
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

    if (content.link) {
      if (!this.locators.link) {
        throw new Error('Tile has no "link" locator configured');
      }
      const link = this.page.locator(this.locators.link);
      if (content.link.text !== undefined) {
        await expect.soft(link).toHaveText(content.link.text);
      }
      if (content.link.hrefPattern) {
        await expect.soft(link).toHaveAttribute('href', content.link.hrefPattern);
      }
      if (content.link.title !== undefined) {
        await expect.soft(link).toHaveAttribute('title', content.link.title);
      }
    }

    if (content.image) {
      if (!this.locators.bild) {
        throw new Error('Tile has no "bild" locator configured');
      }
      const image = this.page.locator(this.locators.bild);
      const attribute = content.image.kind === 'background' ? 'style' : 'src';
      await expect.soft(image).toHaveAttribute(attribute, content.image.pattern);
    }

    if (content.logoTitle !== undefined) {
      if (!this.locators.logo) {
        throw new Error('Tile has no "logo" locator configured');
      }
      await expect.soft(this.page.locator(this.locators.logo)).toHaveAttribute('title', content.logoTitle);
    }
  }

  /**
   * Verifies this tile's rendering position via `titel_fuerReihenfolge`
   * (a locator scoped to an absolute index among all tiles of its group,
   * as opposed to `titel` which is scoped to this tile's own container).
   *
   * Uses a hard `expect` (not `.soft`), matching the existing
   * "Reihenfolge" (order) test, which fails fast rather than collecting
   * every mismatch — unlike the content checks above.
   */
  async expectOrderLabel(text: string): Promise<void> {
    if (!this.locators.titel_fuerReihenfolge) {
      throw new Error('Tile has no "titel_fuerReihenfolge" locator configured');
    }
    await expect(this.page.locator(this.locators.titel_fuerReihenfolge)).toHaveText(text);
  }
}
