import { useContext } from "react";
import { AppContext } from "../contexts/App.context";

export function Header() {
  const { selectedGenre } = useContext(AppContext);
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
