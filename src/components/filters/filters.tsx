import "./filters.css";
import Pagination from "../pagination/pagination";

export default function Filters() {
  return (
    <div className="filters">
      <div className="filters__block">
        <h2>Фильтры</h2>
        <div className="filters__block-drop-all">
          <button>Сбросить все фильтры</button>
        </div>
        <div className="filters__block-drop-all-sort">
          Сортировать по:
          <select name="" id="">
            <option value="">По убыванию</option>
            <option value="">По возрастанию</option>
          </select>
        </div>
        <div className="filters__block-drop-all-sort">
          Год релиза:
          <select name="" id="">
            <option value="">2021</option>
            <option value="">2020</option>
          </select>
        </div>
        <div className="filters__block-genres">
          <label>
            <input type="checkbox" />
            Боевик
          </label>
          <label>
            <input type="checkbox" />
            Приключения
          </label>
          <label>
            <input type="checkbox" />
            Мультик
          </label>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
