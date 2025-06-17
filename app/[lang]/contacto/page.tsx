import { getTranslations } from "@/lib/i18n/utils"; // ✅ Cambiado a utils
import ContactoTranslated from "@/components/ContactoTranslated";

interface ContactoPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ContactoPage({ params }: ContactoPageProps) {
  // Await params antes de usar sus propiedades
  const resolvedParams = await params;

  // Obtener las traducciones según el idioma seleccionado
  const translations = await getTranslations(resolvedParams.lang, "contact");

  return (
    <main>
      <ContactoTranslated
        currentLocale={resolvedParams.lang}
        translations={translations}
      />
    </main>
  );
}

// Genera rutas estáticas para todos los idiomas soportados
export async function generateStaticParams() {
  return [
    { lang: "es" },
    { lang: "en" },
    { lang: "pl" },
    { lang: "fr" },
    { lang: "pt" },
  ];
}
