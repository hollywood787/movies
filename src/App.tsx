import "./App.css";
import Header from "./components/header/header";
import MoviesList from "./components/moviesList/movies-list";
import Filters from "./components/filters/filters";
import { Popup } from "./components/popup/popup";
import { Routes, Route } from "react-router-dom";
import { AboutMovie } from "./components/moviesList/movie/about-movie/about-movie";
import { useSelector } from "react-redux";
import { ReducerMovies } from "./reducers";
import { Quiz } from "./components/search/search";

function App() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );

  return (
    <div className="App">
      <Header />

      <section id="hero">
        <div className="container-fluid">
          <div className="hero__block">
            <Filters />
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
          </div>
        </div>
      </section>
      <Popup />
    </div>
  );
}

export default App;
