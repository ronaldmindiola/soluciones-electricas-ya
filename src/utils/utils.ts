interface ImageModule {
  default: string; // O el tipo que corresponda si es diferente
}
// Format the date to a string
function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  
    return new Date(date).toLocaleDateString(undefined, options);
  }

// Capitalize the first letter
function capitalize(str:string): string {
  if ( typeof str !== 'string' || str.length === 0 ) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Get images from a folder
function getImages(folderPath: string) {
  const images = import.meta.glob(`${folderPath}/*.{jpg,jpeg,png,avif,webp}`, { eager: true });
  const imageArray = Object.keys(images).map((path) => {
    const module = images[path] as ImageModule; // Aserción de tipo
    const parts = path.split('/');
    const lastPart = parts.pop(); // Obtener el último elemento
    const name = lastPart ? lastPart.split('.').shift() : ''; // Verificar si lastPart no es undefined

    const altText = name ? name.replace(/-/g, ' ').charAt(0).toUpperCase() + name.slice(1) : '';

    return {
      src: module.default,
      alt: altText,
      path,
    };
  });

  // Ordenar las imágenes alfabéticamente si lo deseas
  imageArray.sort((a, b) => a.path.localeCompare(b.path));

  return imageArray;
}

export { formatDate, capitalize, getImages };