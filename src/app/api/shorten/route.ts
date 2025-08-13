import { NextResponse } from "next/server";
import prisma from "../../../../prisma/lib/prisma"; // Asegúrate de que la ruta sea correcta

export async function POST(request: Request) {
  console.log("requerimiento se recibio");
  try {
    const { url } = await request.json();

    // Validamos si la URL es válida
    if (!url || !isValidUrl(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const shortUrl = generateShortCode(); // Generamos el código corto

    // Intentamos crear la URL en la base de datos
    const newUrl = await prisma.url.create({
      data: {
        original: url,
        short: shortUrl,
      },
    });
    console.log("URL creada:", newUrl); // Log para verificar la creación de la URL

    return NextResponse.json({ shortUrl: newUrl.short }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Función para validar la URL
function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

// Función para generar un código corto aleatorio
function generateShortCode() {
  return Math.random().toString(36).substring(2, 8); // Genera un código corto
}
