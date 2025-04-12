import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otras configuraciones que puedas tener
  reactStrictMode: true,
  swcMinify: true,

  // Ignorar errores de ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Si también quieres ignorar errores de TypeScript durante la compilación
  typescript: {
    // ¡Solo para producción! En desarrollo es mejor mantenerlo activado
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
