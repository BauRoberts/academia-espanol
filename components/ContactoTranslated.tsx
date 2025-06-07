///Users/bautistaroberts/academia-espanol/components/ContactoTranslated.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ContactoTranslatedProps = {
  currentLocale: string;
  translations: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      placeholder: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    };
    calendar: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      phone: string;
      address: string;
      social: string;
    };
    faq: {
      title: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
  };
};

const ContactoTranslated = ({
  currentLocale,
  translations,
}: ContactoTranslatedProps) => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulación de envío del formulario
    setTimeout(() => {
      // Simulamos un éxito el 90% de las veces
      if (Math.random() > 0.1) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    }, 1500);
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado de la página - Ajustado para responsividad */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            {translations.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Formulario de contacto - Ajustado para responsividad */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1 sm:mb-2"
                >
                  {translations.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={translations.form.placeholder.name}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1 sm:mb-2"
                >
                  {translations.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={translations.form.placeholder.email}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-1 sm:mb-2"
                >
                  {translations.form.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={translations.form.placeholder.subject}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1 sm:mb-2"
                >
                  {translations.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={translations.form.placeholder.message}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-orange text-white text-base sm:text-lg font-medium rounded-md hover:bg-opacity-90 transition-all shadow-md disabled:opacity-70"
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {translations.form.submit}
                  </span>
                ) : (
                  translations.form.submit
                )}
              </button>

              {formStatus === "success" && (
                <div className="p-3 sm:p-4 bg-green-100 text-green-700 rounded-md text-center text-sm sm:text-base">
                  {translations.form.success}
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-3 sm:p-4 bg-red-100 text-red-700 rounded-md text-center text-sm sm:text-base">
                  {translations.form.error}
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto y calendario - Ajustado para responsividad */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Cal.com Embed */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {translations.calendar.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                {translations.calendar.description}
              </p>
              <div className="h-48 sm:h-64 bg-gray-50 rounded-md border border-gray-200 flex items-center justify-center">
                {/* Cal.com se integrará aquí */}
                <span className="text-gray-500 text-sm sm:text-base">
                  Cal.com iframe
                </span>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {translations.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                {translations.contact.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-brand-orange rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">
                      Email
                    </h3>
                    <Link
                      href="mailto:espanolingvlc@outlook.es"
                      className="text-brand-orange hover:underline text-sm sm:text-base"
                    >
                      espanolingvlc@outlook.es
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-brand-yellow rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">
                      Teléfono
                    </h3>
                    <Link
                      href="tel:+34614522659"
                      className="text-brand-orange hover:underline text-sm sm:text-base"
                    >
                      +34 614 52 26 59
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-brand-yellow rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">
                      Redes Sociales
                    </h3>
                    <p className="text-gray-700 mb-2 text-sm sm:text-base">
                      {translations.contact.social}
                    </p>
                    <div className="flex space-x-3 sm:space-x-4">
                      <Link
                        href="https://www.instagram.com/espanoling.es/"
                        className="text-gray-700 hover:text-brand-orange"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes - Ajustado para responsividad */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            {translations.faq.title}
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {translations.faq.questions.map(
              (item: { question: string; answer: string }, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-brand-orange mb-2 sm:mb-3">
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.answer}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoTranslated;
