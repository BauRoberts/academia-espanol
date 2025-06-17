import { getTranslations } from "@/lib/i18n/utils";
import HeroTranslated from "@/components/HeroTranslated";
import ServiciosTranslated from "@/components/ServiciosTranslated";
import ProfesoresDestacadosTranslated from "@/components/ProfesoresDestacadosTranslated";
import BlogTranslated from "@/components/BlogTranslated";
import TestimoniosTranslated from "@/components/TestimoniosTranslated";
import CTATranslated from "@/components/CTATranslated";
import { i18n } from "@/lib/i18n/config";

// Esta función permite generar páginas estáticas para cada idioma en tiempo de construcción
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: { lang: string } }) {
  // Convertir params a una promesa y esperar su resolución
  const resolvedParams = await Promise.resolve(params);
  const lang = resolvedParams.lang;

  // Cargar traducciones
  const commonTranslations = await getTranslations(lang, "common");
  const homeTranslations = await getTranslations(lang, "home");
  const servicesTranslations = await getTranslations(lang, "services");
  const professorsTranslations = await getTranslations(lang, "professors");
  const blogTranslations = await getTranslations(lang, "blog");
  const testimonialsTranslations = await getTranslations(lang, "testimonials");

  return (
    <main>
      <HeroTranslated
        currentLocale={lang}
        translations={
          homeTranslations?.hero || {
            title: "Españoling:",
            subtitle: "Tu academia de idiomas online",
            description:
              "Bienvenidos a bordo a esta aventura con destino a: aprender español.",
            buttons: {
              schedule: "Reserva tu clase",
              video: "Video de Presentación",
            },
            stats: {
              levels: { value: "A1-C2", label: "Todos los niveles" },
              personalized: { value: "100%", label: "Personalizado" },
              rating: { value: "5/5", label: "Valoración de estudiantes" },
            },
            languages: {
              title: "Clases en",
              subtitle: "múltiples idiomas",
            },
          }
        }
      />

      <ServiciosTranslated
        id="servicios"
        currentLocale={lang}
        translations={
          servicesTranslations?.services || {
            title: "Nuestros",
            titleHighlight: "Servicios",
            description:
              "Ofrecemos una variedad de opciones para que encuentres la forma perfecta de aprender español según tus necesidades y objetivos.",
            items: [],
            moreInfo: "Más información",
            cta: {
              title: "¿Listo para empezar tu viaje con el español?",
              description:
                "Reserva una clase de prueba gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de aprendizaje.",
              button: "Reserva tu clase de prueba",
            },
          }
        }
      />
      <ProfesoresDestacadosTranslated
        currentLocale={lang}
        translations={
          professorsTranslations?.featuredProfessors || {
            title: "Conoce a Nuestros",
            titleHighlight: "Profesores",
            description:
              "Mira este video para conocer a nuestro equipo de profesores y descubrir cómo trabajamos para ayudarte a dominar el español.",
            videoCaption:
              "Video de YouTube: Aprende español con nuestros profesores",
            ctaButton: "Reserva una clase con nuestros profesores",
          }
        }
      />
      <BlogTranslated
        currentLocale={lang}
        translations={
          blogTranslations?.blog || {
            title: "Artículos y",
            titleHighlight: "Recursos",
            description:
              "Nuestros profesores comparten consejos, técnicas y recursos para que puedas mejorar tu español de forma efectiva.",
            articles: [],
            moreArticles: "Ver más artículos",
          }
        }
      />
      <TestimoniosTranslated
        id="testimonios"
        translations={
          testimonialsTranslations?.testimonials || {
            titleSuffix: "fue increíble!",
            items: [],
          }
        }
      />
      <CTATranslated
        currentLocale={lang}
        translations={{
          title: commonTranslations?.cta?.ready || "",
          titleSuffix: "", // Proporciona un valor adecuado o vacío
          description: "", // Proporciona un valor adecuado o vacío
          buttons: {
            book: commonTranslations?.cta?.book || "",
            demo: "", // Proporciona un valor adecuado o vacío
          },
          stats: {
            // Proporciona las estadísticas necesarias o un objeto vacío compatible
            satisfaction: { value: "", label: "" },
            personalized: { value: "", label: "" },
            students: { value: "", label: "" },
          },
        }}
      />
    </main>
  );
}
