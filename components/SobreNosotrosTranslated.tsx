export default function SobreNosotrosTranslated({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          {content}
        </p>
      </div>
    </section>
  );
}
