"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Definimos el tipo para los testimonios
type Testimonio = {
  id: number;
  nombre: string;
  ubicacion: string;
  texto: string;
  imagen: string;
};

const TestimoniosAlt = () => {
  // Array de testimonios
  const testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: "Anna L.",
      ubicacion: "Chicago, IL",
      texto:
        "Peter's expertise and dedication made all the difference in my case, and I felt supported every step of the way.",
      imagen: "/api/placeholder/150/150", // Usar placeholder en lugar de archivos físicos
    },
    {
      id: 2,
      nombre: "Carlos M.",
      ubicacion: "Madrid, España",
      texto:
        "Las clases son increíblemente dinámicas y divertidas. He aprendido más español en 3 meses que en años de estudio tradicional.",
      imagen: "/api/placeholder/150/150", // Usar placeholder en lugar de archivos físicos
    },
    {
      id: 3,
      nombre: "Sophie D.",
      ubicacion: "París, Francia",
      texto:
        "Los profesores son excepcionales y adaptan cada clase a mis necesidades. ¡Mi español ha mejorado muchísimo!",
      imagen: "/api/placeholder/150/150", // Usar placeholder en lugar de archivos físicos
    },
    {
      id: 4,
      nombre: "Markus W.",
      ubicacion: "Berlín, Alemania",
      texto:
        "El enfoque personalizado de Españoling me ha permitido avanzar a mi propio ritmo. Recomiendo 100% esta academia.",
      imagen: "/api/placeholder/150/150", // Usar placeholder en lugar de archivos físicos
    },
  ];

  // Estado para controlar el testimonio activo
  const [testimonioActivo, setTestimonioActivo] = useState(0);

  // Estado para controlar si la rotación automática está pausada
  const [isPaused, setIsPaused] = useState(false);

  // Referencia para el intervalo de cambio automático
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cambiar automáticamente el testimonio cada 5 segundos
  useEffect(() => {
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

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center text-center relative transition-opacity duration-500">
        {/* Comillas grandes */}
        <div className="mb-4 text-gray-300">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </div>

        {/* Título principal del testimonio */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="text-brand-orange">
            {testimonios[testimonioActivo].nombre}
          </span>{" "}
          fue increíble!
        </h2>

        {/* Texto del testimonio */}
        <p className="text-lg text-gray-700 mb-10">
          {testimonios[testimonioActivo].texto}
        </p>

        {/* Información de la persona */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-orange">
            <Image
              src={testimonios[testimonioActivo].imagen}
              alt={testimonios[testimonioActivo].nombre}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="font-medium text-gray-900">
            {testimonios[testimonioActivo].nombre}
          </h3>
          <p className="text-gray-600 text-sm">
            {testimonios[testimonioActivo].ubicacion}
          </p>
        </div>

        {/* Controles de navegación (puntos) */}
        <div className="flex justify-center gap-2">
          {testimonios.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                testimonioActivo === index
                  ? "bg-brand-orange"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ver testimonio de ${testimonios[index].nombre}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosAlt;
