import { test, expect } from '@playwright/test';
import { BerufeTvStartPage } from '../pages/BerufeTvStartPage';
import { VideoPlayer } from '../pages/VideoPlayer';

/**
 * Test suite for berufe.TV (https://web.arbeitsagentur.de/berufetv/start),
 * the video portal of the German Bundesagentur für Arbeit.
 *
 * Page objects live under `pages/`. See `pages/BerufeTvStartPage.ts` and
 * `pages/VideoPlayer.ts` for the `TODO` markers on locators that need
 * confirming against the live DOM (outbound access to
 * web.arbeitsagentur.de was blocked in the authoring environment).
 */
test.describe('berufe.TV – Startseite', () => {
  let startPage: BerufeTvStartPage;

  test.beforeEach(async ({ page }) => {
    startPage = new BerufeTvStartPage(page);
    await startPage.goto();
  });

  test('Seite lädt und zeigt die zentralen Elemente', async () => {
    await startPage.expectLoaded();
  });

  test('Suche liefert Ergebnisse zu einem Suchbegriff', async ({ page }) => {
    const searchTerm = 'Mechatroniker';

    await startPage.search(searchTerm);

    await expect(
      page.getByRole('link', { name: new RegExp(searchTerm, 'i') }).first()
    ).toBeVisible({ timeout: 10_000 });
  });

  test('Ein Video aus der Liste lässt sich öffnen und abspielen', async ({
    page,
  }) => {
    await startPage.openVideoCard(0);

    const player = new VideoPlayer(page);
    await player.waitUntilVisible();
    await player.play();
    await player.expectPlaying();
  });
});
