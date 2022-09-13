interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps extends ButtonProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface IconProps {
  name?: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}