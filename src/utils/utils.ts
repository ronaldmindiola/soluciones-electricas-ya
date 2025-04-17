import type { ImageMetadata } from 'astro';

// Formatear la fecha a una cadena
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};

// Capitalizar la primera letra
const capitalize = (str: string): string => 
  str ? str.charAt(0).toUpperCase() + str.slice(1) : str;

// Obtener imágenes de una carpeta de manera asíncrona
// utils.ts
// utils.ts
const getImages = (folder: string): ImageMetadata[] => {
  const images = import.meta.glob<{ default: ImageMetadata }>('/src/images/**/*.{jpeg,jpg,png,gif,svg}', { eager: true });

  console.log('Imágenes disponibles:', Object.keys(images));

  return Object.entries(images)
    .filter(([path]) => path.includes(`/src/images/${folder}/`)) // Filtrar por carpeta
    .map(([, mod]) => mod.default); // Extraer la imagen importada
};

export { formatDate, capitalize, getImages };
