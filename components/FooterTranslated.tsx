///Users/bautistaroberts/academia-espanol/components/FooterTranslated.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

type FooterTranslatedProps = {
  currentLocale: string;
  translations: {
    description: string;
    links: {
      title: string;
      home: string;
      teachers: string;
      blog: string;
      contact: string;
    };
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string;
    };
    legal: {
      copyright: string;
      terms: string;
      privacy: string;
      cookies: string;
    };
  };
};

const FooterTranslated = ({
  currentLocale,
  translations,
}: FooterTranslatedProps) => {
  // Fallback values for translations if they are undefined
  const description =
    translations?.description ||
    "Bienvenidos a bordo a esta aventura con destino a: aprender español.";

  const linksTitle = translations?.links?.title || "Enlaces";
  const homeLink = translations?.links?.home || "Inicio";
  const teachersLink = translations?.links?.teachers || "Profesores";
  const blogLink = translations?.links?.blog || "Blog";
  const contactLink = translations?.links?.contact || "Contacto";

  const contactTitle = translations?.contact?.title || "Contacto";
  const phone = translations?.contact?.phone || "+34 614 52 26 59";
  const email = translations?.contact?.email || "espanolingvlc@outlook.es";

  const copyright = (
    translations?.legal?.copyright ||
    "© {year} Españoling. Todos los derechos reservados."
  ).replace("{year}", new Date().getFullYear().toString());
  const terms = translations?.legal?.terms || "Términos y condiciones";
  const privacy = translations?.legal?.privacy || "Política de privacidad";
  const cookies = translations?.legal?.cookies || "Cookies";

  return (
    <footer className="relative w-full pt-16 pb-10 overflow-hidden">
      {/* Fondos con blur y degradado */}
      <div className="absolute inset-0 bg-gray-50/80 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-yellow/20 blur-3xl -z-10"></div>

      <div className="flex justify-center px-4 w-full">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="flex flex-col md:col-span-2">
              <Link
                href={`/${currentLocale}`}
                className="flex items-center gap-2 mb-6"
              >
                <Image
                  src="/images/Logo.png"
                  alt="Españoling"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-600 mb-6 max-w-md">{description}</p>
              <div className="flex space-x-4">
                {/* Redes sociales */}
                <a
                  href="https://www.instagram.com/espanoling.es/#"
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-900">
                {linksTitle}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`/${currentLocale}`}
                    className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                    {homeLink}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${currentLocale}/profesores`}
                    className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                    {teachersLink}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${currentLocale}/blog`}
                    className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                    {blogLink}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${currentLocale}/contacto`}
                    className="text-gray-600 hover:text-brand-orange transition-all inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                    {contactLink}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-gray-900">
                {contactTitle}
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
                  {phone}
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
                  {email}
                </li>
              </ul>
            </div>
          </div>

          {/* Barra legal con degradado */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">{copyright}</p>
              <div className="flex items-center space-x-6">
                <Link
                  href={`/${currentLocale}/terminos`}
                  className="text-gray-500 hover:text-brand-orange text-sm"
                >
                  {terms}
                </Link>
                <Link
                  href={`/${currentLocale}/privacidad`}
                  className="text-gray-500 hover:text-brand-orange text-sm"
                >
                  {privacy}
                </Link>
                <Link
                  href={`/${currentLocale}/cookies`}
                  className="text-gray-500 hover:text-brand-orange text-sm"
                >
                  {cookies}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTranslated;
