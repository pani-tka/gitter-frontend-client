import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const appElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  appElement);

serviceWorker.unregister();
