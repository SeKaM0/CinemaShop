/// <reference types="react-scripts" />
interface Cinema {
  id: number;
  title: string;
}

interface Data {
  CountOfElements: number;
  CountOfPage: number;
  Cinemas: Cinema[];
}
