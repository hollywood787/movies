import "./pagination.css";
import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { store } from "../../main";
import { nextPage, prevPage } from "../../consts";

export default function Pagination() {
  const movies = useSelector(
    (state: DataMovies) => state.reducerMovies.curentList
  );
  const currentPage = useSelector(
    (state: DataMovies) => state.reducerCurrentPage
  );
  const numberOfPages = movies.length / countPageSwitch;

  return (
    <div className="block__pagination">
      <div className="block__pagination-buttons">
        <button
          disabled={!currentPage}
          onClick={() =>
            store.dispatch({ type: nextPage, payload: countPageSwitch })
          }
        >
          Назад
        </button>
        <button
          disabled={currentPage === movies.length - countPageSwitch}
          onClick={() =>
            store.dispatch({ type: prevPage, payload: countPageSwitch })
          }
        >
          Вперед
        </button>
      </div>
      {currentPage ? currentPage / countPageSwitch + 1 : 1} of{" "}
      {Math.ceil(numberOfPages)}
    </div>
  );
}
