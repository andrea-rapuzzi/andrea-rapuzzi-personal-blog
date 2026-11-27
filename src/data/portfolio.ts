export interface Project {
  slug: string;
  category: string;
  title: string;
  /** Testo completo, per la pagina di dettaglio */
  description: string;
  /** Una o due righe, per la card */
  summary: string;
  /** Card larga in apertura */
  featured?: boolean;
  /** Link esterno: se presente, la card mostra la CTA */
  cta?: { label: string; href: string };
  /** true quando esiste /portfolio/<slug>: rende la card cliccabile */
  detail?: boolean;
  /** Colore (hue OKLCH) usato per il placeholder finché mancano le immagini */
  hue: number;
}

/**
 * Le immagini vanno in `src/assets/portfolio/<slug>/` (2-3 file per progetto,
 * ordinati per nome: 1.jpg, 2.jpg, 3.jpg). Vengono caricate in automatico.
 */
export const projects: Project[] = [
  {
    slug: "handle-with-care",
    category: "App Development",
    title: "Handle with Care",
    description:
      "Progetto open source per aiutare i neo-genitori a risolvere un'esigenza molto concreta: tenere traccia dell'alimentazione e della crescita nei primi giorni di vita di un neonato.",
    summary:
      "Progetto open source per aiutare i neo-genitori a risolvere un'esigenza molto concreta: tenere traccia dell'alimentazione e della crescita nei primi giorni di vita di un neonato.",
    cta: { label: "Link", href: "https://github.com/andrea-rapuzzi/handle-with-care" },
    hue: 300,
  },
  {
    slug: "istituto-minotauro",
    category: "Editorial Design",
    title: "Istituto Minotauro",
    description:
      "Architettura visiva, layout e typesetting per una ricerca sulle gang giovanili nei media. Dare una forma leggibile a contenuti che leggeri non sono.",
    summary:
      "Architettura visiva, layout e typesetting per una ricerca sulle gang giovanili nei media. Dare una forma leggibile a contenuti che leggeri non sono.",
    cta: { label: "Leggi il report", href: "https://minotauro.it/wp-content/uploads/2025/05/Gang-giovanili-report.pdf" },
    hue: 25,
  },
  {
    slug: "anfossi-1941",
    category: "Brand Identity",
    title: "Anfossi 1941",
    description:
      "Un'identità visiva rinnovata dopo l'acquisizione da parte di Merottofiori. Logo, declinazioni e tipografia, sviluppati e rifiniti insieme al cliente.",
    summary:
      "Un'identità visiva rinnovata dopo l'acquisizione da parte di Merottofiori. Logo, declinazioni e tipografia, sviluppati e rifiniti insieme al cliente.",
    cta: { label: "Scopri di più", href: "https://www.anfossi1941.it/" },
    hue: 85,
  },
  {
    slug: "amazon-banner",
    category: "Digital Advertising",
    title: "Amazon",
    description:
      'Una serie di banner sviluppata in collaborazione con il team interno di category-specialist di Amazon, a supporto di campagne promozionali tematiche come gli "Anime Day".',
    summary:
      'Una serie di banner sviluppata in collaborazione con il team interno di category-specialist di Amazon, a supporto di campagne promozionali tematiche come gli "Anime Day".',
    hue: 60,
  },
  {
    slug: "unsplash",
    category: "Photography",
    title: "Unsplash",
    description:
      "Fotografie viste oltre 6 milioni di volte e scaricate più di 41.000 volte. Un risultato che mi ha portato nella top 10% della community.",
    summary:
      "Fotografie viste oltre 6 milioni di volte e scaricate più di 41.000 volte. Un risultato che mi ha portato nella top 10% della community.",
    cta: { label: "Guarda gli scatti", href: "https://unsplash.com/@andrea_rapuzzi" },
    hue: 200,
  },
  {
    slug: "illustrator",
    category: "Illustration",
    title: "Illustrazioni",
    description:
      "Disegni digitali realizzati in Procreate, che ricalcano lo stile inchiostro e campiture piatte. Architetture, natura e piccoli dettagli quotidiani: cose che valeva la pena fermare su carta, anche se digitale.",
    summary:
      "Disegni digitali realizzati in Procreate, che ricalcano lo stile inchiostro e campiture piatte. Architetture, natura e piccoli dettagli quotidiani: cose che valeva la pena fermare su carta, anche se digitale.",
    cta: { label: "Instagram", href: "https://www.instagram.com/the.rapencil/" },
    hue: 160,
  },
];
