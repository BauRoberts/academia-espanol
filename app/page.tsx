import { redirect } from "next/navigation";
import { i18n } from "@/lib/i18n/config";

export default function Home() {
  // Redirigir a la versión con idioma por defecto
  redirect(`/${i18n.defaultLocale}`);
}
