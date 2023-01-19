import "./pagination.css";
import { listMovies } from "../mocks/listMovies";
import { useContext } from "react";
import { ChangeCurrentPageContext } from "../../App";
import { CurrentPageContext } from "../../App";
import { countPageSwitch } from "../../consts";

export default function Pagination() {
  const numberOfPages = listMovies.length / countPageSwitch;
  const changeCountPage: any = useContext(ChangeCurrentPageContext);
  const currentPage: any = useContext(CurrentPageContext);

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
      {currentPage ? (currentPage / countPageSwitch) + 1 : 1 } of {numberOfPages}
    </div>
  );
}
