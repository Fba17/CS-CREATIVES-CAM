import { Page, expect } from '@playwright/test';

export type UeberblicksfilmLocators = {
  kachel: string;
  player: string;
  thumbnail: string;
  videoTag: string;
  videoDauer: string;
  ueberschrift: string;
  beschreibung: string;
};

/**
 * Component object for the "Überblicksfilm" widget shown at the top of
 * every Berufsfeld category page (an intro video that hasn't started
 * playing yet: a thumbnail is visible, the player/video tag/duration
 * aren't, plus a heading + description for that category).
 *
 * Confirmed by `ausbildungsberufeUeberblick.spec.ts` usage on the
 * Landwirtschaft and Produktion/Fertigung category pages — same 7 checks
 * both times, only `ueberschrift`/`beschreibung` differ per category.
 */
export class Ueberblicksfilm {
  constructor(
    private readonly page: Page,
    private readonly locators: UeberblicksfilmLocators
  ) {}

  async expectDefaultState(content: { ueberschrift: string; beschreibung: string }): Promise<void> {
    await expect.soft(this.page.locator(this.locators.kachel)).toBeVisible();
    await expect.soft(this.page.locator(this.locators.player)).toBeHidden();
    await expect.soft(this.page.locator(this.locators.thumbnail)).toBeVisible();
    await expect.soft(this.page.locator(this.locators.videoTag)).toBeHidden();
    await expect.soft(this.page.locator(this.locators.videoDauer)).toBeHidden();
    await expect.soft(this.page.locator(this.locators.ueberschrift)).toHaveText(content.ueberschrift);
    await expect.soft(this.page.locator(this.locators.beschreibung)).toHaveText(content.beschreibung);
  }
}
