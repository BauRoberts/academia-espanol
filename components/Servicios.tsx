"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedBackground3D from "./AnimatedBackground3D";
import { useState, useEffect } from "react";

const Servicios = () => {
  // Estado para controlar el renderizado del lado del cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const servicios = [
    {
      id: 1,
      titulo: "Clases Individuales",
      descripcion:
        "Sesiones personalizadas adaptadas a tus necesidades específicas y a tu propio ritmo de aprendizaje.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 2,
      titulo: "Cursos Grupales",
      descripcion:
        "Cursos para todos los niveles (A1, A2, B1, B2, C1, C2) en un ambiente colaborativo y dinámico.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
    },
    {
      id: 3,
      titulo: "Preparación DELE",
      descripcion:
        "Cursos específicos para la preparación de los exámenes oficiales del Diploma de Español como Lengua Extranjera.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      titulo: "Clases de Conversación",
      descripcion:
        "Sesiones enfocadas en mejorar tu fluidez, pronunciación y confianza al hablar español en situaciones cotidianas.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.383c-1.978-.292-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 5,
      titulo: "Curso a Tu Ritmo",
      descripcion:
        "Suscripción mensual que te permite avanzar según tu disponibilidad, con acceso a materiales exclusivos y soporte personalizado.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      id: 6,
      titulo: "Asesoría de Viajes",
      descripcion:
        "Kit de supervivencia y asesoría personalizada para tus viajes a España, con consejos culturales y frases esenciales.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // Renderizamos el contenido principal
  const renderContent = () => (
    <div className="w-full max-w-6xl mx-auto relative z-10">
      {/* Encabezado de la sección */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nuestros <span className="text-brand-orange">Servicios</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ofrecemos una variedad de opciones para que encuentres la forma
          perfecta de aprender español según tus necesidades y objetivos.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:scale-105 border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-yellow/20 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
              {servicio.icono}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {servicio.titulo}
            </h3>
            <p className="text-gray-600 mb-6">{servicio.descripcion}</p>
            <Link
              href="/contacto"
              className="text-brand-orange font-medium inline-flex items-center group"
            >
              Más información
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1"
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

      {/* CTA para servicios */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-orange to-brand-yellow/90 rounded-xl p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para empezar tu viaje con el español?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Reserva una clase de prueba gratuita y descubre cómo podemos
            ayudarte a alcanzar tus objetivos de aprendizaje.
          </p>
          <Link
            href="/contacto"
            className="px-6 py-4 bg-white text-brand-orange text-lg font-medium rounded-md hover:bg-gray-100 transition-all shadow-md inline-block"
          >
            Reserva tu clase de prueba
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-16 px-4 min-h-screen">
      {isClient ? (
        <AnimatedBackground3D>{renderContent()}</AnimatedBackground3D>
      ) : (
        renderContent()
      )}
    </section>
  );
};

export default Servicios;
