"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

type TeachersTranslations = {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  profesores: {
    natan: {
      name: string;
      title: string;
      bio: string;
      specialties: string[];
      experience: string;
    };
    mili: {
      name: string;
      title: string;
      bio: string;
      specialties: string[];
      experience: string;
    };
  };
};

type ProfesoresSectionProps = {
  currentLocale: string;
  translations: TeachersTranslations;
};

// Componente de texto que rota palabras
const RotatingWords = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // cambiar cada 2 segundos

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block relative ${className || ""}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`absolute transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {word}
        </span>
      ))}
      {/* Espacio vacío para mantener el layout mientras las palabras rotan */}
      <span className="opacity-0">{words[0]}</span>
    </span>
  );
};

const ProfesoresSection = ({
  currentLocale,
  translations,
}: ProfesoresSectionProps) => {
  // Palabras para el efecto de rotación
  const natanKeywords = ["dinámico", "práctico", "conversacional", "efectivo"];
  const miliKeywords = [
    "estructurada",
    "innovadora",
    "analítica",
    "apasionada",
  ];

  // Adaptamos las palabras según el idioma
  const getKeywords = (locale: string, isNatan: boolean) => {
    const keywords = isNatan ? natanKeywords : miliKeywords;

    // Si no es español, devolvemos las palabras en inglés como ejemplo
    // Esto debería adaptarse según tus traducciones reales
    if (locale !== "es") {
      return isNatan
        ? ["dynamic", "practical", "conversational", "effective"]
        : ["structured", "innovative", "analytical", "passionate"];
    }

    return keywords;
  };

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Encabezado de la sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {translations.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6">
            {translations.subtitle}
          </p>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            {translations.description}
          </p>
        </motion.div>

        {/* Profesor Natan - Imagen izquierda, texto derecha */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16 gap-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full md:w-2/5">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              className="w-full"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/profesores/natan.png"
                  alt={translations.profesores.natan.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-xl">
                      {translations.profesores.natan.name}
                    </p>
                    <p className="text-white/90">
                      {translations.profesores.natan.title}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {translations.profesores.natan.name}
            </h2>
            <p className="text-lg text-gray-800 font-medium mb-4">
              {translations.profesores.natan.title}
            </p>
            <p className="text-gray-700 mb-4">
              {translations.profesores.natan.bio
                .split(" ")
                .slice(0, -20)
                .join(" ")}{" "}
              <span className="text-black font-semibold">
                <RotatingWords words={getKeywords(currentLocale, true)} />
              </span>{" "}
              {translations.profesores.natan.bio
                .split(" ")
                .slice(-20)
                .join(" ")}
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Especialidades:
              </h4>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {translations.profesores.natan.specialties.map(
                  (specialty, index) => (
                    <motion.span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      {specialty}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Experiencia: </span>
              {translations.profesores.natan.experience}
            </p>
          </div>
        </motion.div>

        {/* Profesora Mili - Texto izquierda, imagen derecha */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center mb-16 gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full md:w-2/5">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={1000}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              className="w-full"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/profesores/mili.png"
                  alt={translations.profesores.mili.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-xl">
                      {translations.profesores.mili.name}
                    </p>
                    <p className="text-white/90">
                      {translations.profesores.mili.title}
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {translations.profesores.mili.name}
            </h2>
            <p className="text-lg text-gray-800 font-medium mb-4">
              {translations.profesores.mili.title}
            </p>
            <p className="text-gray-700 mb-4">
              {translations.profesores.mili.bio
                .split(" ")
                .slice(0, -20)
                .join(" ")}{" "}
              <span className="text-black font-semibold">
                <RotatingWords words={getKeywords(currentLocale, false)} />
              </span>{" "}
              {translations.profesores.mili.bio.split(" ").slice(-20).join(" ")}
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                Especialidades:
              </h4>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {translations.profesores.mili.specialties.map(
                  (specialty, index) => (
                    <motion.span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      {specialty}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Experiencia: </span>
              {translations.profesores.mili.experience}
            </p>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={`/${currentLocale}/contacto`}
            className="inline-block px-8 py-4 bg-brand-orange text-white text-lg font-medium rounded-md hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            {translations.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfesoresSection;
