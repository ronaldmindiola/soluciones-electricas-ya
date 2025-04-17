export interface Imagen {
    src: string;
    alt: string;
}

export interface Feature {
    heading: string;
    content: string;
    svg: string;
    animation: string;
}

export interface FeaturesData {
    imagenes: Imagen[];
    features: Feature[];
}
