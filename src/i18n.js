import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "de", "fr", "ar","ur","tu"];

export default getRequestConfig(async ({ locale }) => {
//   const baseLocale = new Intl.locale(locale).baseName
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../src/messages/${locale}.json`)).default,
  };
});
