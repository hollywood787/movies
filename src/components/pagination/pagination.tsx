import "./pagination.css";
import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { store } from "../../main";
import { nextPage, prevPage } from "../../consts";
import { CurrentPage } from "../mocks/listMovies";
import { ReducerMovies } from "../mocks/listMovies";
import { nextPageAction, prevPageAction } from "../../actions";

export default function Pagination() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );
  const currentPage = useSelector(
    (state: CurrentPage) => state.reducerCurrentPage
  );
  const numberOfPages = movies.length / countPageSwitch;

  return (
    <div className="block__pagination">
      <div className="block__pagination-buttons">
        <button
          disabled={!currentPage}
          onClick={() => nextPageAction(countPageSwitch)}
        >
          Назад
        </button>
        <button
          disabled={currentPage === movies.length - countPageSwitch}
          onClick={() => prevPageAction(countPageSwitch)}
        >
          Вперед
        </button>
      </div>
      {currentPage ? currentPage / countPageSwitch + 1 : 1} of{" "}
      {Math.ceil(numberOfPages)}
    </div>
  );
}
