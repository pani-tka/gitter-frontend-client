import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { reducer } from "./reducer";
import App from './App';
import * as serviceWorker from './serviceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), devTools)
  );

const appElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  appElement);

serviceWorker.unregister();
