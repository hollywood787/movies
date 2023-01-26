import {store } from "./main"
import { nextPage, prevPage, exit, login, offPopup, onPopup, filterSort } from "./consts"
import { ReducerMovies } from "./reducers";

export const nextPageAction = (payload: number) => store.dispatch({type: nextPage, payload});
export const prevPageAction = (payload: number) => store.dispatch({type: prevPage, payload});
export const logOutAction = () => store.dispatch({type: exit});
export const isLogin = () => store.dispatch({type: login});
export const offActionsPopup = () => store.dispatch({type: offPopup});
export const onActionsPopup = () => store.dispatch({type: onPopup});
export const filterSorting = (payload: ReducerMovies) => store.dispatch({type: filterSort, payload});