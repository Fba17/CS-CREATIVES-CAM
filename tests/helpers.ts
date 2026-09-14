import { Page } from '@playwright/test';

/**
 * Dismisses the cookie / privacy consent banner if it appears.
 *
 * TODO: berufe.TV showed a consent overlay at the time this suite was written,
 * but its exact button label could not be verified from this environment
 * (outbound access to web.arbeitsagentur.de was blocked). Confirm the real
 * label in a browser and trim the list below to just that one entry.
 */
export async function acceptCookies(page: Page): Promise<void> {
  const candidateLabels = [
    'Alle akzeptieren',
    'Alle Cookies akzeptieren',
    'Auswahl bestätigen',
    'Akzeptieren',
    'Zustimmen',
    'Einverstanden',
  ];

  for (const label of candidateLabels) {
    const button = page.getByRole('button', { name: label });
    try {
      if (await button.isVisible({ timeout: 2_000 })) {
        await button.click();
        return;
      }
    } catch {
      // Button not present with this label, try the next candidate.
    }
  }
  // If no known banner shows up, proceed without failing the test —
  // the consent state may already be persisted or the banner may not
  // appear in this test run.
}
