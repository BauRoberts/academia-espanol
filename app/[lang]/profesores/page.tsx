// app/[lang]/profesores/page.tsx
import ProfesoresSection from "@/components/ProfesoresSection";

export default async function ProfesoresPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;

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
