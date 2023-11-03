export const i18n = {
  locales: ["en", "ar", "fr", "nl-NL"],
  defaultLocale: "en",
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
