import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL
} from "./actionTypes";

const INIT_STATE = {
  movieDetail: null,
  isLoadingMovieDetail: false,
  movieDetailError: null,
  movieList: [],
  isLoadingMovieList: false,
  movieListError: null,
};

const movie = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        isLoadingMovieDetail: true,
        movieDetailError: null,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        movieDetail: action.payload.movie,
        isLoadingMovieDetail: false,
      };

    case GET_MOVIE_BY_ID_FAIL:
      return {
        ...state,
        movieDetail: INIT_STATE.movieDetail,
        movieDetailError: action.payload,
        isLoadingMovieDetail: false,
      };

    case GET_MOVIE_LIST:
      return {
        ...state,
        isLoadingMovieList: true,
        movieListError: null,
      };
      
    case GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieList: action.payload.movieList,
        isLoadingMovieList: false,
      };

    case GET_MOVIE_LIST_FAIL:
      return {
        ...state,
        movieList: INIT_STATE.movieList,
        movieListError: action.payload,
        isLoadingMovieList: false,
      };

		default:
				return state;
		}
};

export default movie;