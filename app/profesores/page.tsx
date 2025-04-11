export default function ProfesoresPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nuestros Profesores
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profesor de ejemplo - duplicar según sea necesario */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-200">
              {/* Aquí iría la imagen del profesor */}
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">María García</h2>
              <p className="text-gray-700 mb-4">
                Especialista en español para principiantes con 5 años de
                experiencia.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-brand-yellow text-xs px-2 py-1 rounded">
                  Conversación
                </span>
                <span className="bg-brand-yellow text-xs px-2 py-1 rounded">
                  Gramática
                </span>
              </div>
              <button className="bg-brand-orange text-white px-4 py-2 rounded w-full">
                Agendar clase
              </button>
            </div>
          </div>

          {/* Más profesores irían aquí */}
        </div>
      </div>
    </main>
  );
}
