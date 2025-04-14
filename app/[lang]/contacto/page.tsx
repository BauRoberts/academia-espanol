import { getTranslations } from "@/lib/i18n";
import ContactoTranslated from "@/components/ContactoTranslated";

interface ContactoPageProps {
  params: {
    lang: string;
  };
}

export default async function ContactoPage({ params }: ContactoPageProps) {
  // Obtener las traducciones según el idioma seleccionado
  const translations = await getTranslations(params.lang, "contact");

  return (
    <main>
      <ContactoTranslated
        currentLocale={params.lang}
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
