type BeneficioItem = {
  online: string;
  certified: string;
  flexible: string;
};

export default function BeneficiosTranslated({
  title,
  items,
}: {
  title: string;
  items: BeneficioItem;
}) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              {items.online}
            </h3>
            <p className="text-gray-600">
              Aprende desde cualquier lugar del mundo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              {items.certified}
            </h3>
            <p className="text-gray-600">
              Instructores con experiencia y certificaciones.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              {items.flexible}
            </h3>
            <p className="text-gray-600">
              Adapta tus clases a tu horario y necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
