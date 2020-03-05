import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={ store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
