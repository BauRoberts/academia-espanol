"use client";

import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  // Array de artículos de ejemplo
  const articulos = [
    {
      id: 1,
      titulo: "Cómo mejorar tu fluidez en español en 30 días",
      fecha: "25 Septiembre, 2024",
      imagen: "/images/blog/articulo1.jpg",
      slug: "/blog/mejorar-fluidez-espanol",
    },
    {
      id: 2,
      titulo: "Los mejores recursos gratuitos para aprender español",
      fecha: "21 Septiembre, 2024",
      imagen: "/images/blog/articulo2.jpg",
      slug: "/blog/recursos-gratuitos-espanol",
    },
    {
      id: 3,
      titulo: "Guía completa para los verbos irregulares en español",
      fecha: "18 Septiembre, 2024",
      imagen: "/images/blog/articulo3.jpg",
      slug: "/blog/verbos-irregulares-espanol",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      {/* Encabezado de la sección */}
      <div className="flex flex-col items-center justify-center px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Artículos y <span className="text-brand-orange">Recursos</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl text-center">
          Nuestros profesores comparten consejos, técnicas y recursos para que
          puedas mejorar tu español de forma efectiva.
        </p>
      </div>

      {/* Cuadrícula de artículos */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articulos.map((articulo) => (
              <div
                key={articulo.id}
                className="rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg"
              >
                {/* Imagen del artículo */}
                <div className="relative h-60">
                  <Image
                    src={articulo.imagen}
                    alt={articulo.titulo}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contenido del artículo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {articulo.titulo}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-600">
                      {articulo.fecha}
                    </span>

                    <Link
                      href={articulo.slug}
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-brand-orange hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Botón "Ver más artículos" */}
      <div className="flex justify-center mt-12">
        <Link
          href="/blog"
          className="px-6 py-4 bg-white text-brand-orange border border-brand-orange text-lg font-medium rounded-md hover:bg-brand-orange hover:text-white transition-all"
        >
          Ver más artículos
        </Link>
      </div>
    </section>
  );
};

export default Blog;
