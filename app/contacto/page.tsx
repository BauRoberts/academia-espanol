export default function ContactoPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Agenda tu clase
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-8">
            Selecciona el horario que mejor se adapte a tu disponibilidad para
            comenzar tu aprendizaje de español con uno de nuestros profesores
            nativos.
          </p>

          <div className="bg-white shadow-md rounded-lg p-6">
            {/* Aquí iría el embebido de Cal.com */}
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">
                Calendario de reservas (Cal.com se integrará aquí)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
