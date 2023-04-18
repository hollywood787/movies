import Movie from "./movie/movie";
import "./moviesList.css";

export default function MoviesList() {
  return (
      <div className="movie__list-container">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
    </div>
  );
}
