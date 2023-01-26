import { listMovies } from "./components/mocks/listMovies";
import { AnyAction, combineReducers } from "redux";
import { filterYear, filterSort, filterGenres, nextPage, prevPage, sortByFavotire, bookmarkMovie, exit, offPopup, login, onPopup, reset } from "./consts"
import { Movie } from "./components/mocks/listMovies";
import { initialMoviesArray } from "./initialMovies";
export interface DataMovies {
    initList: Movie[];
    curentList: Movie[];
}



export interface ReducerMovies {
    reducerMovies: DataMovies
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
}

const initalStatePopup = false;
const initalStateLogin = false;
const initalStateCurrentPage = 0;


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
    reducerCurrentPage
})