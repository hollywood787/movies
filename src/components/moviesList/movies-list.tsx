import Movie from "./movie/movie";
import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { CurrentPage, ReducerMovies } from "../../reducers";
import { Grid } from "@mui/material";

export default function MoviesList() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );
  const currentPage = useSelector(
    (state: CurrentPage) => state.reducerCurrentPage
  );
  const result = movies.slice(currentPage, currentPage + countPageSwitch);

  return (
    <Grid container spacing={2}>
      {result.map((item) => (
        <Grid key={item.id} item xs={6}>
          <Movie
            title={item.title}
            voteAverage={item.vote_average}
            id={item.id}
            item={item}
          />
        </Grid>
      ))}
    </Grid>
  );
}
