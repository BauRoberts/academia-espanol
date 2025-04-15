// app/[lang]/profesores/page.tsx
import ProfesoresSection from "@/components/ProfesoresSection";

export default async function ProfesoresPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // Importamos directamente el archivo de traducciones correspondiente al idioma
  const teachersTranslations = await import(
    `@/public/locales/${lang}/teachers.json`
  );

  return (
    <main className="min-h-screen">
      <ProfesoresSection
        currentLocale={lang}
        translations={teachersTranslations.default}
      />
    </main>
  );
}
