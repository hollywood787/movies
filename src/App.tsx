import Header from "./components/header/header";
import MoviesList from "./components/moviesList/movies-list";
import Filters from "./components/filters/filters";
import { Popup } from "./components/popup/popup";
import { Routes, Route } from "react-router-dom";
import { AboutMovie } from "./components/moviesList/movie/about-movie/about-movie";
import { useSelector } from "react-redux";
import { ReducerMovies } from "./reducers";
import { Quiz } from "./components/search/search";
import { Grid, Box } from "@mui/material";

function App() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );

  return (
    <Box>
      <Header />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          <Grid item lg={2}>
            <Filters />
          </Grid>
          <Grid item lg={10}>
            <Routes>
              {movies.map((item) => (
                <Route
                  path={`/${item.id}`}
                  key={item.id}
                  element={<AboutMovie element={item} />}
                />
              ))}
              <Route path="/" element={<MoviesList />} />
              <Route path="/search" element={<Quiz />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
      <Popup />
    </Box>
  );
}

export default App;
