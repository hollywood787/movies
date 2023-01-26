import { listMovies } from "./components/mocks/listMovies";

function initialMovies() {
    const result = listMovies.filter(function (item) {
        if (!item.release_date.indexOf('2020')) {
            return item;
        }
    });

    const arrayYearSort = [...result].sort((a, b) =>
        a.vote_average < b.vote_average ? 1 : -1
    );
    return arrayYearSort;
}

export const initialMoviesArray = initialMovies();




