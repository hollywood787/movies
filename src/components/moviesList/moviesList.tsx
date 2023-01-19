import Movie from "./movie/movie";
import "./moviesList.css";
import { listMovies } from "../mocks/listMovies.js";
import { CurrentPageContext } from "../../App";
import { useContext } from "react";
import { countPageSwitch } from "../../consts";

export default function MoviesList() {
  const currentPage: any = useContext(CurrentPageContext);
  const result = listMovies.slice(currentPage, currentPage + countPageSwitch);

  return (
    <div className="movie__list-container">
      {result.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          voteAverage={item.vote_average}
        />
      ))}
    </div>
  );
}
