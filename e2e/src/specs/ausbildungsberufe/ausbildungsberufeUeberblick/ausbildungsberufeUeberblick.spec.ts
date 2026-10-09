import { expect, test } from '../../../fixtures/fixture';
import { AusbildungsberufePage } from '../../../pages/ausbildungsberufe.page';
import { OverallPage } from '../../../pages/overall.page';
import { ProduktionFertigungPage } from '../../../pages/ausbildungsberufe/produktion_fertigung.page';
import { StartPage } from '../../../pages/startpage.page';
import { ausbildungsUeberblickKachelnTestData } from './ausbildungsberufeUeberblick.data';
import { produktionFertigungKachelnTestData } from './produktionFertigung.data';

/**
 * Rewritten to the page-object-method API. Covers every test this file
 * had screenshots for: the two "oberste Ebene" (top-level) tests, the two
 * Landwirtschaft tests, and the two Produktion/Fertigung tests.
 *
 * STILL MISSING, not guessed here:
 *  - "@smoke ... Kachel Reihenfolge Prüfung Produktion, Fertigung" only had
 *    kachel01-04 of its order check captured (out of presumably 17) — the
 *    rest is marked with a TODO below instead of invented.
 *  - If the real file has a Kachel-Prüfung/Kachel-Reihenfolge-Prüfung pair
 *    for the other 13 Berufsfeld categories (bau_architektur_vermessung,
 *    metall_maschinenbau, ...), none of those were shown yet — send their
 *    screenshots (plus their .data.ts files) to continue this file.
 *  - `OVERALL_PAGE.ueberblicksfilm`'s selectors are still the SKELETON
 *    placeholders noted in overall.page.ts — replace those before running
 *    this against the real app.
 *  - The two `ueberblicksfilm.beschreibung` expected texts below are
 *    truncated at the source screenshot's right edge, same as several
 *    `.data.ts` entries — marked with the same TODO convention.
 */

test('@smoke Test Berufsuche Ausbildungsberuf: Kachel Prüfung oberste Ebene', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const ausbildungsberufePage = new AusbildungsberufePage(page);

  tamaraNamenHinzufuegen(['berufetv_GUI_BSU_AusbildungsberufeUeberblick_Kacheinhalt_01()']);
  beschreibungHinzufuegen('Prüft alle Kachelinhalte der übergeordneten Ausbildungsberufsfelder');

  // Kacheln
  await startPage.ausbildungsberufeTile.expectContent({
    titel: 'Ausbildungsberufe',
    text: 'Eine Berufsausbildung ist der Einstieg in die Welt der Berufe. Vielfältige Ausbildungen erleben und die Praxis entdecken…',
  });
  await overallPage.expectHeader({ titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' });
  await startPage.ausbildungsberufeTile.openLink();

  // Alle Kacheln Prüfen
  for (const [name, expected] of Object.entries(ausbildungsUeberblickKachelnTestData)) {
    await ausbildungsberufePage
      .tileByKey(name as Parameters<typeof ausbildungsberufePage.tileByKey>[0])
      .expectContent({
        titel: expected.titel,
        text: expected.text,
        image: { kind: 'background-url', filename: expected.bild },
        link: { hrefPattern: expected.linkHrefPattern },
      });
  }
});

test('@smoke Test Berufsuche Ausbildungsberuf: Kachel Reihenfolge Prüfung oberste Ebene', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);

  tamaraNamenHinzufuegen(['berufetv_GUI_BSU_AusbildungsberufeUeberblick_Kachelinhalt_02()']);
  beschreibungHinzufuegen('Prüft die Reihenfolge der Kacheln der übergeordneten Ausbildungsberufsfelder');

  await startPage.ausbildungsberufeTile.openLink();

  // Kacheln Reihenfolge prüfen
  const ORDER = [
    'Landwirtschaft, Natur, Umwelt',
    'Produktion, Fertigung',
    'Bau, Architektur, Vermessung',
    'Metall, Maschinenbau',
    'Elektro',
    'IT, Computer',
    'Naturwissenschaften',
    'Technik, Technologiefelder',
    'Wirtschaft, Verwaltung',
    'Verkehr, Logistik',
    'Dienstleistung',
    'Gesundheit',
    'Soziales, Pädagogik',
    'Gesellschafts-, Geisteswissenschaften',
    'Kunst, Kultur, Gestaltung',
    'Medien',
  ];
  for (const [i, titel] of ORDER.entries()) {
    await expect.soft(overallPage.kachelTitel(i + 1)).toHaveText(titel);
  }
  await expect.soft(overallPage.kachelContainer(17)).toBeHidden();
});

