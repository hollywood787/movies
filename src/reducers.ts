import { listMovies } from "./components/mocks/list-movies";
import { AnyAction, combineReducers } from "redux";
import { filterYear, filterSort, filterGenres, nextPage, prevPage, sortByFavotire, bookmarkMovie, exit, offPopup, login, onPopup, reset, genresSearch, yearsSearch } from "./consts"
import { Movie } from "./components/mocks/list-movies";
import { initialMoviesArray } from "./initial-movies";

export interface DataMovies {
    initList: Movie[];
    curentList: Movie[];
    year: string;
}

export interface DataSearch {
    [x: string]: any;
    currentList: Movie[];
}

export interface ReducerMovies {
    reducerMovies: DataMovies
}

export interface ReducerSearch {
    reducerSearch: DataSearch;
}

export interface CurrentPage {
    reducerCurrentPage: number
}

export interface Login {
    reducerLogin: boolean
}

export interface ReducerPopup {
    reducerPopup: boolean
}

export const data: DataMovies = {
    initList: listMovies,
    curentList: initialMoviesArray,
    year: "",

}

export const dataSearch: DataSearch = {
    currentList: listMovies,
}

const initalStatePopup = false;
const initalStateLogin = false;
const initalStateCurrentPage = 0;
export let initalDataSearch = listMovies;


export function reducerMovies(state = data, action: AnyAction) {
    switch (action.type) {
        case filterYear:
            return { ...state, curentList: action.payload }

        case filterSort:
            return { ...state, curentList: action.payload }

        case filterGenres:
            return { ...state, curentList: action.payload }

        case sortByFavotire: {
            return { ...state, curentList: action.payload }
        }

        case bookmarkMovie: {
            return { ...state, curentList: action.payload }
        }

        case reset: {
            return { ...state, curentList: initialMoviesArray }
        }

        default:
            return state;
    }
}


export function reducerSearch(state = initalDataSearch, action: AnyAction) {
    switch (action.type) {
        case genresSearch: {
            return initalDataSearch = action.payload
        }

        case yearsSearch: {
            return initalDataSearch = action.payload
        }

        default:
            return state;
    }
}

export function reducerPopup(state = initalStatePopup, action: AnyAction) {
    switch (action.type) {
        case offPopup:
            return state = false

        case onPopup:
            return state = true

        default:
            return state;
    }
}



export function reducerLogin(state = initalStateLogin, action: AnyAction) {
    switch (action.type) {
        case login:
            return state = false

        case exit:
            return state = true

        default:
            return state;
    }
}

export function reducerCurrentPage(state = initalStateCurrentPage, action: AnyAction) {
    switch (action.type) {
        case nextPage:
            return state - action.payload;

        case prevPage:
            return state + action.payload;

        default:
            return state;
    }
}

export default combineReducers({
    reducerPopup,
    reducerMovies,
    reducerLogin,
    reducerCurrentPage,
    reducerSearch
})