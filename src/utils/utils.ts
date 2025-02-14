// Utils.ts
import fs from "fs";
import path from "path";

// Obtener imágenes de la carpeta "showcase"
const images = import.meta.glob<{ default: string }>("/src/images/ya/showcase/*.{jpg,jpeg,png,webp,svg}", {
  eager: true, // Carga las imágenes de inmediato
});

export const showcaseImages = Object.keys(images).map((path) => ({
  src: images[path].default,
  alt: path.split("/").pop()?.replace(/\.[^/.]+$/, "") ?? "Imagen",
}));

// Formatear la fecha a una cadena legible
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalizar la primera letra de un string
export function capitalize(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Obtener el nombre del día de la semana
export function getDayName(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  return new Date(date).toLocaleDateString(undefined, options);
}