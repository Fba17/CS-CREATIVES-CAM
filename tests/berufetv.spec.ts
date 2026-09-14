import { test, expect } from '@playwright/test';
import { acceptCookies } from './helpers';

/**
 * Test suite for berufe.TV (https://web.arbeitsagentur.de/berufetv/start),
 * the video portal of the German Bundesagentur für Arbeit.
 *
 * NOTE: These tests were authored without live access to the target site
 * from the authoring environment (outbound network access to
 * web.arbeitsagentur.de was blocked). Selectors were chosen to be as
 * resilient as possible (ARIA roles, visible text, generic structure),
 * but spots that need confirming against the real DOM are marked with
 * `TODO`. Run the suite once, use `npx playwright codegen` or the trace
 * viewer / UI mode against the real page to correct any TODOs, then
 * remove this note.
 */

const START_PATH = '/berufetv/start';

test.describe('berufe.TV – Startseite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(START_PATH);
    await acceptCookies(page);
  });

  test('Seite lädt und zeigt die zentralen Elemente', async ({ page }) => {
    // Basic smoke assertions: the page responds, has the expected title
    // and its main landmarks are present.
    await expect(page).toHaveTitle(/berufe ?\.?tv/i);

    // TODO: confirm the exact header/logo locator — currently assumes a
    // <header> landmark exists on the page.
    await expect(page.locator('header')).toBeVisible();

    // TODO: confirm the exact heading text shown on the start page.
    await expect(
      page.getByRole('heading', { level: 1 })
    ).toBeVisible();

    // The entry point to the site's search should be reachable from the
    // start page (icon button, expandable search bar, or dedicated field).
    await expect(
      page
        .getByRole('searchbox')
        .or(page.getByRole('button', { name: /suche/i }))
    ).toBeVisible();
  });

  test('Suche liefert Ergebnisse zu einem Suchbegriff', async ({ page }) => {
    const searchTerm = 'Mechatroniker';

    // TODO: on berufe.TV the search may be a button that first expands an
    // input field. Try that path, then fall back to a directly visible
    // search box.
    const searchToggle = page.getByRole('button', { name: /suche/i });
    if (await searchToggle.isVisible().catch(() => false)) {
      await searchToggle.click();
    }

    const searchBox = page
      .getByRole('searchbox')
      .or(page.getByPlaceholder(/suche/i));
    await expect(searchBox).toBeVisible();
    await searchBox.fill(searchTerm);
    await searchBox.press('Enter');

    // TODO: confirm the results container selector. This assumes each
    // result is rendered as a link or article containing the search term
    // (case-insensitively) or is simply present in a results list.
    const results = page.getByRole('list').filter({ hasText: /./ }).first();
    await expect(results.or(page.locator('body'))).toBeVisible();

    // At minimum, expect at least one clickable result related to the
    // search to be rendered on the page.
    await expect(
      page.getByRole('link', { name: new RegExp(searchTerm, 'i') }).first()
    ).toBeVisible({ timeout: 10_000 });
  });

  test('Ein Video aus der Liste lässt sich öffnen und abspielen', async ({
    page,
  }) => {
    // TODO: confirm the card/tile selector for videos on the start page.
    // This assumes video entries are rendered as links or articles that
    // contain a "play" affordance.
    const firstVideoCard = page
      .getByRole('link')
      .filter({ has: page.locator('img') })
      .first();

    await expect(firstVideoCard).toBeVisible();
    await firstVideoCard.click();

    // Opening a video is expected to either navigate to a detail page with
    // a <video> element, or open a player overlay/modal.
    const player = page.locator('video');
    await expect(player).toBeVisible({ timeout: 15_000 });

    // Try to start playback and verify the player leaves the paused state.
    // TODO: confirm whether a dedicated "Play" button must be clicked
    // first, or whether the <video> element is directly controllable.
    const playButton = page.getByRole('button', { name: /play|abspielen/i });
    if (await playButton.isVisible().catch(() => false)) {
      await playButton.click();
    } else {
      await player.evaluate((el: HTMLVideoElement) => el.play());
    }

    await expect
      .poll(async () => player.evaluate((el: HTMLVideoElement) => el.paused))
      .toBe(false);
  });
});
