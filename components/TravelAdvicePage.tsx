"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Plane,
  Coffee,
  Heart,
  Star,
  CheckCircle,
} from "lucide-react";

// Tipos para las traducciones
type TravelTranslations = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    stats: {
      travelers: string;
      cities: string;
      rating: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  destinations: {
    title: string;
    subtitle: string;
    cities: Array<{
      name: string;
      highlights: string[];
    }>;
  };
  included: {
    title: string;
    subtitle: string;
    image_text: string;
    items: string[];
  };
  testimonials: {
    title: string;
    items: Array<{
      name: string;
      country: string;
      text: string;
      rating: number;
    }>;
  };
  final_cta: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    guarantees: string;
  };
};

type TravelAdvicePageProps = {
  currentLocale: string;
  translations: TravelTranslations;
};

const TravelAdvicePage = ({
  currentLocale,
  translations,
}: TravelAdvicePageProps) => {
  const featureIcons = [
    <MapPin className="w-8 h-8" key="map" />,
    <MessageCircle className="w-8 h-8" key="message" />,
    <Coffee className="w-8 h-8" key="coffee" />,
    <Heart className="w-8 h-8" key="heart" />,
  ];

  const destinationEmojis = ["🏛️", "🏖️", "💃", "🥘", "🎨", "🏰"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Plane className="w-5 h-5 text-brand-orange" />
                <span className="text-sm font-medium text-gray-700">
                  {translations.hero.badge}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {translations.hero.title}
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                {translations.hero.subtitle}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">500+</div>
                <div className="text-sm text-gray-600">
                  {translations.hero.stats.travelers}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">15+</div>
                <div className="text-sm text-gray-600">
                  {translations.hero.stats.cities}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">4.9</div>
                <div className="text-sm text-gray-600">
                  ⭐ {translations.hero.stats.rating}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-orange text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {translations.hero.cta_primary}
              </button>
              <button className="px-8 py-4 border-2 border-brand-orange text-brand-orange text-lg font-semibold rounded-lg hover:bg-brand-orange hover:text-white transition-all">
                {translations.hero.cta_secondary}
              </button>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="/images/spain.png"
                alt="España - Travel Advice"
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {translations.features.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {translations.features.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.features.items.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full mb-4">
                  {featureIcons[index]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {translations.destinations.title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {translations.destinations.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {translations.destinations.cities.map((destination, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">
                    {destinationEmojis[index]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {destination.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {translations.included.title}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {translations.included.subtitle}
              </p>

              <div className="space-y-4">
                {translations.included.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-brand-orange/20 to-brand-yellow/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-6xl mb-4">📖</div>
                  <p className="text-lg text-gray-700">
                    {translations.included.image_text}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {translations.testimonials.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {translations.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.country}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            className="bg-brand-orange rounded-3xl p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {translations.final_cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {translations.final_cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-brand-orange text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg">
                {translations.final_cta.cta_primary}
              </button>
              <button className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-brand-orange transition-all">
                {translations.final_cta.cta_secondary}
              </button>
            </div>

            <div className="mt-8 text-white/80">
              <p className="text-sm">💳 {translations.final_cta.guarantees}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TravelAdvicePage;
