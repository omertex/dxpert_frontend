import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import testReducer from './store/reducers/reducer';
import authReducer from './store/reducers/auth';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  test: testReducer,
  auth: authReducer
})

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState());

ReactDOM.render(
<Provider store={ store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
serviceWorker.unregister();
