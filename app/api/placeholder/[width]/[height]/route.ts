import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { width: string; height: string } }
) {
  // Convertir params a una promesa y esperar su resolución
  const resolvedParams = await Promise.resolve(params);
  const width = parseInt(resolvedParams.width, 10);
  const height = parseInt(resolvedParams.height, 10);

  // Validar dimensiones
  if (
    isNaN(width) ||
    isNaN(height) ||
    width <= 0 ||
    height <= 0 ||
    width > 2000 ||
    height > 2000
  ) {
    return new NextResponse("Invalid dimensions", { status: 400 });
  }

  // Crear un SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="16" 
        fill="#9ca3af"
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${width}×${height}
      </text>
    </svg>
  `;

  // Devolver el SVG como imagen
  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
