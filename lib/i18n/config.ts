export const i18n = {
  defaultLocale: "es",
  locales: ["es", "en", "pl", "fr", "pt"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
