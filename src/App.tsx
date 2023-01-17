import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filters from "./components/filters/filters";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <section id="hero">
        <div className="container-fluid">
          <div className="hero__block">
            <Filters />
            <MoviesList />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
