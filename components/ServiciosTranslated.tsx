"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedBackground3D from "./AnimatedBackground3D";
import { useState, useEffect } from "react";

type ServiceItem = {
  id: number;
  title: string;
  description: string;
};

type ServiciosTranslatedProps = {
  id?: string;
  currentLocale: string;
  translations: {
    title: string;
    titleHighlight: string;
    description: string;
    items: ServiceItem[];
    moreInfo: string;
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
};

const ServiciosTranslated = ({
  id,
  currentLocale,
  translations,
}: ServiciosTranslatedProps) => {
  // Estado para controlar el renderizado del lado del cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .wave-text-effect {
        position: relative;  /* Añadido */
        display: inline-block;
        overflow: hidden;    /* Añadido */
      }
      
      .wave-text-effect::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.8) 50%,
          transparent 100%
        );
        transition: none;
      }
      
      .wave-text-effect:hover::before {
        left: 100%;
        transition: all 0.8s ease;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Definimos los iconos para cada servicio
  const serviceIcons = [
    // Icono para Clases Individuales
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-1"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>,
    // Icono para Cursos Grupales
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-2"
    >
      <path
        fillRule="evenodd"
        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
        clipRule="evenodd"
      />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>,
    // Icono para Preparación DELE
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-3"
    >
      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
    </svg>,
    // Icono para Clases de Conversación
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-4"
    >
      <path
        fillRule="evenodd"
        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.383c-1.978-.292-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
        clipRule="evenodd"
      />
    </svg>,
    // Icono para Curso a Tu Ritmo
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-5"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
        clipRule="evenodd"
      />
    </svg>,
    // Icono para Asesoría de Viajes
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 sm:w-8 sm:h-8"
      key="icon-6"
    >
      <path
        fillRule="evenodd"
        d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
        clipRule="evenodd"
      />
    </svg>,
  ];

  // Renderizamos el contenido principal
  const renderContent = () => (
    <div className="w-full max-w-6xl mx-auto relative z-10">
      {/* Encabezado de la sección - Ajustado para responsividad */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          {translations?.title || "Nuestros"}{" "}
          <span className="text-brand-orange">
            {translations?.titleHighlight || "Servicios"}
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-2">
          {translations?.description ||
            "Ofrecemos una variedad de opciones para que encuentres la forma perfecta de aprender español según tus necesidades y objetivos."}
        </p>
      </div>{" "}
      {/* Grid de servicios - Ajustado para responsividad */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {(translations?.items || []).map((servicio, index) => (
          <div
            key={servicio.id}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 transition-all hover:shadow-xl sm:hover:scale-105 border border-gray-100"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-4 sm:mb-6 text-brand-orange">
              {serviceIcons[index % serviceIcons.length]}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              {servicio.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              {servicio.description}
            </p>
            <Link
              href={
                servicio.id === 5
                  ? `/${currentLocale}/curso-ritmo`
                  : `/${currentLocale}/contacto`
              }
              className="inline-flex items-center group text-sm sm:text-base"
            >
              <span className="text-brand-orange font-medium">
                <span className="relative z-10">
                  {translations?.moreInfo || "Más información"}
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 transform transition-transform group-hover:translate-x-1 text-brand-orange"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      {/* CTA para servicios - Ajustado para responsividad */}
      <div className="mt-10 sm:mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-orange to-brand-yellow/90 rounded-xl p-6 sm:p-12 shadow-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            {translations?.cta?.title ||
              "¿Listo para empezar tu viaje con el español?"}
          </h3>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            {translations?.cta?.description ||
              "Reserva una clase de prueba gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos de aprendizaje."}
          </p>
          <Link
            href={`/${currentLocale}/contacto`}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-4 bg-white text-brand-orange text-base sm:text-lg font-medium rounded-md hover:bg-gray-100 transition-all shadow-md inline-block"
          >
            {translations?.cta?.button || "Reserva tu clase de prueba"}
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <section
      id={id}
      className="w-full py-10 sm:py-16 px-4 min-h-[80vh] sm:min-h-screen"
    >
      {isClient ? (
        <AnimatedBackground3D>{renderContent()}</AnimatedBackground3D>
      ) : (
        renderContent()
      )}
    </section>
  );
};
export default ServiciosTranslated;
