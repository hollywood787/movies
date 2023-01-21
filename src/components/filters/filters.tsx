import "./filters.css";
import Pagination from "../pagination/pagination";
import Genres from "./genres/genres";
import { listGenres } from "../mocks/genres";
import { ChangeListMoviesContext, ListMoviesContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { listMovies } from "../mocks/listMovies";
import {
  popularВescending,
  popularAscending,
  descendingRanking,
  ascendingRating,
  defaultYear,
} from "../../consts";

export default function Filters() {
  const changeMovieList: any = useContext(ChangeListMoviesContext);
  const [genres, setGenres] = useState("");
  const [year, setYear] = useState(defaultYear);
  const [sort, setSort] = useState(descendingRanking);

  function mainFilter() {
    const arrayYear = listMovies.filter(function (item) {
      if (!item.release_date.indexOf(year)) {
        return item;
      }
    });

    let arrayYearSort: any = "12";
    switch (sort) {
      case popularВescending:
        arrayYearSort = [...arrayYear].sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        );
        break;

      case popularAscending:
        arrayYearSort = [...arrayYear].sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        );
        break;

      case descendingRanking:
        arrayYearSort = [...arrayYear].sort((a, b) =>
          a.vote_average < b.vote_average ? 1 : -1
        );
        break;

      case ascendingRating:
        arrayYearSort = [...arrayYear].sort((a, b) =>
          a.vote_average > b.vote_average ? 1 : -1
        );
        break;
    }

    const result = arrayYearSort.filter(function (item) {
      if (item.genre_ids.includes(genres)) {
        return item;
      }
    });

    if (!genres) {
      changeMovieList(arrayYearSort);
    } else {
      changeMovieList(result);
    }
  }

  function dropAllFilters() {
    const sortPopular = [...listMovies].sort((a, b) =>
      a.vote_average < b.vote_average ? 1 : -1
    );
    const sortYear = sortPopular.filter(function (item) {
      if (!item.release_date.indexOf(defaultYear)) {
        return item;
      }
    });
    setYear(defaultYear)
    changeMovieList(sortYear);
  }

  useEffect(() => {
    mainFilter();
  }, [year, sort, genres]);

  function sortMovieListYear(e: { target: { value: string } }) {
    setYear(e.target.value);
  }

  function sortMovieListPopular(e: { target: { value: string } }) {
    setSort(e.target.value);
  }

  return (
    <div className="filters">
      <div className="filters__block">
        <h2>Фильтры</h2>
        <div className="filters__block-drop-all">
          <button onClick={dropAllFilters}>Сбросить все фильтры</button>
        </div>
        <div className="filters__block-drop-all-sort">
          Сортировать по:
          <select onChange={sortMovieListPopular} name="" id="">
            <option value={popularВescending}>Популярные по убыванию</option>
            <option value={popularAscending}>Популярные по возрастанию</option>
            <option value={descendingRanking}>Рейтинг по убыванию</option>
            <option value={ascendingRating}>Рейтинг по возрастанию</option>
          </select>
        </div>
        <div className="filters__block-drop-all-sort">
          Год релиза:
          <select onChange={sortMovieListYear} name="" id="">
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <div className="filters__block-genres">
          {listGenres.map((item) => (
            <Genres
              key={item.id}
              id={item.id}
              name={item.name}
              changeGanresState={setGenres}
              mainFilter={mainFilter}
            />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
