"use client";

import Image from "next/image";
import Link from "next/link";

type HeroTranslatedProps = {
  currentLocale: string;
  translations: {
    title: string;
    subtitle: string;
    description: string;
    buttons: {
      schedule: string;
      video: string;
    };
    stats: {
      levels: {
        value: string;
        label: string;
      };
      personalized: {
        value: string;
        label: string;
      };
      rating: {
        value: string;
        label: string;
      };
    };
    languages: {
      title: string;
      subtitle: string;
    };
  };
};

const HeroTranslated = ({
  currentLocale,
  translations,
}: HeroTranslatedProps) => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-20 bg-white">
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Columna de texto - Lado izquierdo */}
            <div className="lg:w-1/2 lg:pr-8 mb-8 sm:mb-12 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                {translations.title}
                <br />
                <span className="text-brand-orange">
                  {translations.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
                {translations.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href={`/${currentLocale}/contacto`}
                  className="w-full sm:w-auto px-6 py-3 sm:py-4 bg-brand-orange text-white text-base sm:text-lg font-medium rounded-md hover:bg-opacity-90 transition-all shadow-md text-center"
                >
                  {translations.buttons.schedule}
                </Link>
                <Link
                  href={`/${currentLocale}/demo`}
                  className="w-full sm:w-auto px-6 py-3 sm:py-4 flex items-center justify-center gap-2 text-base sm:text-lg font-medium rounded-md border border-gray-300 hover:bg-gray-100 transition-all text-center"
                >
                  <span className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-brand-orange text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 sm:w-4 h-3 sm:h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {translations.buttons.video}
                </Link>
              </div>
            </div>

            {/* Imagen con elementos flotantes - Lado derecho */}
            <div className="lg:w-1/2 relative flex justify-center">
              <style jsx global>{`
                @keyframes float {
                  0%,
                  100% {
                    transform: translateY(0) rotate(12deg);
                  }
                  50% {
                    transform: translateY(-10px) rotate(12deg);
                  }
                }

                @keyframes sway {
                  0%,
                  100% {
                    transform: rotate(-6deg);
                  }
                  50% {
                    transform: rotate(-10deg) translateX(-5px);
                  }
                }

                @keyframes bounce {
                  0%,
                  100% {
                    transform: translateY(0);
                  }
                  50% {
                    transform: translateY(-5px);
                  }
                }

                .float-animation {
                  animation: float 4s ease-in-out infinite;
                }

                .sway-animation {
                  animation: sway 6s ease-in-out infinite;
                }

                .bounce-animation {
                  animation: bounce 4s ease-in-out infinite;
                }
              `}</style>

              <div className="relative w-full max-w-[500px]">
                {/* Imagen ya recortada con círculo amarillo */}
                <Image
                  src="/images/profesores/hero-final-2.png"
                  alt="Profesores de español"
                  width={500}
                  height={500}
                  className="object-contain w-full h-auto"
                  priority
                />

                {/* Íconos flotantes con animación - Ajustados para responsividad */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-2 sm:p-3 rounded-lg shadow-lg transform z-10 float-animation">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-orange rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    >
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-16 -left-6 sm:top-20 sm:-left-10 bg-white p-2 sm:p-3 rounded-lg shadow-lg z-10 sway-animation">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-yellow rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Banner de idiomas disponibles con animación - Ajustado para responsividad */}
                <div className="absolute bottom-6 sm:bottom-10 right-0 bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg flex items-center z-10 bounce-animation">
                  <div className="flex -space-x-1 sm:-space-x-2 mr-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">
                      ES
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-bold">
                      EN
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-yellow flex items-center justify-center text-white text-xs font-bold">
                      PL
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">
                    {translations.languages.title}
                    <br />
                    {translations.languages.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios destacados - parte inferior - Ajustado para responsividad */}
      <div className="flex justify-center mt-8 sm:mt-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 border rounded-lg overflow-hidden">
            <div className="p-5 sm:p-8 text-center border-b md:border-b-0 md:border-r">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-orange mb-2">
                {translations.stats.levels.value}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {translations.stats.levels.label}
              </p>
            </div>
            <div className="p-5 sm:p-8 text-center border-b md:border-b-0 md:border-r">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-orange mb-2">
                {translations.stats.personalized.value}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {translations.stats.personalized.label}
              </p>
            </div>
            <div className="p-5 sm:p-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                {translations.stats.rating.value}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {translations.stats.rating.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTranslated;
