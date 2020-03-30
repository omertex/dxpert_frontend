import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import authReducer from "./store/reducers/auth";
import requestsReducer from "./store/reducers/requests";
import applicantProfileReducer from "./store/reducers/applicantProfile";
import companyProfileReducer from "./store/reducers/companyProfile";
import { watchRequests, watchAuth } from "./store/sagas";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  auth: authReducer,
  req: requestsReducer,
  applicant: applicantProfileReducer,
  company: companyProfileReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchRequests);
sagaMiddleware.run(watchAuth);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
