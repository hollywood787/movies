import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filters from "./components/filters/filters";
import React, { useState, useEffect } from "react";
import { listMovies } from "./components/mocks/listMovies";

export const CurrentPageContext = React.createContext(0);
export const ChangeCurrentPageContext = React.createContext();
export const ListMoviesContext = React.createContext();
export const ChangeListMoviesContext = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [listMoviesArray, setListMoviesArray] = useState(listMovies);

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
            <ChangeListMoviesContext.Provider value={setListMoviesArray}>
              <ListMoviesContext.Provider value={listMoviesArray}>
                <CurrentPageContext.Provider value={currentPage}>
                  <ChangeCurrentPageContext.Provider value={setCurrentPage}>
                    <Filters />
                    <MoviesList />
                  </ChangeCurrentPageContext.Provider>
                </CurrentPageContext.Provider>
              </ListMoviesContext.Provider>
            </ChangeListMoviesContext.Provider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
