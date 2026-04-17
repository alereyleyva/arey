export const defaultLocale = 'es' as const;
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const copy = {
  es: {
    siteTitle: 'Alejandro Rey',
    siteDescription:
      'Escribiendo sobre ingeniería de software, IA y cosas técnicas que me llaman la atención.',
    homeIntro:
      'Escribiendo sobre ingeniería de software, IA y cosas técnicas que me llaman la atención.',
    back: 'Volver',
    rss: 'RSS',
    builtWith: 'Hecho con Astro',
  },
  en: {
    siteTitle: 'Alejandro Rey',
    siteDescription:
      'Writing about software engineering, AI, and technical things that catch my attention.',
    homeIntro:
      'Writing about software engineering, AI, and technical things that catch my attention.',
    back: 'Back',
    rss: 'RSS',
    builtWith: 'Built with Astro',
  },
} satisfies Record<Locale, Record<string, string>>;
