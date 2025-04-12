"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-10 overflow-hidden">
      {/* Fondos con blur y degradado */}
      <div className="absolute inset-0 bg-gray-50/80 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-yellow/20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="flex flex-col md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/Logo.png"
                alt="Españoling"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Bienvenidos a bordo a esta aventura con destino a: aprender
              español. Nuestra metodología consiste en hacer que ganes
              confianza, entiendas y hables desde la primera clase.
            </p>
            <div className="flex space-x-4">
              {/* Redes sociales */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow hover:text-brand-orange transition-all"
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
                  className="text-gray-700"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow hover:text-brand-orange transition-all"
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
                  className="text-gray-700"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow hover:text-brand-orange transition-all"
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
                  className="text-gray-700"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow hover:text-brand-orange transition-all"
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
                  className="text-gray-700"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Enlaces
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/profesores"
                  className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Profesores
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
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
                  className="mr-3 text-brand-orange"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +34 123 456 789
              </li>
              <li className="flex items-center text-gray-600">
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
                  className="mr-3 text-brand-orange"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@espanoling.com
              </li>
              <li className="flex items-center text-gray-600">
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
                  className="mr-3 text-brand-orange"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Madrid, España
              </li>
            </ul>
          </div>
        </div>

        {/* Barra legal con degradado */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Españoling. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/terminos"
                className="text-gray-500 hover:text-brand-orange text-sm"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/privacidad"
                className="text-gray-500 hover:text-brand-orange text-sm"
              >
                Política de privacidad
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-brand-orange text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
