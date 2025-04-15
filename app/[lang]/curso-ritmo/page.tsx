"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimatedBackground3D from "@/components/AnimatedBackground3D";
import CursoRitmoWaitlist from "@/components/CursoRitmoWaitlist";

// Importar las traducciones
async function getTranslations(locale: string) {
  try {
    const translations = await import(
      `@/public/locales/${locale}/curso-ritmo.json`
    );
    return translations.default;
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    // Fallback a español si hay error
    const fallback = await import("@/public/locales/es/curso-ritmo.json");
    return fallback.default;
  }
}

export default function CursoRitmoPage() {
  const params = useParams();
  const locale = (params?.lang as string) || "es";

  const [translations, setTranslations] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Cargar traducciones
    const loadTranslations = async () => {
      const trans = await getTranslations(locale);
      setTranslations(trans);
    };

    loadTranslations();
    setIsClient(true);
  }, [locale]);

  // Renderizar contenido principal
  const renderContent = () => {
    if (!translations) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          Cargando...
        </div>
      );
    }

    return (
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {translations.title}{" "}
            <span className="text-brand-orange">
              {translations.titleHighlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {translations.description}
          </p>
        </div>

        {/* Main content - Two columns on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Left column - Features and benefits */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {translations.benefitsTitle}
              </h2>

              <ul className="space-y-4">
                {translations.benefits.map((benefit: any, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 text-brand-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {translations.formatTitle}
              </h2>
              <ul className="space-y-4">
                {translations.format.map((item: any, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 text-brand-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Waitlist form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {translations.waitlistTitle}
              </h2>
              <p className="text-gray-700 mb-6">
                {translations.waitlistDescription}
              </p>

              <CursoRitmoWaitlist
                translations={translations.form}
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            {translations.faqTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {translations.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-orange to-brand-yellow/90 rounded-xl p-6 sm:p-12 shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              {translations.cta.title}
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              {translations.cta.description}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("waitlist-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-4 bg-white text-brand-orange text-base sm:text-lg font-medium rounded-md hover:bg-gray-100 transition-all shadow-md inline-block"
            >
              {translations.cta.button}
            </button>
          </div>
        </div>

        {/* Back to services link */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}`}
            className="text-brand-orange font-medium inline-flex items-center group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-1 transform transition-transform group-hover:-translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            {translations.backToServices}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-10 sm:py-16 px-4 min-h-[80vh] sm:min-h-screen">
      {isClient ? (
        <AnimatedBackground3D>{renderContent()}</AnimatedBackground3D>
      ) : (
        renderContent()
      )}
    </section>
  );
}
