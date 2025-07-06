// app/[lang]/travel/page.tsx
import TravelAdvicePage from "@/components/TravelAdvicePage";

export default async function TravelPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;

  // Importamos directamente el archivo de traducciones correspondiente al idioma
  const travelTranslations = await import(
    `@/public/locales/${lang}/travel.json`
  );

  return (
    <main className="min-h-screen">
      <TravelAdvicePage
        currentLocale={lang}
        translations={travelTranslations.default}
      />
    </main>
  );
}
