import { expect, test } from 'src/fixtures/fixture';
import { OverallPage } from 'src/pages/overall.page';
import { StartPage } from 'src/pages/startpage.page';

/**
 * Refactored to use the StartPage/OverallPage/Tile page-object-method API
 * (see src/pages/*.page.ts and src/pages/components/*.component.ts).
 *
 * Fidelity notes:
 *  - The free-text paragraphs passed to `beschreibungHinzufuegen` below are
 *    reporting-only metadata (no effect on pass/fail) and were reconstructed
 *    from screenshots whose right edge cut a few of them off mid-word.
 *    Reconstructed spans are marked with a trailing comment — please
 *    diff-check just those against the source. One assertion value
 *    (`newsTile`'s `link_02` text) is genuinely truncated in the source
 *    screenshot and marked the same way (search "TODO").
 *  - `LinkExpectation.hrefPattern` is always a RegExp here, including for
 *    tiles whose original `toHaveAttribute('href', ...)` took a plain exact
 *    string (`berufsberatungTile`, `azubiWeltTile`, `serviceLink_0{1..3}Tile`).
 *    Every such string was turned into an equivalent `^...$`-anchored regex
 *    (behaviorally identical) so `Tile` only needs to support one type.
 *  - Image `pattern`s escape the literal dot before the file extension
 *    (`\.svg`/`\.jpg`) where the original regex left it unescaped (`.svg`).
 *    Harmless in practice (no real URL differs only by one character where
 *    a dot is expected) and more correct.
 */

