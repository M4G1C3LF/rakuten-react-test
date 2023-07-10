import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import ApplicationInstaller from "../api/rakutenTv/installer/ApplicationInstaller";

const sagaMiddleware = createSagaMiddleware();

const rakutenTv = new ApplicationInstaller();
const movieController = rakutenTv.getController();
sagaMiddleware.setContext({ movieController })
sagaMiddleware.bind(movieController)

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);



export default store;
