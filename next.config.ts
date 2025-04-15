import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuraciones existentes
  reactStrictMode: true,

  // Ignorar errores de ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Si también quieres ignorar errores de TypeScript durante la compilación
  typescript: {
    // ¡Solo para producción! En desarrollo es mejor mantenerlo activado
    ignoreBuildErrors: true,
  },

  // Configuración para imágenes
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["images.ctfassets.net"], // Añadimos el dominio de Contentful
  },

  // Añadir configuraciones experimentales para Next.js 15.3.0
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
