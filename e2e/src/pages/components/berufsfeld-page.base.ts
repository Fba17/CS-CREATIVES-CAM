import { Page, expect } from '@playwright/test';
import { Tile, TileLocators } from './tile.component';

/**
 * Base class for the many near-identical "Berufsfeld" category pages
 * under /berufetv/ausbildungsberufe/<kategorie> (Medien, Gesundheit,
 * Elektro, IT & Computer, ...). Each of these pages is just a named set
 * of Tiles sharing the same kachel/titel/text/link/bild/anzahl shape and
 * `BA-BUB-KACHEL` xpath pattern — only `expectUrl()` is common behavior,
 * factored out here so each concrete page only has to add its own named
 * Tile getters.
 */
export abstract class BerufsfeldPage {
  constructor(
    protected readonly page: Page,
    private readonly url: RegExp
  ) {}

  async expectUrl(): Promise<void> {
    await expect(this.page).toHaveURL(this.url);
  }

  protected tile(locators: TileLocators): Tile {
    return new Tile(this.page, locators);
  }
}
