import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import applicantProfileReducer from "./store/reducers/applicantProfile";
import authReducer from "./store/reducers/auth";
import employerProfileReducer from "./store/reducers/employerProfile";
import requestsReducer from "./store/reducers/requests";
import serviceDataReducer from "./store/reducers/serviceDataReducer";
import { rootSaga } from "./store/sagas";

const rootReducer = combineReducers({
  auth: authReducer,
  req: requestsReducer,
  applicant: applicantProfileReducer,
  employer: employerProfileReducer,
  serviceData: serviceDataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
