import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { logOutAction } from "./actions";
import reducer from "./reducers";
import CssBaseline from "@mui/material/CssBaseline";

export const store = createStore(reducer);

if (localStorage.getItem("user")) {
  logOutAction();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
