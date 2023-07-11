import { put, takeEvery, getContext } from "redux-saga/effects";
import { GetMovieListOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListOutputDTO";
import { GetMovieByIdOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieByIdInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { MovieController } from "../../api/rakutenTv/interfaceAdapters/controllers/MovieCatalogController";
import { GetMovieStreamInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieStreamInputDTO";
import { GetMovieStreamOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieStreamOutputDTO";

import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_LIST,
  GET_MOVIE_STREAM,
} from "./actionTypes";

import {
  getMovieByIdSuccess,
  getMovieByIdFail,
  getMovieListSuccess,
  getMovieListFail,
  getMovieStreamSuccess,
  getMovieStreamFail,
} from "./actions";

function* getMovieList( { payload: args } : { payload: GetMovieListInputDTO }) {
  try {
    const movieController : MovieController = yield getContext("movieController");
    const response : GetMovieListOutputDTO = yield movieController._movieRepository.getMovieList(args)
    yield put(getMovieListSuccess(response));
  } catch (error) {
    yield put(getMovieListFail(error));

  }
}

function* getMovieById( { payload: args } : { payload: GetMovieByIdInputDTO }) {
  try {
    const movieController : MovieController = yield getContext("movieController");
    const response : GetMovieByIdOutputDTO = yield movieController._movieRepository.getMovieById(args)
    yield put(getMovieByIdSuccess(response));
  } catch (error) {
    yield put(getMovieByIdFail(error));
  }
}

function* getMovieStream( { payload: args } : { payload: GetMovieStreamInputDTO }) {
  try {
    const movieController : MovieController = yield getContext("movieController");
    const response : GetMovieStreamOutputDTO = yield movieController._movieRepository.getMovieStream(args)
    yield put(getMovieStreamSuccess(response));
  } catch (error) {
    yield put(getMovieStreamFail(error));
  }
}

function* movieSaga() {
  yield takeEvery(GET_MOVIE_LIST as any, getMovieList);
  yield takeEvery(GET_MOVIE_BY_ID as any, getMovieById);
  yield takeEvery(GET_MOVIE_STREAM as any, getMovieStream);
}

export default movieSaga;

