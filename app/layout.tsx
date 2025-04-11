import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Configuración de la fuente Figtree
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Academia Español - Aprende español con profesores nativos",
  description: "Clases personalizadas, online y adaptadas a tu nivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={figtree.className}>
      <head>
        <link rel="icon" href="/images/FavIcon.png" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        {/* Espacio para compensar el header fijo */}
        <div className="pt-16 md:pt-20"></div>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