test('@acceptance Test Berufsuche Ausbildungsberuf: Kachel Prüfung Landwirtschaft, Natur, Umwelt', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const ausbildungsberufePage = new AusbildungsberufePage(page);

  tamaraNamenHinzufuegen([
    'berufetv_GUI_BSU_AusbildungsberufeUeberblick_LandwirtschaftNaturUmwelt_Kachelinhalt_01()',
  ]);
  beschreibungHinzufuegen('Prüft die Reihenfolge der Kacheln der übergeordneten Ausbildungsberufsfelder');

  await startPage.ausbildungsberufeTile.openLink();
  await ausbildungsberufePage.landwirtschaftTile.openLink();
  await overallPage.expectPageTitel('Ausbildungsberufe Landwirtschaft, Natur, Umwelt');

  // Kacheln prüfen
  // TODO: this category's own sub-page (LandwirtschaftPage) and its
  // .data.ts weren't sent yet — once they are, replace this with the same
  // tileByKey()-driven loop used for the other two categories below.
});

test('@smoke Test Berufsuche Ausbildungsberuf: Kachel Reihenfolge Prüfung Landwirtschaft, Natur, Umwelt', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
  linkJiraItems,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const ausbildungsberufePage = new AusbildungsberufePage(page);

  tamaraNamenHinzufuegen([
    'berufetv_GUI_BSU_AusbildungsberufeUeberblick_LandwirtschaftNaturUmwelt_Kachelinhalt_02()',
  ]);
  beschreibungHinzufuegen(
    'Prüft die Reihenfolge der Kacheln der Ausbildungsberufsfelder im Bereich Landwirtschaft, Natur und Umwelt" Überblicksfilm/Kachel'
  );
  linkJiraItems(['BERUFETV-119']);

  await startPage.ausbildungsberufeTile.openLink();
  await ausbildungsberufePage.landwirtschaftTile.openLink();

  await overallPage.ueberblicksfilm.expectDefaultState({
    ueberschrift: 'Landwirtschaft, Natur, Umwelt',
    beschreibung:
      'Rund um Landwirtschaft, Natur, Umwelt arbeitet man vor allem mit Tieren und Pflanzen oder trägt Verantwortung für deren Schutz. Es geht beisp' + // TODO: truncated after "...beisp"
      'Einen anderen Schwerpunkt stellt die Planung von Natur- und Umweltschutzmaßnahmen, die Überwachung der Entsorgung von Abfall und Abwasser o', // TODO: truncated after "...Abwasser o"
  });

  await expect.soft(overallPage.kachelTitel(1)).toHaveText('Berufe mit Pflanzen');
  await expect.soft(overallPage.kachelTitel(2)).toHaveText('Berufe mit Tieren');
  await expect.soft(overallPage.kachelTitel(3)).toHaveText('Berufe im Umwelt- und Naturschutz');
  await expect.soft(overallPage.kachelContainer(4)).toBeHidden();
});

