import { KachelnTestData } from './ausbildungsberufeUeberblick.data';

/**
 * REWRITTEN from the original `kachelPruefung`-shaped array — see the
 * note at the top of `ausbildungsberufeUeberblick.data.ts` for why
 * (selector fields dropped, nothing lost since they only ever referenced
 * `PRODUKTIONFERTIGUNG_PAGE` itself).
 *
 * `anzahl` is deliberately NOT here: the spec checks
 * `PRODUKTIONFERTIGUNG_PAGE.kacheln.<name>.anzahl` directly, outside this
 * data-driven loop — confirmed by the real spec screenshots, not an
 * oversight on this end.
 *
 * FIDELITY NOTE: several `text` values were cut off at the source
 * screenshot's right edge — each marked with a TODO showing exactly
 * where (the user still needs to fill these in). Everything else,
 * including `berufe_mit_qualitaetssicherung.linkHrefPattern` (seen in a
 * follow-up screenshot), is confirmed complete.
 */
export type ProduktionFertigungKachelnTestData = Record<
  | 'berufe_mit_bergbau'
  | 'berufe_mit_baustoffen_und_natursteinen'
  | 'berufe_mit_edelsteinen'
  | 'berufe_mit_farben_lacke'
  | 'berufe_mit_glas'
  | 'berufe_mit_keramik'
  | 'berufe_mit_kunststoff'
  | 'berufe_mit_papier'
  | 'berufe_mit_holz'
  | 'berufe_mit_textillien'
  | 'berufe_mit_bekleidung'
  | 'berufe_mit_leder'
  | 'berufe_mit_lebensmittel'
  | 'berufe_mit_getraenke'
  | 'berufe_mit_musikinstrumentenbau'
  | 'berufe_mit_arbeitsvorbereitung'
  | 'berufe_mit_qualitaetssicherung',
  KachelnTestData[keyof KachelnTestData]
>;

