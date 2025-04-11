"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-brand-orange text-white flex items-center justify-center font-bold">
                AE
              </div>
              <span className="text-xl font-bold">Academia Español</span>
            </Link>
            <p className="text-gray-600">
              Clases personalizadas de español con profesores nativos para
              estudiantes de todo el mundo.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-brand-orange"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/profesores"
                  className="text-gray-600 hover:text-brand-orange"
                >
                  Profesores
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-600 hover:text-brand-orange"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                info@academiaespanol.com
              </li>
              <li className="text-gray-600">
                <span className="font-medium">Teléfono:</span> +34 123 456 789
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {/* Redes sociales */}
              <a href="#" className="text-gray-600 hover:text-brand-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Academia Español. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
