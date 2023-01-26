import "./filters.css";
import Pagination from "../pagination/pagination";
import { listGenres } from "../mocks/genres";
import {
  popularBescending,
  popularAscending,
  descendingRanking,
  ascendingRating,
  filterYear,
  filterGenres,
  sortByFavotire,
  bookmarkMovie,
  favoriteMovie,
  reset
} from "../../consts";
import { useSelector } from "react-redux";
import { store } from "../../main";
import { filterSorting } from "../../actions";
import { data, Login, ReducerMovies } from "../../reducers";

export default function Filters() {
  function filterByYear(e: { target: { value: string } }) {
    let result = data.initList.filter(function (item) {
      if (!item.release_date.indexOf(e.target.value)) {
        return item;
      }
    });
    store.dispatch({ type: filterYear, payload: result });
  }

  const currentList = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );

  function filterBySort(e: { target: { value: string } }) {
    let arrayYearSort: any = "12";
    switch (e.target.value) {
      case popularBescending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case popularAscending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case descendingRanking:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average < b.vote_average ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case ascendingRating:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average > b.vote_average ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case sortByFavotire:
        const resultFavorite = JSON.parse(
          localStorage.getItem(favoriteMovie) || ""
        );
        filterSorting(resultFavorite);
        break;

      case bookmarkMovie:
        const resultBookmark = JSON.parse(
          localStorage.getItem(bookmarkMovie) || ""
        );
        filterSorting(resultBookmark);
        break;
    }
  }

  function sortByGenres(e: { target: { value: string } }) {
    const result = currentList.filter(function (item) {
      if (item.genre_ids.includes(Number(e.target.value))) {
        return item;
      }
    });
    store.dispatch({ type: filterGenres, payload: result });
  }

  const isAuthorized = useSelector((state: Login) => state.reducerLogin);

  return (
    <div className="filters">
      <div className="filters__block">
        <h2>Фильтры</h2>
        <div className="filters__block-drop-all">
          <button onClick={() => store.dispatch({type: reset})} >Сбросить все фильтры</button>
        </div>
        <div className="filters__block-drop-all-sort">
          Сортировать по:
          {isAuthorized ? (
            <select onChange={filterBySort} name="" id="">
              <option value={popularBescending}>Популярные по убыванию</option>
              <option value={popularAscending}>
                Популярные по возрастанию
              </option>
              <option value={descendingRanking}>Рейтинг по убыванию</option>
              <option value={ascendingRating}>Рейтинг по возрастанию</option>
              <option value={sortByFavotire}>Избранное</option>
              <option value={bookmarkMovie}>Закладки</option>
            </select>
          ) : (
            <select onChange={filterBySort} name="" id="">
              <option value={popularBescending}>Популярные по убыванию</option>
              <option value={popularAscending}>
                Популярные по возрастанию
              </option>
              <option value={descendingRanking}>Рейтинг по убыванию</option>
              <option value={ascendingRating}>Рейтинг по возрастанию</option>
            </select>
          )}
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
        <Pagination />
      </div>
    </div>
  );
}
