import "./pagination.css";
import { useContext } from "react";
import { ChangeCurrentPageContext } from "../../App";
import { CurrentPageContext } from "../../App";
import { countPageSwitch } from "../../consts";
import { ListMoviesContext } from "../../App";

export default function Pagination() {
  const changeCountPage: any = useContext(ChangeCurrentPageContext);
  const currentPage: number = useContext(CurrentPageContext);
  const listMovies: any = useContext(ListMoviesContext)
  const numberOfPages = listMovies.length / countPageSwitch;

  return (
    <div className="block__pagination">
      <div className="block__pagination-buttons">
        <button disabled = {!currentPage} onClick={() => changeCountPage(currentPage - countPageSwitch)}>
          Назад
        </button>
        <button disabled = {currentPage === listMovies.length - countPageSwitch} onClick={() => changeCountPage(currentPage + countPageSwitch)}>
          Вперед
        </button>
      </div>
      {currentPage ? (currentPage / countPageSwitch) + 1 : 1 } of {Math.ceil(numberOfPages)}
    </div>
  );
}
