import { Page } from '@playwright/test';

/**
 * Component object for the cookie / privacy consent banner shown on
 * berufe.TV.
 *
 * TODO: the exact button label could not be verified from this environment
 * (outbound access to web.arbeitsagentur.de was blocked). Confirm the real
 * label in a browser and trim `candidateLabels` down to just that one entry.
 */
export class CookieBanner {
  private readonly candidateLabels = [
    'Alle akzeptieren',
    'Alle Cookies akzeptieren',
    'Auswahl bestätigen',
    'Akzeptieren',
    'Zustimmen',
    'Einverstanden',
  ];

  constructor(private readonly page: Page) {}

  /**
   * Dismisses the banner if it is shown; does nothing (and does not fail)
   * if no known banner appears.
   */
  async acceptIfPresent(): Promise<void> {
    for (const label of this.candidateLabels) {
      const button = this.page.getByRole('button', { name: label });
      try {
        if (await button.isVisible({ timeout: 2_000 })) {
          await button.click();
          return;
        }
      } catch {
        // Button not present with this label, try the next candidate.
      }
    }
  }
}
