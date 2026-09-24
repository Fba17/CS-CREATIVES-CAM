import { expect, test } from 'src/fixtures/fixture';
import { OverallPage } from 'src/pages/overall.page';
import { StartPage } from 'src/pages/startpage.page';
import { NewsPage } from 'src/pages/newspage.page';

/**
 * Fidelity note: both `beschreibungHinzufuegen` calls below are reporting-only
 * metadata (no effect on pass/fail) and were cut off at the source
 * screenshot's right edge — marked with a trailing TODO comment. Everything
 * else (locators, navigation, assertions) was fully visible and is
 * transcribed as-is, including two quirks preserved on purpose: a couple of
 * expected texts carry a leading space (` Startseite`, ` Newsanzeige`), and
 * the header-title check is asserted twice in a row in "@acceptance 02"
 * (looks like a copy-paste artifact in the source, kept rather than
 * silently deduplicated).
 */

test('@smoke 01. Test auf die Newsseite', async ({
  page,
  linkJiraItems,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const newsPage = new NewsPage(page);

  // PREPARE
  linkJiraItems(['BERUFETV-391']);
  tamaraNamenHinzufuegen(['BERUFETV_GUI_STA_Newsseite_01()']);
  beschreibungHinzufuegen(
    'Prüft die Newsunterseite zur Integration Landingpage. Newsunterseite - Über den Link "Alle News aufrufen" sowie über die erste und zweite News der NewsKachel springt man auf die Newsunterseite, diese' // TODO: cut off in the source screenshot — verify the full text against source.
  );

  await startPage.expectUrl({ soft: false });

  // Sprung auf Newsseite über den Link
  await startPage.newsTile.openAlleNews();

  // Prüfung des Headers, der URL sowie der Breadcrumb (samt Text auf Newsseite)
  await expect(newsPage.aktuelleMeldungenText).toBeVisible();
  await newsPage.expectUrl();
  await overallPage.expectHeader(
    { titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' },
    { soft: false }
  );
  await expect(overallPage.breadcrumbAt(1)).toHaveText(' Startseite');
  await expect(overallPage.breadcrumbAt(2, { keinLink: true })).toHaveText('News (aktuelle Seite)');

  // BERUFETV-244 Marginalspalte Newsanzeige
  await expect(newsPage.newsanzeigeTitel).toHaveText(' Newsanzeige');
  await expect(newsPage.newsanzeigeText).toHaveText(
    'An dieser Stelle werden interessante Neuigkeiten aus der Welt der Ausbildung, des Studiums und des Digitalen Lernens angezeigt. Eine Suche nach Newsinhalten wird aktuell nicht unterstützt.'
  );

  // Sprung zurück auf Startseite über die Breadcrumb
  await overallPage.breadcrumbAt(1).click();
  await startPage.expectUrl({ soft: false });
  await startPage.newsTile.expectVisible();

  // Sprung auf Newsseite über die zweite News
  await startPage.newsTile.openLink02();
  await expect(newsPage.aktuelleMeldungenText).toBeVisible();
  await expect(page).toHaveURL(/\/news#446$/);

  // Sprung zurück auf Startseite
  await page.goBack();
  await startPage.expectUrl({ soft: false });
  await startPage.newsTile.expectVisible();
  await expect(startPage.newsTile.link01).toBeVisible();

  // Sprung auf Newsseite über die erste News
  await startPage.newsTile.openLink01();
  await expect(newsPage.aktuelleMeldungenText).toBeVisible();
  await expect(page).toHaveURL(/\/news#465$/);
  await expect(newsPage.newsanzeigeText).toBeVisible();
});

test('@acceptance 02. Test auf die Newsseite', async ({
  page,
  linkJiraItems,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const newsPage = new NewsPage(page);

  // PREPARE
  linkJiraItems(['BERUFETV-391']);
  tamaraNamenHinzufuegen(['BERUFETV_GUI_STA_Newsseite_02']);
  beschreibungHinzufuegen(
    'Testfall prüft auf der Newsunterseite die Überschrift und die Subline ab dass Datum, Überschrift, Text, Link der zweiten News der aktuellen Meldungen vorhanden sind die Schriftfarbe des Links (rot) di' // TODO: cut off in the source screenshot — verify the full text against source.
  );

  await startPage.expectUrl({ soft: false });
  await startPage.newsTile.openAlleNews();
  await newsPage.expectUrl();
  await overallPage.expectHeader(
    { titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' },
    { soft: false }
  );

  // Elemente Kachel 1 vorhanden
  await expect(newsPage.aktuelleMeldungenDatum).toHaveText(/^\d{2}\.\d{2}\.\d{4}$/);
  await expect(newsPage.aktuelleMeldungenTitel).toBeVisible();
  await expect(newsPage.aktuelleMeldungenText).toBeVisible();
  await expect(newsPage.aktuelleMeldungenLink).toBeVisible();
  await expect(newsPage.aktuelleMeldungenLink).toHaveCSS('color', 'rgb(63, 72, 89)');

  // Archiv
  await overallPage.expectHeader(
    { titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' },
    { soft: false }
  );
  await expect(newsPage.archivAccordion01.button).toHaveText(/^Newsarchiv \d{2}\/\d{4}$/);

  // Prüfung Auf- und Zuklappen
  await newsPage.archivAccordion01.expectCollapsed();
  await newsPage.archivAccordion01.toggle();
  await newsPage.archivAccordion01.expectExpanded();

  // Prüfung erstes Element im Newsarchiv
  await expect(newsPage.archivAccordion01Datum).toBeVisible();
  await expect(newsPage.archivAccordion01Datum).toHaveText(/^\d{2}\.\d{2}\.\d{4}$/);
  await expect(newsPage.archivAccordion01Text).toBeVisible();
  await expect(newsPage.archivAccordion01Link).toBeVisible();

  await newsPage.archivAccordion02.toggle();
  await newsPage.archivAccordion02.expectExpanded(); // aufgeklappt

  await newsPage.archivAccordion01.toggle();
  await newsPage.archivAccordion01.expectCollapsed(); // zugeklappt
});
