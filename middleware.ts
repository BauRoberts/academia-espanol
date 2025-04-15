import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./lib/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Si estamos en la ruta raíz exacta, no hacer nada (la página se encargará de redirigir)
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Verificar si el prefijo de idioma ya está presente
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Si no tiene prefijo de idioma, redirigir
  if (pathnameIsMissingLocale) {
    // Usar el idioma predeterminado
    const locale = i18n.defaultLocale;

    // Construir la URL con el prefijo de idioma
    const newPath = `/${locale}${
      pathname.startsWith("/") ? "" : "/"
    }${pathname}`;

    // Redirigir a la versión con el idioma
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Modificado para excluir también la carpeta 'images'
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
