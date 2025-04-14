import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { getTranslations } from "@/lib/i18n/utils";
import HeaderTranslated from "@/components/HeaderTranslated";
import FooterTranslated from "@/components/FooterTranslated";

// Configuración de la fuente Figtree
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Españoling - Aprende español con profesores nativos",
  description: "Clases personalizadas, online y adaptadas a tu nivel",
  // Eliminamos la configuración de icons aquí para evitar conflictos
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // Resolver parámetros de manera consistente
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang;

  // Cargar traducciones para header y footer
  const commonTranslations = await getTranslations(lang, "common");
  const footerTranslations = await getTranslations(lang, "footer");

  return (
    <html lang={lang} className={figtree.className}>
      {/* Eliminamos las etiquetas head personalizadas del favicon */}
      <body className="min-h-screen flex flex-col">
        <HeaderTranslated
          currentLocale={lang}
          navigation={
            commonTranslations?.header?.navigation || {
              home: "Inicio",
              services: "Servicios",
              reviews: "Reseñas",
              blog: "Blog",
              professors: "Profesores",
              schedule: "Agenda tu clase",
            }
          }
        />
        {/* Espacio para compensar el header fijo */}
        <div className="pt-16 md:pt-20"></div>
        <main className="flex-grow">{children}</main>
        <FooterTranslated
          currentLocale={lang}
          translations={
            footerTranslations?.footer || {
              description:
                "Bienvenidos a bordo a esta aventura con destino a: aprender español. Nuestra metodología consiste en hacer que ganes confianza, entiendas y hables desde la primera clase.",
              links: {
                title: "Enlaces",
                home: "Inicio",
                teachers: "Profesores",
                blog: "Blog",
                contact: "Contacto",
              },
              contact: {
                title: "Contacto",
                phone: "+34 123 456 789",
                email: "info@espanoling.com",
                address: "Madrid, España",
              },
              legal: {
                copyright:
                  "© {year} Españoling. Todos los derechos reservados.",
                terms: "Términos y condiciones",
                privacy: "Política de privacidad",
                cookies: "Cookies",
              },
            }
          }
        />
      </body>
    </html>
  );
}
