import { store } from "../../main";
import { dataSearch } from "../../reducers";
import { genresSearch, yearsSearch } from "../../consts";
import { filterGenresSearch } from "../../actions";
import { initalDataSearch } from "../../reducers";


function filterByGenres(e: { target: { value: string } }) {
    const result = initalDataSearch.filter(function (item) {
        if (item.genre_ids.includes(Number(e.target.value))) {
            return item;
        }
    });
    store.dispatch({ type: genresSearch, payload: result });
}

function filterByMark(e: { target: { value: string } }) {
    const result = initalDataSearch.filter(function (item) {
        if (e.target.value === 'high') {
            if (item.vote_average > 5) {
                return item;
            }
        } else {
            if (item.vote_average < 5) {
                return item;
            }
        }
    });
    store.dispatch({ type: yearsSearch, payload: result });
}

function filterByPopularity(e: { target: { value: string } }) {
    const result = initalDataSearch.filter(function (item) {
        if (e.target.value === 'high') {
            if ((item.popularity > 100) && (item.vote_count > 200)) {
                return item;
            }
        } else {
            if ((item.popularity < 100) && (item.vote_count < 200)) {
                return item;
            }
        }
    });
    store.dispatch({ type: yearsSearch, payload: result });
}


export { filterByGenres, filterByMark, filterByPopularity }