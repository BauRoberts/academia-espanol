"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Detectar scroll y medir altura del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Medimos al cargar y al cambiar el tamaño de la ventana
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Calculamos la altura del blur basado en la altura del header + padding
  const blurHeight = headerHeight + 12; // 24px es el padding total (py-3 * 2)

  return (
    <>
      {/* Blur overlay con altura dinámica */}
      <div
        className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-xl z-40"
        style={{ height: `${blurHeight}px` }}
      ></div>

      {/* Blur overlay en los laterales con la misma altura */}
      <div
        className="fixed top-0 left-0 w-16 bg-white/10 backdrop-blur-md z-30"
        style={{ height: `${blurHeight}px` }}
      ></div>
      <div
        className="fixed top-0 right-0 w-16 bg-white/10 backdrop-blur-md z-30"
        style={{ height: `${blurHeight}px` }}
      ></div>

      {/* Header flotante */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 flex justify-center">
        <header
          ref={headerRef}
          className={`w-full max-w-6xl mx-auto rounded-xl px-4 md:px-6 py-2 transition-all duration-300
            border border-gray-200
            ${
              scrolled
                ? "bg-white/90 backdrop-blur-md shadow-md"
                : "bg-white/80 backdrop-blur-sm shadow-sm"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.png"
                alt="Españoling"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center justify-center flex-1 px-10">
              <div className="flex gap-8">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-brand-orange transition-colors text-sm font-medium"
                >
                  Inicio
                </Link>
                <Link
                  href="/profesores"
                  className="text-gray-700 hover:text-brand-orange transition-colors text-sm font-medium"
                >
                  Profesores
                </Link>
              </div>
            </nav>

            {/* Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contacto"
                className="px-5 py-1.5 bg-brand-orange text-white rounded-md hover:bg-opacity-90 transition-colors text-sm font-medium"
              >
                Agenda tu clase
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile menu - Como overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-20">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-6 text-center">
              <Link
                href="/"
                className="text-xl text-gray-800 hover:text-brand-orange transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/profesores"
                className="text-xl text-gray-800 hover:text-brand-orange transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profesores
              </Link>
              <div className="pt-6">
                <Link
                  href="/contacto"
                  className="mx-auto px-8 py-3 bg-brand-orange text-white rounded-md hover:bg-opacity-90 transition-colors inline-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agenda tu clase
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
