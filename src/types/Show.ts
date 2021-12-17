export interface Show {
  genres: string[];
  id: number;
  language: string;
  name: string;
  summary: string;
  image: ShowImage | null;
}

export interface ShowImage {
  medium: string;
  original: string;
}

export interface SearchResult {
  score: number;
  show: Show;
}
