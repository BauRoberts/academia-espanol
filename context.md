# Contexto de la Aplicación - Academia de Español

Desarrollamos una plataforma de presentación para una academia de español, orientada a estudiantes de todo el mundo. El objetivo principal es mostrar la propuesta de valor de la academia, destacar al equipo de profesores, y facilitar la reserva de clases a través de una integración con cal.com.

## Estructura del Proyecto Implementada (Next.js + Tailwind CSS v4)

```
academia-espanol/
.
├── README.md
├── app
│ ├── [lang]
│ │ ├── blog
│ │ │ ├── [slug]
│ │ │ │ └── page.tsx
│ │ │ └── page.tsx
│ ├── contacto
│ ├── favIcon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.tsx
│ └── profesores
├── components
│ ├── AnimatedBackground3D.tsx
│ ├── Blog.tsx
│ ├── BlogItem.tsx
│ ├── CategoryFilter.tsx
│ ├── CTA.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── ProfesoresDestacados.tsx
│ ├── RichTextRenderer.tsx
│ ├── Servicios.tsx
│ └── Testimonios.tsx
├── context.md
├── eslint.config.mjs
├── lib
│ ├── contentful
│ │ ├── client.ts
│ │ ├── config.ts
│ │ └── api.ts
│ ├── i18n
│ └── utils.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── types
    ├── index.ts
    └── contentful.ts
```

## Landing Page - Secciones Implementadas

### Encabezado (Header)

- Logo con nombre de la academia.
- Menú de navegación: Inicio | Profesores | Blog | Agenda tu clase.
- Implementado con los colores de marca (#FF6725 y #FFCE4A).

### Hero Section

- Título: "Aprende español con profesores nativos".
- Subtítulo: "Clases personalizadas, online y adaptadas a tu nivel".
- CTA: "Reserva tu clase ahora".

### Sobre Nosotros

- Implementado con texto de muestra sobre la historia y diferenciadores de la academia.

### Beneficios

- Implementado con tres beneficios clave: clases online, profesores certificados y planes flexibles.

### Profesores Destacados

- Sección implementada directamente en la página principal con enlace a la página de profesores.

### Blog

- Sección en la página principal que muestra los artículos más recientes.
- Enlace a la sección completa del blog.

### Testimonios

- Implementado con opiniones de muestra de alumnos.

### Llamado a la acción (CTA final)

- Implementado con el texto "¿Listo para empezar?" y botón para agendar clase.

### Footer

- Implementado con enlaces legales, información de contacto y redes sociales.

## Blog CMS - Contentful

### Razones para elegir Contentful

- Interfaz fácil de usar para usuarios no técnicos
- Soporte multilingüe nativo (perfecto para academia de idiomas)
- Buena integración con Next.js
- Estructura de contenido flexible

### Modelos de contenido en Contentful

- **Artículo de Blog**:
  - Título
  - Slug
  - Resumen
  - Contenido principal (Rich Text)
  - Imagen destacada
  - Categoría
  - Fecha de publicación
  - Autor
- **Categoría**:
  - Nombres en múltiples idiomas (es, en, fr, pl, pt)
  - Slug
  - Descripción

### Implementación de API de Contentful

- Archivos de configuración y cliente
- Funciones para obtener:
  - Lista de artículos
  - Artículo individual por slug
  - Categorías
  - Artículos relacionados

### Páginas de Blog Implementadas

- **Página principal del blog** (`/[lang]/blog`):
  - Listado de artículos
  - Filtrado por categorías
  - Soporte para múltiples idiomas
- **Página de artículo individual** (`/[lang]/blog/[slug]`):
  - Renderizado de Rich Text con estilos personalizados
  - Soporte para imágenes y enlaces
  - Navegación entre categorías

### Gestión de tipos en TypeScript

- Interfaces para los modelos de Contentful
- Auxiliares para manejar nombres de categorías en múltiples idiomas
- Uso estratégico de directivas `@ts-ignore` para resolver conflictos de tipos entre la API de Contentful y React

## Configuración de Estilos

Se utilizó Tailwind CSS v4 con la siguiente configuración:

- postcss.config.mjs usando el plugin "@tailwindcss/postcss"
- globals.css con las directivas @import "tailwindcss/preflight" y @import "tailwindcss/utilities"
- Variables CSS personalizadas para los colores de marca
- Clases CSS personalizadas para implementar los colores de marca en componentes

## Colores Implementados

- Paleta base: Blanco y negro.
- Acentos:
  - Naranja brillante: #FF6725
  - Amarillo suave: #FFCE4A

## Desafíos Técnicos Abordados

- Adaptación a la sintaxis de Tailwind CSS v4, que es diferente de versiones anteriores
- Configuración correcta de los archivos de configuración para asegurar compatibilidad
- Implementación de componentes reutilizables con estructura simplificada
- Resolución de errores de carga de imágenes de Contentful
- Manejo de Rich Text de Contentful en React
- Implementación de soporte multilingüe en el blog

## Próximos Pasos

- Refinamiento visual de los componentes
- Implementación de la integración con Cal.com en la página de contacto
- Adición de contenido real sobre profesores y testimonios
- Optimización para dispositivos móviles
- Expandir el contenido del blog con artículos reales
- Mejorar la integración de tipos de TypeScript con Contentful

Que vamos a hacer ahora?

Cuando presionas en el curso a tu ritmo en los servivios la idea es que te lleve a otra pagina de contacto y no la general! Esta va a darte la posibilidad de sumarte a la waitlist. La idea del curso a tu rtimo es tener un espacio donde hay contenido asincrono el cual podes consultar.

Tenes en cuenta que tenemos que armar esta pagina en todos los idiomas, usando la estrucutra de i18n que tenemos.
/Users/bautistaroberts/academia-espanol/public/locales/es/common.json

Este seria un archivo! Tenemos frances, polaco, ingles, espanol y portugues como idiomas!
