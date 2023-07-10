import { put, takeEvery, getContext } from "redux-saga/effects";
import { GetMovieListOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListOutputDTO";
import { GetMovieByIdOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieByIdInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdInputDTO";

// Crypto Redux States
import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_LIST,
} from "./actionTypes";
import {
  getMovieByIdSuccess,
  getMovieByIdFail,
  getMovieListSuccess,
  getMovieListFail,
} from "./actions";
import { MovieController } from "../../api/rakutenTv/interfaceAdapters/controllers/MovieCatalogController";

function* getMovieList( { payload: args } : { payload: GetMovieListInputDTO}) {
  try {
    const movieController : MovieController = yield getContext("movieController");
    const response : GetMovieListOutputDTO = yield movieController._movieRepository.getMovieList(args)
    yield put(getMovieListSuccess(response));
  } catch (error) {
    yield put(getMovieListFail(error));

  }
}

function* getMovieById( { payload: args } : { payload: GetMovieByIdInputDTO}) {
  try {
    const movieController : MovieController = yield getContext("movieController");
    const response : GetMovieByIdOutputDTO = yield movieController._movieRepository.getMovieById(args)
    yield put(getMovieByIdSuccess(response));
  } catch (error) {
    yield put(getMovieByIdFail(error));

  }
}

function* movieSaga() {
  yield takeEvery(GET_MOVIE_LIST as any, getMovieList);
  yield takeEvery(GET_MOVIE_BY_ID as any, getMovieById);
}

export default movieSaga;

