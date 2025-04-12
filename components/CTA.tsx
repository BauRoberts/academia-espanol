"use client";

import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-brand-orange to-brand-yellow">
      <div className="flex justify-center px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Columna de texto - Lado izquierdo */}
            <div className="md:w-2/3 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Listo para comenzar tu aventura
                <span className="block mt-2">con el español?</span>
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Reserva ahora tu primera clase gratuita y descubre cómo nuestra
                metodología personalizada te ayudará a alcanzar la fluidez que
                siempre has deseado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-white text-brand-orange text-lg font-medium rounded-md hover:bg-gray-100 transition-all shadow-md inline-flex items-center justify-center"
                >
                  Reserva tu clase gratuita
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
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-medium rounded-md hover:bg-white/10 transition-all inline-flex items-center justify-center"
                >
                  Ver cómo funcionan las clases
                </Link>
              </div>
            </div>

            {/* Elemento visual - Lado derecho */}
            <div className="md:w-1/3 relative">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">98%</h3>
                    <p className="text-white/80">Tasa de satisfacción</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">100%</h3>
                    <p className="text-white/80">Personalizado</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-brand-orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">+1000</h3>
                    <p className="text-white/80">Estudiantes satisfechos</p>
                  </div>
                </div>
              </div>

              {/* Decoración flotante */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-3xl font-bold text-brand-orange">¡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
