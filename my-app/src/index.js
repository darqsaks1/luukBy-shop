import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';

import { Route, BrowserRouter, Switch } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);