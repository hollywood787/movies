import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/mocks/listMovies"

export const store = createStore(reducer);


if (localStorage.getItem('user')) {
  store.dispatch({ type: 'Exit' })
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
