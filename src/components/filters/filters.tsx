import "./filters.css";
import Pagination from "../pagination/pagination";
import { listGenres } from "../mocks/genres";
import {
  popularВescending,
  popularAscending,
  descendingRanking,
  ascendingRating,
  filterYear,
  filterGenres,
  filterSort,
} from "../../consts";
import { useSelector } from "react-redux";
import { data } from "../mocks/listMovies";
import { store } from "../../main";

export default function Filters() {
  function filterByYear(e: { target: { value: string } }) {
    let result = data.initList.filter(function (item) {
      if (!item.release_date.indexOf(e.target.value)) {
        return item;
      }
    });
    data.year = e.target.value;
    store.dispatch({ type: filterYear, payload: result });
  }


  const currentList = useSelector(
    (state: boolean) => state.reducerMovies.curentList
  );

  function filterBySort(e: { target: { value: string } }) {
    let arrayYearSort: any = "12";
    switch (e.target.value) {
      case popularВescending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        );
        store.dispatch({ type: filterSort, payload: arrayYearSort });
        break;

      case popularAscending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        );
        store.dispatch({ type: filterSort, payload: arrayYearSort });
        break;

      case descendingRanking:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average < b.vote_average ? 1 : -1
        );
        store.dispatch({ type: filterSort, payload: arrayYearSort });
        break;

      case ascendingRating:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average > b.vote_average ? 1 : -1
        );
        store.dispatch({ type: filterSort, payload: arrayYearSort });
        break;
    }
  }

  function sortByGenres(e: { target: { value: string } }) {
    const result = currentList.filter(function(item) {
      if (item.genre_ids.includes(Number(e.target.value))) {
        return item;
      }})
      store.dispatch({ type: filterGenres, payload: result });
  }

  const isAuthorized = useSelector((state: boolean) => state.reducerLogin);

  return (
    <div className="filters">
      <div className="filters__block">
        <h2>Фильтры</h2>
        <div className="filters__block-drop-all">
          <button>Сбросить все фильтры</button>
        </div>
        <div className="filters__block-drop-all-sort">
          Сортировать по:
          <select onChange={filterBySort} name="" id="">
            <option value={popularВescending}>Популярные по убыванию</option>
            <option value={popularAscending}>Популярные по возрастанию</option>
            <option value={descendingRanking}>Рейтинг по убыванию</option>
            <option value={ascendingRating}>Рейтинг по возрастанию</option>
          </select>
        </div>
        <div className="filters__block-drop-all-sort">
          Год релиза:
          <select onChange={filterByYear} name="" id="">
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <div className="filters__block-genres">
          {listGenres.map((item) => (
            <label key={item.id}>
              <input type="checkbox" value={item.id} onChange={sortByGenres} />
              {item.name}
            </label>
          ))}
        </div>
        {isAuthorized && (
          <div>
            <select name="" id="">
              <option value="1">Избранное</option>
            </select>
            <select name="" id="">
              <option value="2">Закладки</option>
            </select>
          </div>
        )}
        <Pagination />
      </div>
    </div>
  );
}
