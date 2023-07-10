import { all, fork } from "redux-saga/effects";

//public
import MovieSaga from "./movie/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(MovieSaga),
  ]);
}
