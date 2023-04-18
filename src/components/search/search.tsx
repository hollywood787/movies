import { listGenres } from "../mocks/genres";
import "./search.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  filterByGenres,
  filterByMark,
  filterByPopularity
} from "../functions-filter/functions-filter";
import { useSelector } from "react-redux";
import { ReducerSearch } from "../../reducers";

function Quiz() {
  const [currentMovie, setCurrentMovie] = useState(0);

  const currentList = useSelector(
    (state: ReducerSearch) => state.reducerSearch
  );

  function eventPrevent(event: { preventDefault: () => void }) {
    event.preventDefault();
  }


  const result = currentList.slice(currentMovie, currentMovie + 1);
  result.push({title: 'Фильмы закончились'});
  console.log(currentList);

  return (
    <div>
      <form onSubmit={eventPrevent}>
        <h1>Выберите жанр</h1>
        <select name="" id="" onChange={filterByGenres}>
          {listGenres.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>

      <div>
        <h1>Оценка фильма</h1>
        <select name="" id="" onChange={filterByMark}>
          <option value={""}>Выберите оценку</option>
          <option value={"high"}>Высокая</option>
          <option value={"low"}>Низкая</option>
        </select>
        <input type="submit" />
      </div>

      <div>
        <h1>Популярность фильма</h1>
        <select name="" id="" onChange={filterByPopularity}>
          <option value={""}>Фильм популярный</option>
          <option value={"high"}>Популярный</option>
          <option value={"low"}>Неизвестный</option>
        </select>
        <input type="submit" />
      </div>

      <div>
        <div className="movie-item">
          <img src="./assets/images/time.jpg" alt="" />
          {result[0].title}
        </div>
        <div className="buttons">
          <Link to={`/${result[0].id}`}>Подходит</Link>
          <button onClick={() => setCurrentMovie(currentMovie + 1)}>
            Не подходит
          </button>
        </div>
      </div>
    </div>
  );
}

export { Quiz };
