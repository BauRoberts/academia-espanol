///Users/bautistaroberts/academia-espanol/components/CTATranslated.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

type CTATranslatedProps = {
  currentLocale: string;
  translations: {
    title: string;
    titleSuffix: string;
    description: string;
    buttons: {
      book: string;
      demo: string;
    };
    stats: {
      satisfaction: {
        value: string;
        label: string;
      };
      personalized: {
        value: string;
        label: string;
      };
      students: {
        value: string;
        label: string;
      };
    };
  };
};

const CTATranslated = ({ currentLocale, translations }: CTATranslatedProps) => {
  // Asegurarnos de tener valores predeterminados en caso de que translations sea undefined
  const title = translations?.title || "¿Listo para comenzar tu aventura";
  const titleSuffix = translations?.titleSuffix || "con el español?";
  const description =
    translations?.description ||
    "Reserva ahora tu primera clase gratuita y descubre cómo nuestra metodología personalizada te ayudará a alcanzar la fluidez que siempre has deseado.";
  const bookButtonText =
    translations?.buttons?.book || "Reserva tu clase gratuita";
  const demoButtonText =
    translations?.buttons?.demo || "Ver cómo funcionan las clases";

  const satisfactionValue = translations?.stats?.satisfaction?.value || "98%";
  const satisfactionLabel =
    translations?.stats?.satisfaction?.label || "Tasa de satisfacción";
  const personalizedValue = translations?.stats?.personalized?.value || "100%";
  const personalizedLabel =
    translations?.stats?.personalized?.label || "Personalizado";
  const studentsValue = translations?.stats?.students?.value || "+1000";
  const studentsLabel =
    translations?.stats?.students?.label || "Estudiantes satisfechos";

  return (
    <section className="w-full py-10 sm:py-16 md:py-24 bg-gradient-to-r from-brand-orange to-brand-yellow">
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Columna de texto - Lado izquierdo */}
            <div className="md:w-2/3 mb-8 sm:mb-10 md:mb-0 md:pr-8 lg:pr-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {title}
                <span className="block mt-1 sm:mt-2">{titleSuffix}</span>
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={`/${currentLocale}/contacto`}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-orange text-base sm:text-lg font-medium rounded-md hover:bg-gray-100 transition-all shadow-md inline-flex items-center justify-center"
                >
                  {bookButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 sm:w-5 sm:h-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href={`/${currentLocale}/contacto`}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white text-base sm:text-lg font-medium rounded-md hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                  {demoButtonText}
                </Link>
              </div>
            </div>

            {/* Elemento visual - Lado derecho */}
            <div className="md:w-1/3 relative">
              <div className="bg-white/20 p-4 sm:p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {satisfactionValue}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80">
                      {satisfactionLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {personalizedValue}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80">
                      {personalizedLabel}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {studentsValue}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80">
                      {studentsLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decoración flotante - Ajustada para responsividad */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-2xl sm:text-3xl font-bold text-brand-orange">
                  ¡
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATranslated;