export const produktionFertigungKachelnTestData: ProduktionFertigungKachelnTestData = {
  berufe_mit_bergbau: {
    titel: 'Berufe im Bergbau',
    text: 'Im Berufsfeld Berufe im Bergbau geht es um die Erschließung, den Abbau bzw. die Gewinnung sowie die Aufbereitung von Rohstoffen wie z.B. Erdöl, Kohle, Gesteinen, Salzen oder Erzen im Untertage- oder', // TODO: truncated after "...Untertage- oder"
    bild: 'dkz_754_02.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-im-bergbau\//,
  },
  berufe_mit_baustoffen_und_natursteinen: {
    titel: 'Berufe mit Baustoffen und Natursteinen',
    text: 'Im Berufsfeld Berufe mit Baustoffen und Natursteinen geht es vor allem um den Abbau und die Aufbereitung von mineralischen Rohstoffen, die Verarbeitung zu Baustoffen, z.B. Betonfertigteilen, sowie d', // TODO: truncated after "...sowie d"
    bild: 'dkz_816_01.jpg',
    linkHrefPattern:
      /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-baustoffen-und-natursteinen\//,
  },
  berufe_mit_edelsteinen: {
    titel: 'Berufe mit Edelsteinen',
    text: 'Im Berufsfeld Berufe mit Edelsteinen geht es vor allem um die Beurteilung, die Behandlung und Verarbeitung von natürlichen und künstlichen Edel- und Schmucksteinen, um den Entwurf, die Gestaltung, H', // TODO: truncated after "...Gestaltung, H"
    bild: 'dkz_13842_06.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-edelsteinen\//,
  },
  berufe_mit_farben_lacke: {
    titel: 'Berufe mit Farben und Lacken',
    text: 'Im Berufsfeld Berufe mit Farben und Lacken geht es vor allem um die Behandlung, Beschichtung und Gestaltung von Oberflächen mit Farben, Anstrichmitteln und Lacken sowie um die Entwicklung, Herstellu', // TODO: truncated after "...Herstellu"
    bild: 'dkz_15541_15.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-farben-und-lacken\//,
  },
  berufe_mit_glas: {
    titel: 'Berufe mit Glas',
    text: 'Im Berufsfeld Berufe mit Glas geht es vor allem um die Herstellung, Bearbeitung und Verzierung von Glas bzw. Glaserzeugnissen und um die Montage von Glaselementen.',
    bild: 'dkz_131052_08.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-glas\//,
  },
  berufe_mit_keramik: {
    titel: 'Berufe mit Keramik',
    text: 'Im Berufsfeld Berufe mit Keramik geht es um die Herstellung, Bearbeitung und Veredelung von Gegenständen aus Keramik mit automatisierten Anlagen oder von Hand, vor allem um die Herstellung und Formu', // TODO: truncated after "...Formu"
    bild: 'dkz_990_04.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-keramik\//,
  },
  berufe_mit_kunststoff: {
    titel: 'Berufe mit Kunststoff',
    text: 'Im Berufsfeld Berufe mit Kunststoff geht es um Herstellung, Ver- bzw. Bearbeitung und Verkauf von Kunststoff, Kunststoffprodukten und Gummi sowie um die Herstellung von Klebeverbindungen.',
    bild: 'dkz_2703_20.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-kunststoff\//,
  },
  berufe_mit_papier: {
    titel: 'Berufe mit Papier',
    text: 'Im Berufsfeld Berufe mit Papier geht es um die Herstellung von Zellstoff, Pappe und Papier oder von Produkten daraus, z.B. Verpackungsmitteln, Büchern und Zeitungen, sowie um die Restaurierung von P', // TODO: truncated after "...Restaurierung von P"
    bild: 'dkz_14393_02.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-papier\//,
  },
  berufe_mit_holz: {
    titel: 'Berufe mit Holz',
    text: 'Im Berufsfeld Berufe mit Holz geht es vor allem um die Verarbeitung von Holz zu unterschiedlichen Produkten, die Herstellung von Flecht- oder Korbwaren sowie um Gestaltung, Restaurierung und Verkauf', // TODO: truncated after "...und Verkauf"
    bild: 'dkz_4007_01.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-holz\//,
  },
  berufe_mit_textillien: {
    titel: 'Berufe mit Textilien',
    text: 'Im Berufsfeld Berufe mit Textilien geht es um die Herstellung, Verarbeitung, Veredlung und Gestaltung von Textilien sowie um Verkauf, Änderung, Reparatur und Pflege von Textilprodukten.',
    bild: 'dkz_10209_14.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-textilien\//,
  },
  berufe_mit_bekleidung: {
    titel: 'Berufe mit Bekleidung',
    text: 'Im Berufsfeld Berufe mit Bekleidung geht es vor allem um den Entwurf und die Gestaltung von Modellen und Kollektionen von Kleidung, Kostümen, Textilien, Lederwaren und Schuhen, um die Serienproduktio', // TODO: truncated after "...Serienproduktio"
    bild: 'dkz_8453_10.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-bekleidung\//,
  },
  berufe_mit_leder: {
    titel: 'Berufe mit Leder',
    text: 'Im Berufsfeld Berufe mit Leder geht es um Herstellung und Verkauf von Leder und Pelz bzw. Produkten daraus sowie um die Gestaltung von Mode aus Leder und Pelz.',
    bild: 'dkz_3511_21.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-leder\//,
  },
  berufe_mit_lebensmittel: {
    titel: 'Berufe mit Lebensmitteln',
    text: 'Im Berufsfeld Berufe mit Lebensmitteln geht es um die Herstellung, Verarbeitung und Zubereitung sowie um den Verkauf von Nahrungsmitteln.',
    bild: 'dkz_3722_16.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-lebensmitteln\//,
  },
  berufe_mit_getraenke: {
    titel: 'Berufe mit Getränken',
    text: 'Im Berufsfeld Berufe mit Getränken geht es vor allem um die Herstellung und Abfüllung von Getränken aus unterschiedlichen Rohstoffen sowie um die Prüfung, den Verkauf und Ausschank bzw. das Servier', // TODO: truncated after "...Servier"
    bild: 'dkz_3787_14.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-mit-getraenken\//,
  },
  berufe_mit_musikinstrumentenbau: {
    titel: 'Berufe im Musikinstrumentenbau',
    text: 'Im Berufsfeld Berufe im Musikinstrumentenbau geht es vor allem um die Herstellung, die Reparatur, die Restaurierung und das Stimmen z.B. von Blas-, Handzug-, Streich-, Tasten- und Zupfinstrumenten s', // TODO: truncated after "...Zupfinstrumenten s"
    bild: 'dkz_2644_11.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-im-musikinstrumentenbau\//,
  },
  berufe_mit_arbeitsvorbereitung: {
    titel: 'Berufe in der Arbeitsvorbereitung',
    text: 'Im Berufsfeld Berufe in der Arbeitsvorbereitung geht es um die Planung, Steuerung, Optimierung und Überwachung von Fertigungs- und Arbeitsabläufen.',
    bild: 'dkz_5216_02.jpg',
    linkHrefPattern:
      /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-in-der-arbeitsvorbereitung\//,
  },
  berufe_mit_qualitaetssicherung: {
    titel: 'Berufe in der Qualitätssicherung',
    text: 'Im Berufsfeld Berufe in der Qualitätssicherung geht es vor allem um die Prüfung von Rohstoffen und Produkten bzw. die Überwachung von Fertigungs- und Arbeitsprozessen hinsichtlich der Einhaltung von', // TODO: truncated after "...Einhaltung von"
    bild: 'dkz_6366_05.jpg',
    linkHrefPattern: /^[\s\S]*\/ausbildungsberufe\/produktion-fertigung\/berufe-in-der-qualitaetssicherung\//,
  },
};
