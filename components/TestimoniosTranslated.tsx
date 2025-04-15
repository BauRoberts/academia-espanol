///Users/bautistaroberts/academia-espanol/components/TestimoniosTranslated.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Definimos el tipo para los testimonios
type Testimonio = {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
};

type TestimoniosTranslatedProps = {
  translations: {
    titleSuffix: string;
    items: Testimonio[];
  };
};

const TestimoniosTranslated = ({
  translations,
}: TestimoniosTranslatedProps) => {
  // Asegurarnos de tener valores predeterminados en caso de que translations sea undefined
  const testimonios = translations?.items || [];
  const titleSuffix = translations?.titleSuffix || "fue increíble!";

  // Estado para controlar el testimonio activo
  const [testimonioActivo, setTestimonioActivo] = useState(0);

  // Estado para controlar si la rotación automática está pausada
  const [isPaused, setIsPaused] = useState(false);

  // Referencia para el intervalo de cambio automático
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cambiar automáticamente el testimonio cada 5 segundos
  useEffect(() => {
    // Si no hay testimonios, no hacer nada
    if (testimonios.length === 0) return;

    // Función para cambiar al siguiente testimonio
    const siguienteTestimonio = () => {
      setTestimonioActivo((prev) => (prev + 1) % testimonios.length);
    };

    // Si no está pausado, iniciar el intervalo
    if (!isPaused) {
      intervalRef.current = setInterval(siguienteTestimonio, 5000);
    }

    // Limpiar el intervalo cuando el componente se desmonte o cuando cambie isPaused
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonios.length]);

  // Función para pausar la rotación automática al interactuar
  const handleDotClick = (index: number) => {
    // Pausar temporalmente la rotación
    setIsPaused(true);

    // Cambiar al testimonio seleccionado
    setTestimonioActivo(index);

    // Reanudar la rotación después de 10 segundos
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Si no hay testimonios, no renderizar nada
  if (testimonios.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-10 sm:py-16 md:py-24 bg-white">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center text-center relative transition-opacity duration-500">
        {/* Comillas grandes */}
        <div className="mb-3 sm:mb-4 text-gray-300">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="sm:w-[60px] sm:h-[60px]"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </div>

        {/* Título principal del testimonio */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          <span className="text-brand-orange">
            {testimonios[testimonioActivo].name}
          </span>{" "}
          {titleSuffix}
        </h2>

        {/* Texto del testimonio */}
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
          {testimonios[testimonioActivo].text}
        </p>

        {/* Información de la persona */}
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-brand-orange">
            <Image
              src={testimonios[testimonioActivo].image}
              alt={testimonios[testimonioActivo].name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="font-medium text-gray-900">
            {testimonios[testimonioActivo].name}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            {testimonios[testimonioActivo].location}
          </p>
        </div>

        {/* Controles de navegación (puntos) */}
        <div className="flex justify-center gap-2">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                testimonioActivo === index
                  ? "bg-brand-orange"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver testimonio de ${testimonios[index].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosTranslated;
