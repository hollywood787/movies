import Movie from "./movie/movie";
import "./moviesList.css";
import { Key } from "react";
import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { DataMovies } from "../mocks/listMovies";

export default function MoviesList() {
  const movies = useSelector((state: DataMovies) => state.reducerMovies.curentList);
  const currentPage = useSelector((state: DataMovies) => state.reducerCurrentPage);
  const result = movies.slice(currentPage, currentPage + countPageSwitch);
  
  return (
    <div className="movie__list-container">
      {result.map(
        (item: {
          id: Key | null | undefined;
          title: string;
          vote_average: number;
        }) => (
          <Movie
            key={item.id}
            title={item.title}
            voteAverage={item.vote_average}
          />
        )
      )}
    </div>
  );
}
