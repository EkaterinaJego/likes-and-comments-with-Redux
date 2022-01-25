import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { spamFilter } from "./redux/Middleware/index";
import { Provider } from "react-redux"; // Pour lier redux et application React

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // On a crée notre store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
