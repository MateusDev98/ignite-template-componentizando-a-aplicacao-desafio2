import { ReactChildren, ReactChild, useState, useEffect } from "react";
import { AppContext } from "../contexts/App.context";
import { api } from "../services/api";

interface AppProviderProps {
  children: ReactChildren | ReactChild;
}

export default function AppProvider(props: AppProviderProps) {
  const { children } = props;
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <AppContext.Provider
      value={{
        genres,
        movies,
        selectedGenre,
        selectedGenreId,
        handleClickButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
