"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Tipos para las traducciones
type TeachersTranslations = {
  hero: {
    title: string;
    subtitle: string;
  };
  section: {
    title: string;
    subtitle: string;
  };
  profesores: {
    natan: {
      name: string;
      title: string;
      bio: string;
      specialties: string[];
      experience: string;
      university: string;
    };
    mili: {
      name: string;
      title: string;
      bio: string;
      specialties: string[];
      experience: string;
      background: string;
    };
  };
  common: {
    specialties_label: string;
    experience_label: string;
    book_class: string;
  };
};

type ProfesoresSectionProps = {
  currentLocale: string;
  translations: TeachersTranslations;
};

const ProfesoresSection = ({
  currentLocale,
  translations,
}: ProfesoresSectionProps) => {
  // Traducciones para los badges según el idioma
  const getBadgeLabels = (locale: string) => {
    const labels = {
      es: {
        experience: "años experiencia",
        countries: "países enseñados",
        personalized: "personalizado",
      },
      en: {
        experience: "years experience",
        countries: "countries taught",
        personalized: "personalized",
      },
      fr: {
        experience: "ans d'expérience",
        countries: "pays enseignés",
        personalized: "personnalisé",
      },
      pt: {
        experience: "anos experiência",
        countries: "países ensinados",
        personalized: "personalizado",
      },
      pl: {
        experience: "lat doświadczenia",
        countries: "krajów nauczanych",
        personalized: "spersonalizowany",
      },
    };

    return labels[locale as keyof typeof labels] || labels.es;
  };

  const badgeLabels = getBadgeLabels(currentLocale);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido del Hero */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {translations.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {translations.hero.subtitle}
              </p>
            </div>

            {/* Badges de experiencia */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg shadow-md px-4 py-2 border border-gray-100">
                <div className="text-2xl font-bold text-brand-orange">3+</div>
                <div className="text-sm text-gray-600">
                  {badgeLabels.experience}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md px-4 py-2 border border-gray-100">
                <div className="text-2xl font-bold text-brand-orange">20+</div>
                <div className="text-sm text-gray-600">
                  {badgeLabels.countries}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md px-4 py-2 border border-gray-100">
                <div className="text-2xl font-bold text-brand-orange">100%</div>
                <div className="text-sm text-gray-600">
                  {badgeLabels.personalized}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagen del Hero */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="/images/profesores/profesores-section.png"
                alt="Profesores de español - Natan y Mili"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Espacio inferior vacío */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="h-10"></div>
        </div>
      </section>

      {/* Sección de Profesores */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header de la sección */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {translations.section.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {translations.section.subtitle}
            </p>
          </motion.div>

          {/* Cards de profesores */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card Natan */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden group">
                {/* Imagen normal */}
                <Image
                  src="/images/profesores/natan-car.png"
                  alt={translations.profesores.natan.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Imagen hover */}
                <Image
                  src="/images/profesores/natan.png"
                  alt={translations.profesores.natan.name}
                  fill
                  className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold">
                    {translations.profesores.natan.name}
                  </h3>
                  <p className="text-white/90">
                    {translations.profesores.natan.title}
                  </p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-6 flex-1 flex flex-col">
                {/* Descripción */}
                <div className="space-y-4 flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {translations.profesores.natan.bio}
                  </p>

                  {/* Universidad destacada */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">🎓 Formación:</span>{" "}
                      {translations.profesores.natan.university}
                    </p>
                  </div>

                  {/* Especialidades */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {translations.common.specialties_label}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translations.profesores.natan.specialties.map(
                        (specialty, index) => (
                          <span
                            key={index}
                            className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">
                        {translations.common.experience_label}:
                      </span>{" "}
                      {translations.profesores.natan.experience}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/${currentLocale}/contacto`}
                  className="w-full py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all mt-auto text-center block"
                >
                  {translations.common.book_class}
                </Link>
              </div>
            </motion.div>

            {/* Card Mili */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Imagen */}
              <div className="relative h-80 overflow-hidden group">
                {/* Imagen normal */}
                <Image
                  src="/images/profesores/mili-car.png"
                  alt={translations.profesores.mili.name}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                {/* Imagen hover */}
                <Image
                  src="/images/profesores/mili.png"
                  alt={translations.profesores.mili.name}
                  fill
                  className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold">
                    {translations.profesores.mili.name}
                  </h3>
                  <p className="text-white/90">
                    {translations.profesores.mili.title}
                  </p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 space-y-6 flex-1 flex flex-col">
                {/* Descripción */}
                <div className="space-y-4 flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {translations.profesores.mili.bio}
                  </p>

                  {/* Background destacado */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">🌎 Background:</span>{" "}
                      {translations.profesores.mili.background}
                    </p>
                  </div>

                  {/* Especialidades */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      {translations.common.specialties_label}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {translations.profesores.mili.specialties.map(
                        (specialty, index) => (
                          <span
                            key={index}
                            className="bg-brand-yellow/20 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Experiencia */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">
                        {translations.common.experience_label}:
                      </span>{" "}
                      {translations.profesores.mili.experience}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/${currentLocale}/contacto`}
                  className="w-full py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all mt-auto text-center block"
                >
                  {translations.common.book_class}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfesoresSection;
