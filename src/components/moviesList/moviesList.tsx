import Movie from "./movie/movie";
import "./moviesList.css";
import { CurrentPageContext } from "../../App";
import { Key, useContext } from "react";
import { countPageSwitch } from "../../consts";
import { ListMoviesContext } from "../../App";

export default function MoviesList() {
  const currentPage: number = useContext(CurrentPageContext);
  const listMovies: any = useContext(ListMoviesContext); 
  const result = listMovies.slice(currentPage, currentPage + countPageSwitch);

  return (
    <div className="movie__list-container">
      {result.map((item: { id: Key | null | undefined; title: string; vote_average: number; }) => (
        <Movie
          key={item.id}
          title={item.title}
          voteAverage={item.vote_average}
        />
      ))}
    </div>
  );
}