test('@acceptance Test Berufsuche Ausbildungsberuf: Kachel Prüfung Produktion, Fertigung', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const ausbildungsberufePage = new AusbildungsberufePage(page);
  const produktionFertigungPage = new ProduktionFertigungPage(page);

  tamaraNamenHinzufuegen(['berufetv_GUI_BSU_AusbildungsberufeUeberblick_ProduktionFertigung_Kachelinhalt_01()']);
  beschreibungHinzufuegen('Prüft alle Kachelinhalte der Ausbildungsberufsfelder im Bereich Produktion Fertigung');

  await startPage.ausbildungsberufeTile.openLink();
  await ausbildungsberufePage.produktionFertigungTile.openLink();
  await overallPage.expectPageTitel('Ausbildungsberufe Produktion, Fertigung');

  // Kacheln prüfen
  for (const [name, expected] of Object.entries(produktionFertigungKachelnTestData)) {
    await produktionFertigungPage
      .tileByKey(name as Parameters<typeof produktionFertigungPage.tileByKey>[0])
      .expectContent({
        titel: expected.titel,
        text: expected.text,
        image: { kind: 'background-url', filename: expected.bild },
        link: { hrefPattern: expected.linkHrefPattern },
      });
  }

  // "Anzahl Filme" badge — not part of the .data.ts shape (kachelPruefung
  // never checked it either), asserted per tile. Note this re-checks each
  // tile's visibility too, as a side effect of expectContent()'s contract.
  await produktionFertigungPage.bergbauTile.expectContent({ anzahl: 'derzeit keine Filme' });
  await produktionFertigungPage.baustoffenUndNatursteinenTile.expectContent({ anzahl: '2 Filme vorhanden' });
  await produktionFertigungPage.edelsteinenTile.expectContent({ anzahl: '1 Film vorhanden' });
  await produktionFertigungPage.farbenLackeTile.expectContent({ anzahl: '6 Filme vorhanden' });
  await produktionFertigungPage.glasTile.expectContent({ anzahl: '2 Filme vorhanden' });
  await produktionFertigungPage.keramikTile.expectContent({ anzahl: '2 Filme vorhanden' });
  await produktionFertigungPage.kunststoffTile.expectContent({ anzahl: '5 Filme vorhanden' });
  await produktionFertigungPage.papierTile.expectContent({ anzahl: '2 Filme vorhanden' });
  await produktionFertigungPage.holzTile.expectContent({ anzahl: '9 Filme vorhanden' });
  await produktionFertigungPage.textillienTile.expectContent({ anzahl: '8 Filme vorhanden' });
  await produktionFertigungPage.bekleidungTile.expectContent({ anzahl: '4 Filme vorhanden' });
  await produktionFertigungPage.lederTile.expectContent({ anzahl: '2 Filme vorhanden' });
  await produktionFertigungPage.lebensmittelTile.expectContent({ anzahl: '9 Filme vorhanden' });
  await produktionFertigungPage.getraenkeTile.expectContent({ anzahl: '3 Filme vorhanden' });
  await produktionFertigungPage.musikinstrumentenbauTile.expectContent({ anzahl: '1 Film vorhanden' });
  await produktionFertigungPage.arbeitsvorbereitungTile.expectContent({ anzahl: '1 Film vorhanden' });
  await produktionFertigungPage.qualitaetssicherungTile.expectContent({ anzahl: '2 Filme vorhanden' });
});

test('@smoke Test Berufsuche Ausbildungsberuf: Kachel Reihenfolge Prüfung Produktion, Fertigung', async ({
  page,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
  linkJiraItems,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);
  const ausbildungsberufePage = new AusbildungsberufePage(page);

  tamaraNamenHinzufuegen(['berufetv_GUI_BSU_AusbildungsberufeUeberblick_ProduktionFertigung_Kachelinhalt_02()']);
  beschreibungHinzufuegen(
    'Prüft die Reihenfolgede Kachlen der Ausbildungsberufsfelder im Bereich Produktion Fertigung" Überblicksfilm/Kachel'
  );
  linkJiraItems(['BERUFETV-119']);

  await startPage.ausbildungsberufeTile.openLink();
  await ausbildungsberufePage.produktionFertigungTile.openLink();

  await overallPage.ueberblicksfilm.expectDefaultState({
    ueberschrift: 'Produktion, Fertigung',
    beschreibung:
      'Von Betonfertigteilen über Bekleidung oder Lebensmittel bis hin zu Musikinstrumenten: In der Produktion, Fertigung geht es um die Herstellung von Produkten aller Art. Man arbeitet mit Holz, Kunsts' + // TODO: truncated after "...Kunsts"
      'Die Aufgaben in der Produktion und Fertigung reichen von der Entwicklung und Arbeitsvorbereitung über die eigentliche Herstellung von Hand oder mithilfe großer Industrieanlagen bis hin zur Quali', // TODO: truncated after "...Quali"
  });

  await expect.soft(overallPage.kachelTitel(1)).toHaveText('Berufe im Bergbau');
  await expect.soft(overallPage.kachelTitel(2)).toHaveText('Berufe mit Baustoffen und Natursteinen');
  await expect.soft(overallPage.kachelTitel(3)).toHaveText('Berufe mit Edelsteinen');
  await expect.soft(overallPage.kachelTitel(4)).toHaveText('Berufe mit Farben und Lacken');
  // TODO: kachel05-17 (and whatever closes this test) weren't captured —
  // send the rest of this test's screenshot to complete it.
});
