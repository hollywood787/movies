import { useContext } from "react";
import { ChangeListMoviesContext } from "../../../App";
import { listMovies } from "../../mocks/listMovies";

type GenresInterface = {
  name: string;
  id: number;
  changeGanresState: any;
  mainFilter: any;
};

export default function Genres(value: GenresInterface) {
 
  function changeGanres(e: { target: { value: string } }) {    
    value.changeGanresState(value.id)
    value.mainFilter();
  }

  return (
    <label>
      <input type="checkbox" value={value.name} onChange={changeGanres} />
      {value.name}
    </label>
  );
}
