import Movie from "./movie/movie";
import "./movies-list.css";
import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { CurrentPage, ReducerMovies } from "../../reducers";

export default function MoviesList() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );
  const currentPage = useSelector(
    (state: CurrentPage) => state.reducerCurrentPage
  );
  const result = movies.slice(currentPage, currentPage + countPageSwitch);

  return (
    <div className="movie__list-container">
      {result.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          voteAverage={item.vote_average}
          id={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