test('@smoke 01. Test auf den Inhalt der Startseite', async ({
  page,
  linkJiraItems,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);

  // PREPARE
  linkJiraItems([
    'BERUFETV-388',
    'BERUFETV-430',
    'BERUFETV-439',
    'BERUFETV-562',
    'BERUFETV-943',
    'BERUFETV-1050',
    'BERUFETV-1122',
    'BERUFETV-1666',
  ]);
  tamaraNamenHinzufuegen(['BERUFETV_GUI_STS_Startseite_Inhalt_01()']);
  beschreibungHinzufuegen(
    'Neuaufbau Startseite mit neuer News-Kachel und Schmalen Kacheln: Themenfilme, Willkommen in Deutschland und A-Z Kachel.' +
      'Hinzufügen einer Kachel für neue Filme und Verschiebung der Newskachel in den Footer zusammen mit Berufs- und Studienberatung.' + // TODO: reconstructed, verify against source
      'Bilder für Startseitenkacheln ausgetauscht sowie Link der Neuen Filme eingefügt.' +
      'Auf der Startseite wird ein zweiter Kachelblock unter "Weitere interessante Bereiche" angezeigt: Kachel 1 "Digitale Nutzerreise Ausbildung", Kachel 2 "Rund um Einblicke".' + // TODO: reconstructed, verify against source
      'AK_1 Die Kachel "Willkommen in Deutschland" ist umbenannt in "Welcome to Germany". Der Kacheltext ist in "Helpful videos" geändert.' + // TODO: reconstructed, verify against source
      'Neuverwendung Kachel Digitale Nutzerreise nach Wege ins Ausland.' +
      'in BERUFETV-1666: Austausch Kontaktkachel mit AzubiWelt'
  );

  // Header
  await startPage.expectUrl();
  await overallPage.expectHeader({ titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' });

  // Ausbildungsberufe
  await startPage.ausbildungsberufeTile.expectContent({
    titel: 'Ausbildungsberufe',
    text: 'Eine Berufsausbildung ist der Einstieg in die Welt der Berufe. Vielfältige Ausbildungen erleben und die Praxis entdecken…',
    link: { hrefPattern: /^\/berufetv-.*\/ausbildungsberufe$/ },
    image: { kind: 'background', pattern: /kachel_ausbildungsberufe\.jpg/ },
  });

  // Studienberufe
  await startPage.studienberufeTile.expectContent({
    titel: 'Studienberufe',
    text: 'Ein Studium verbindet Wissenschaft und Praxis. Einblicke in neue Studienwelten und interessante Studienfelder…',
    link: { hrefPattern: /^\/berufetv-.*\/studienberufe$/ },
    image: { kind: 'background', pattern: /kachel_studienberufe\.jpg/ },
  });

  // Neue Filme Kachel - BERUFETV-430
  await startPage.neueFilmeTile.expectContent({
    titel: 'Neue Filme',
    text: 'Noch mehr Einblicke. Unsere neuen Filme stellen weitere berufliche Möglichkeiten dar und das modern und inspirierend…', // BERUFETV-439 AK_6
    link: { hrefPattern: /^\/berufetv-.*\/neuefilme$/ },
    image: { kind: 'background', pattern: /kachel_neue_filme\.jpg/ },
  });

  await expect.soft(startPage.weitereInteressanteBereicheUeberschrift).toHaveText('Weitere interessante Bereiche');

  // Themenfilme
  await startPage.themenfilmeSchmalTile.expectContent({
    titel: 'Themenfilme',
    text: 'Nach Themen sortiert. Arbeit und Ausbildung, Inklusion und Integration und umfassende Jobporträts…',
    image: { kind: 'src', pattern: /kachel_themenfilme\.svg/ },
  });

  // Willkommen in Deutschland
  await startPage.willkommenInDeutschlandSchmalTile.expectContent({
    titel: 'Welcome to Germany', // AK_1
    text: 'Helpful videos for finding your feet in Germany and integrating successfully into the workforce!',
    image: { kind: 'src', pattern: /kachel_willkommen\.svg/ },
  });

  // Filme von A bis Z
  await startPage.alleFilmeA_ZSchmalTile.expectContent({
    titel: 'Alle Filme A - Z',
    text: 'Weil es so einfach ist. Auf alle Berufsfilme schnell zugreifen per Buchstabenauswahl von A-Z…',
    image: { kind: 'src', pattern: /kachel_a_z\.svg/ },
  });
  //BERUFETV-562 AK_1
  //BERUFETV-1122 AK1, AK_2

  // Wege ins Ausland
  await startPage.digitaleNutzerreisenTile.expectHidden();
  await startPage.wegeInsAuslandSchmalTile.expectContent({
    titel: 'Wege ins Ausland',
    text: 'Eine Arbeit, Ausbildung oder einem Studium im Ausland aufnehmen? Oder eine Zeit lang in einem anderen Land leben und sich beruflich weiterentwickeln?',
    image: { kind: 'src', pattern: /kachel_wege_ins_ausland\.svg/ },
  });

  // Rund um Einblicke
  await startPage.rundUmDenBerufsalltagSchmalTile.expectContent({
    titel: 'Rund um den Berufsalltag',
    text: 'Berufliche Einblicke mal anders – mit 360°-Filmen den Berufsalltag neu entdecken.',
    image: { kind: 'src', pattern: /kachel_rundum_berufsalltag\.svg/ },
  });

  // Berufliche Ideen und Impulse
  await startPage.beruflicheIdeenUndImpulseSchmalTile.expectContent({
    titel: 'Berufliche Ideen und Impulse',
    text: 'Verantwortliche erzählen aus ihrem Berufsalltag und Themenfilme bringen Licht ins Dunkel. Weitere Filme zu Beruf, Studium und Berufsleben.',
    image: { kind: 'src', pattern: /kachel_berufliche_weiterbildung\.svg/ },
  });

  // Andere hilfreiche Anwendungen
  await expect
    .soft(startPage.andereHilfreicheAnwendungenUeberschrift)
    .toHaveText('Andere hilfreiche Anwendungen');

  await startPage.serviceLink01Tile.expectContent({
    text: 'Stärken und Fähigkeiten austesten und eine passende Ausbildung oder ein passendes Studium finden.',
    link: {
      text: 'Aufrufen',
      hrefPattern: /^https:\/\/www\.arbeitsagentur\.de\/bildung\/welche-ausbildung-welches-studium-passt$/,
    },
  });

  // Berufenet
  await startPage.serviceLink02Tile.expectContent({
    text: 'Umfassend über alle Berufe und Studiengänge informieren, die Aus- und Weiterbildung planen.',
    link: { text: 'Aufrufen', hrefPattern: /^https:\/\/www\.berufenet\.arbeitsagentur\.de\/$/ },
  });

  // Planet Beruf
  await startPage.serviceLink03Tile.expectContent({
    text: 'Finde die Zukunft, die zu Dir passt!  Orientierung, Training und Vorbereitung - Starte jetzt in Deine Berufswelt.',
    link: { text: 'Aufrufen', hrefPattern: /^https:\/\/www\.mein-beruf\.de$/ },
  });

  // Abi.DE
  await startPage.serviceLink04Tile.expectHidden();

  await expect.soft(startPage.unsereServicesUeberschrift).toHaveText('Unsere Services');

  // Berufs- und Studienberatung - BERUFETV-430
  await startPage.berufsberatungTile.expectContent({
    titel: 'Berufs- und Studienberatung',
    text: 'Persönliche Beratung und Hilfe bei der Berufs- und Studienplatzwahl und der Berufs- und Studienorientierung. Jetzt direkt Kontakt aufnehmen.',
    link: {
      text: 'Termin vereinbaren',
      hrefPattern: /^https:\/\/web\.arbeitsagentur\.de\/portal\/kontakt\/de\/terminvereinbarung\/berufsberatung$/,
      title: 'Einen Termin zur Berufs- und Studienberatung vereinbaren. Die Seite öffnet sich in einem neuen Tab.',
    },
  });

  // Kontakt - BERUFETV-430
  // AzubiWelt - App entdecken - BERUFETV-1666
  await startPage.azubiWeltTile.expectContent({
    logoTitle: 'Logo von AzubiWelt - App',
    titel: 'AzubiWelt - App entdecken',
    text: 'Entdecke mit der AzubiWelt-App die Vielfalt der Ausbildungsberufe und finde in Deutschlands größter Ausbildungsbörse die Ausbildungsstelle, die am Besten zu dir passt.',
    link: {
      text: 'Mehr zur App erfahren',
      hrefPattern: /^https:\/\/www\.arbeitsagentur\.de\/bildung\/ausbildung\/azubiwelt$/,
      title: 'Mehr zur App erfahren. Die Seite öffnet sich in einem neuen Tab.',
    },
  });

  // News
  await startPage.newsTile.expectContent({
    titel: 'News und Informationen',
    text: 'Interessante Neuigkeiten aus der Welt der Ausbildung, des Studiums und des Digitalen Lernens…',
    link_01: { text: '10.09.2020Moving Image leider nicht barrierefreiEine super News zu BERUFE.TV' },
    link_02: {
      // TODO: cut off mid-sentence in the source screenshot after "...internationale Studienbewerbungen i" — verify the full text against source.
      text: '10.09.2020Deutschland ist eine Top-Destination für internationale StudierendeLaut uni-assist, der Arbeits- und Servicestelle für internationale Studienbewerbungen i',
    },
    link_03: { hidden: true },
    alleNews: { text: 'Alle News aufrufen', title: 'Zu News und Informationen navigieren' },
  });
});

test('@smoke 02. Test auf den Inhalt der Startseite', async ({
  page,
  linkJiraItems,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);

  // PREPARE
  linkJiraItems(['BERUFETV-562', 'BERUFETV-1050', 'BERUFETV-1122']);
  tamaraNamenHinzufuegen(['BERUFETV_GUI_STS_Startseite_Inhalt_02()']);
  beschreibungHinzufuegen(
    'Prüft die Reihenfolge der Kacheln auf der Startseite.' +
      'Auf der Startseite wird ein zweiter Kachelblock unter "Weitere interessante Bereiche" angezeigt: Kachel 1 "Digitale Nutzerreise Ausbildung", Kachel 2 "Rund um Einblicke".' + // TODO: reconstructed, verify against source
      'AK_1 Die Kachel "Willkommen in Deutschland" ist umbenannt in "Welcome to Germany".' +
      'Neuverwendung Kachel Digitale Nutzerreise nach Wege ins Ausland.'
  );

  // Header — hard assertions here (unlike the soft ones in "@smoke 01")
  await startPage.expectUrl({ soft: false });
  await overallPage.expectHeader(
    { titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' },
    { soft: false }
  );
  await overallPage.expectBreadcrumbLabel('Startseite (aktuelle Seite)');

  await startPage.ausbildungsberufeTile.expectOrderLabel('Ausbildungsberufe');
  await startPage.studienberufeTile.expectOrderLabel('Studienberufe');
  await startPage.neueFilmeTile.expectOrderLabel('Neue Filme');
  await startPage.themenfilmeSchmalTile.expectOrderLabel('Themenfilme');
  await startPage.willkommenInDeutschlandSchmalTile.expectOrderLabel('Welcome to Germany');
  await startPage.alleFilmeA_ZSchmalTile.expectOrderLabel('Alle Filme A - Z');
  await startPage.wegeInsAuslandSchmalTile.expectOrderLabel('Wege ins Ausland');
  await startPage.rundUmDenBerufsalltagSchmalTile.expectOrderLabel('Rund um den Berufsalltag');
  await startPage.beruflicheIdeenUndImpulseSchmalTile.expectOrderLabel('Berufliche Ideen und Impulse');
});

test('@smoke Test auf der Kontextinfo-Header der Startseite', async ({
  page,
  linkJiraItems,
  tamaraNamenHinzufuegen,
  beschreibungHinzufuegen,
}) => {
  const startPage = new StartPage(page);
  const overallPage = new OverallPage(page);

  // PREPARE
  linkJiraItems(['BERUFETV-268']);
  tamaraNamenHinzufuegen(['BERUFETV_GUI_STS_Startseite_Responsive_01()']);
  beschreibungHinzufuegen(
    'Pfüft der Kontextinfo-Header. Der Kontextinfo-Header der Startseite und Ergebnisseite <768px enthält eine Breadcrumb mit der Bezeichnung "Startseite"'
  );

  // Header — hard assertions, as in "@smoke 02"
  await startPage.expectUrl({ soft: false });
  await overallPage.expectHeader(
    { titel: 'BERUFE.TV', zusatz: 'Das Filmportal rund um Berufe' },
    { soft: false }
  );
  await overallPage.expectBreadcrumbLabel('Startseite (aktuelle Seite)');
});
