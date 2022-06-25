/// <reference types="react-scripts" />
interface Categorie {
  id: number;
  name: string;
}
interface Movie {
  id: number;
  title: string;
  description: string;
  languages: {
    id: number;
    name: string;
  };
  year: number;
  rentalRate: number;
  buyRate: number;
  categories: Categorie[];
}

interface Data {
  countOfElements: number;
  countOfPage: number;
  Films: Movie[];
}
