import { Locator, Page, expect } from '@playwright/test';

/**
 * Component object for the video player that opens after selecting a
 * video on berufe.TV (either as a detail page or an overlay/modal).
 *
 * TODO: confirm whether a dedicated "Play" button must be clicked before
 * playback starts, or whether the <video> element auto-plays / is directly
 * controllable — verified assumptions below could not be checked live.
 */
export class VideoPlayer {
  readonly video: Locator;
  readonly playButton: Locator;

  constructor(private readonly page: Page) {
    this.video = page.locator('video');
    this.playButton = page.getByRole('button', { name: /play|abspielen/i });
  }

  async waitUntilVisible(timeout = 15_000): Promise<void> {
    await expect(this.video).toBeVisible({ timeout });
  }

  async play(): Promise<void> {
    if (await this.playButton.isVisible().catch(() => false)) {
      await this.playButton.click();
    } else {
      await this.video.evaluate((el: HTMLVideoElement) => el.play());
    }
  }

  async expectPlaying(): Promise<void> {
    await expect
      .poll(async () =>
        this.video.evaluate((el: HTMLVideoElement) => el.paused)
      )
      .toBe(false);
  }
}
