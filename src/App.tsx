import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./components/moviesList/moviesList";
import Filters from "./components/filters/filters";
import React, { useState } from "react";

export const CurrentPageContext = React.createContext();
export const ChangeCurrentPageContext = React.createContext();

function App() {
  const [currentPage, setCurrentPage] = useState(0);

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
            <CurrentPageContext.Provider value={currentPage}>
              <ChangeCurrentPageContext.Provider value={setCurrentPage}>
                <Filters />
                <MoviesList />
              </ChangeCurrentPageContext.Provider>
            </CurrentPageContext.Provider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
