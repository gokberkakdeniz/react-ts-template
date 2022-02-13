import ReactDOM from "react-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { StrictMode } from "react";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { history } from "./router";

import "./index.css";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
