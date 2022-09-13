import { createContext } from "react";

interface AppContextInitialState {
  genres: Array<{
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  }>;
  movies: Array<MovieProps>;
  selectedGenre: GenreResponseProps;
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export const AppContext = createContext<AppContextInitialState>(
  {} as AppContextInitialState
);
