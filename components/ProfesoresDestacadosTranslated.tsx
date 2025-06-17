"use client";

import Image from "next/image";
import Link from "next/link";

type ProfesoresDestacadosTranslatedProps = {
  currentLocale: string;
  translations: {
    title: string;
    titleHighlight: string;
    description: string;
    imageAlt: string;
    ctaButton: string;
  };
};

const ProfesoresDestacadosTranslated = ({
  currentLocale,
  translations,
}: ProfesoresDestacadosTranslatedProps) => {
  return (
    <section className="w-full py-10 sm:py-16 bg-white-50">
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Encabezado de la sección - Ajustado para responsividad */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {translations?.title || "Conoce a Nuestros"}{" "}
              <span className="text-brand-orange">
                {translations?.titleHighlight || "Profesores"}
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
              {translations?.description ||
                "Nuestro equipo de profesores nativos y certificados te acompañará en tu proceso de aprendizaje del español."}
            </p>

            {/* Contenedor de la imagen - Sin fondo visible */}
            <div className="relative w-full max-w-3xl mx-auto px-2 sm:px-0">
              <Image
                src="/images/video-section.png"
                alt={
                  translations?.imageAlt ||
                  "Profesores de español de la academia"
                }
                width={768}
                height={432}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                priority
              />
            </div>

            {/* Botón de llamada a la acción debajo de la imagen - Ajustado para responsividad */}
            <div className="mt-6 sm:mt-10 px-4 sm:px-0">
              <Link
                href={`/${currentLocale}/profesores`}
                className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-orange text-white text-base sm:text-lg font-medium rounded-md hover:bg-opacity-90 transition-all shadow-md"
              >
                {translations?.ctaButton ||
                  "Reserva una clase con nuestros profesores"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfesoresDestacadosTranslated;
