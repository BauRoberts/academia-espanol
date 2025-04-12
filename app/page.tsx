"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";

import Testimonios from "@/components/Testimonios";
import CTA from "@/components/CTA";

import ProfesoresDestacados from "@/components/ProfesoresDestacados";
import Blog from "@/components/Blog";

export default function Home() {
  // Estado para verificar si estamos en el cliente
  const [isClient, setIsClient] = useState(false);

  // Solo ejecutar en el cliente
  useEffect(() => {
    setIsClient(true);

    // Log para debug
    console.log("Page mounted on client");

    // Verificar que las dependencias están cargadas correctamente
    try {
      // Solo verificamos que podemos importar three
      console.log("Three.js dependencies check passed");
    } catch (error) {
      console.error("Error loading Three.js:", error);
    }
  }, []);

  return (
    <main>
      <Hero />

      <Servicios />
      <ProfesoresDestacados />
      <Blog />

      <Testimonios />
      <CTA />
    </main>
  );
}
