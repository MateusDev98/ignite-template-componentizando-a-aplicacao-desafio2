import { useContext } from "react";
import { AppContext } from "../contexts/App.context";
import { MovieCard } from "./MovieCard";
import "../styles/content.scss";

export function Content() {
  const { movies } = useContext(AppContext);
  return (
    <main>
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
