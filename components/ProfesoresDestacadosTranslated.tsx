"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProfesoresDestacadosTranslatedProps = {
  currentLocale: string;
  translations: {
    title: string;
    titleHighlight: string;
    description: string;
    videoCaption: string;
    ctaButton: string;
  };
};

const ProfesoresDestacadosTranslated = ({
  currentLocale,
  translations,
}: ProfesoresDestacadosTranslatedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "T4sIZhCUweE"; // ID del video de YouTube

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

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
                "Mira este video para conocer a nuestro equipo de profesores y descubrir cómo trabajamos para ayudarte a dominar el español."}
            </p>

            {/* Contenedor del video - Ajustado para responsividad */}
            <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg px-2 sm:px-0">
              {/* Fondo oscuro para el video */}
              <div className="absolute inset-0 bg-gray-900"></div>

              {/* Botón de play - Ajustado para responsividad */}
              {!isPlaying && (
                <button
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Reproducir video"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8 sm:w-10 sm:h-10 ml-1"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>

                  {/* Texto debajo del botón - Ajustado para responsividad */}
                  <p className="absolute bottom-4 sm:bottom-6 text-white text-center text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-black bg-opacity-50 rounded-lg mx-4 sm:mx-0">
                    {translations?.videoCaption ||
                      "Video de YouTube: Aprende español con nuestros profesores"}
                  </p>
                </button>
              )}

              {/* Si isPlaying es true, mostrar el iframe del video de YouTube */}
              {isPlaying && (
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="Video de profesores de español"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Botón de llamada a la acción debajo del video - Ajustado para responsividad */}
            <div className="mt-6 sm:mt-10 px-4 sm:px-0">
              <Link
                href={`/${currentLocale}/contacto`}
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
