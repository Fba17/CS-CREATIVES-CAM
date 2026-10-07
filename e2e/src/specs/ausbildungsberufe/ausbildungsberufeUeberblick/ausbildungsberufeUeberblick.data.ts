import { AUSBILDUNGSBERUFE_PAGE } from '../../../pages/ausbildungsberufe.page';

/**
 * REWRITTEN from the original `kachelPruefung`-shaped array: this file
 * now holds only the values that actually vary per tile (titel/text/bild
 * filename/link href pattern) and is keyed by the same names as
 * `AUSBILDUNGSBERUFE_PAGE.kacheln`, for use with
 * `AusbildungsberufePage.tileByKey()` + `Tile.expectContent()` instead of
 * `kachelPruefung()`. The selector strings the old shape carried
 * (`kachelSelector`, `titelSelector`, ...) are gone — they were only ever
 * a reference to `AUSBILDUNGSBERUFE_PAGE` itself, so nothing is lost.
 *
 * FIDELITY NOTE: several `text` values were cut off at the source
 * screenshot's right edge (long German sentences). Each truncated one is
 * marked `// TODO: truncated after "...<last visible words>"` — verify
 * against the real file before relying on them. Three entries
 * (gesellschaft_geisteswissenschaften, kunst_kultur_gestaltung, medien)
 * weren't captured at all yet and are omitted rather than guessed.
 */
export type KachelnTestData = Record<
  keyof typeof AUSBILDUNGSBERUFE_PAGE.kacheln,
  { titel: string; text: string; bild: string; linkHrefPattern: RegExp }
>;

export const ausbildungsUeberblickKachelnTestData: Partial<KachelnTestData> = {
  landwirtschaft: {
    titel: 'Landwirtschaft, Natur, Umwelt',
    text: 'Rund um Landwirtschaft, Natur, Umwelt arbeitet man vor allem mit Tieren und Pflanzen oder trägt Verantwortung für deren Schutz. Es geht beispielsweise darum, Tiere zu züchten und zu pflegen oder Pfl', // TODO: truncated after "...Pfl"
    bild: 'dkz_35008_19.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/landwirtschaft-natur-umwelt\//,
  },
  produktion_fertigung: {
    titel: 'Produktion, Fertigung',
    text: 'Von Betonfertigteilen über Bekleidung oder Lebensmittel bis hin zu Musikinstrumenten: In der Produktion, Fertigung geht es um die Herstellung von Produkten aller Art. Man arbeitet mit Holz, Kunststo', // TODO: truncated after "...Kunststo"
    bild: 'dkz_3623_33.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\//,
  },
  bau_architektur_vermessung: {
    titel: 'Bau, Architektur, Vermessung',
    text: 'Im Bereich Bau, Architektur, Vermessung geht es um die Planung und den Bau von Gebäuden, Verkehrswegen und Freiflächen. Dies umfasst sowohl die körperliche Arbeit auf der Baustelle im Hoch-, Tief- b', // TODO: truncated after "...Tief- b"
    bild: '4660_07.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/bau-architektur-vermessung\//,
  },
  metall_maschinenbau: {
    titel: 'Metall, Maschinenbau',
    text: 'Ob handwerklich oder industriell – im Bereich Metall, Maschinenbau stehen Werkzeuge, Bauteile, Maschinen oder Produkte aus Metall im Mittelpunkt. Die Spannbreite an Tätigkeiten ist groß: metallische', // TODO: truncated after "...metallische"
    bild: 'dkz_126848_01.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/metall-maschinenbau\//,
  },
  elektro: {
    titel: 'Elektro',
    text: 'Ohne Elektrotechnik, deren Produkte und Anwendungen ist der heutige Lebens- und Arbeitsalltag kaum denkbar. Hier geht es zum Beispiel um die Entwicklung und Herstellung elektrischer, elektronischer', // TODO: truncated after "...elektronischer"
    bild: 'dkz_15624_17.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/elektro\//,
  },
  it_computer: {
    titel: 'IT, Computer',
    text: 'Von der Hardware bis zur Software, von der Programmierung bis zur Anwenderschulung: Der Bereich IT, Computer ist vielseitig und für viele Bereiche des täglichen Lebens unentbehrlich. Hier werden Kom', // TODO: truncated after "...Kom"
    bild: 'dkz_7833_28.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/it-computer\//,
  },
  naturwissenschaften: {
    titel: 'Naturwissenschaften',
    text: 'Von Biologie, Chemie, Pharmazie und Physik bis zu Mathematik und Geowissenschaften – in den Naturwissenschaften geht es häufig darum, Untersuchungen vorzunehmen oder Daten auszuwerten und zu analysi', // TODO: truncated after "...analysi"
    bild: 'dkz_6318_17.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/naturwissenschaften\//,
  },
  technik_technologiefelder: {
    titel: 'Technik, Technologiefelder',
    text: 'Innerhalb der Technologiefelder gibt es zahlreiche Spezialgebiete. In der Biotechnologie werden technische Anwendungen aus biologischen Strukturen abgeleitet, während in der Gentechnologie die Erban', // TODO: truncated after "...Erban"
    bild: 'dkz_2400_03.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/technik-technologiefelder\//,
  },
  wirtschaft_verwaltung: {
    titel: 'Wirtschaft, Verwaltung',
    text: 'Die Aufgabengebiete und Schwerpunkte in Wirtschaft, Verwaltung sind zahlreich: Sie reichen von Büromanagement über Marketing und Recht bis hin zur Unternehmensführung. Im Büro dreht sich alles um di', // TODO: truncated after "...di"
    bild: 'dkz_13750_08.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/wirtschaft-verwaltung\//,
  },
  verkehr_logistik: {
    titel: 'Verkehr, Logistik',
    text: 'Verkehr und Logistik findet auf der Straße, zu Wasser, in der Luft oder auf Schienen statt. Dabei sind Transportmittel für Personen, Waren und Güter im globalen Handel unerlässlich geworden. Es gilt', // TODO: truncated after "...Es gilt"
    bild: 'dkz_7108_01.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/verkehr-logistik\//,
  },
  dienstleistung: {
    titel: 'Dienstleistung',
    text: 'So vielfältig Dienstleistungen auch sein mögen, der Kunde steht immer im Mittelpunkt. Gäste in Hotels- und Restaurants betreuen, Reisen und Freizeitprogramme organisieren, Veranstaltungen inhaltlich', // TODO: truncated after "...inhaltlich"
    bild: 'dkz_10051_14.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/dienstleistung\//,
  },
  gesundheit: {
    titel: 'Gesundheit',
    text: 'Das Thema Gesundheit eröffnet zahlreiche Anwendungsfelder: Tagtäglich verlassen sich Patienten auf die Diagnostik, Beratung und Behandlung von Medizinern oder die Erstversorgung im Rettungswesen. Di', // TODO: truncated after "...Di"
    bild: 'dkz_33367_04.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/gesundheit\//,
  },
  soziales_paedagogik: {
    titel: 'Soziales, Pädagogik',
    text: 'Der Mensch steht im Zentrum, wenn es um Soziales, Pädagogik geht: Hier werden Personen in Krisen- und Konfliktsituationen beraten und unterstützt oder im Alltag betreut. Es gilt Bildungsangebote zu', // TODO: truncated after "...zu"
    bild: 'dkz_9159_04.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/soziales-paedagogik\//,
  },
  // TODO: gesellschaft_geisteswissenschaften, kunst_kultur_gestaltung and
  // medien weren't captured yet (screenshots stopped mid-entry) — add them
  // once seen, rather than guessing their text/bild/href.
};
