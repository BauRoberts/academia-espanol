import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand-orange py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ¿Listo para empezar?
        </h2>
        <Link
          href="/contacto"
          className="bg-white text-brand-orange px-6 py-3 rounded-md inline-block"
        >
          Agenda tu clase
        </Link>
      </div>
    </section>
  );
}
