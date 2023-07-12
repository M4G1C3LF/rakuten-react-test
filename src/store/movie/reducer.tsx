import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
  GET_MOVIE_STREAM,
  GET_MOVIE_STREAM_SUCCESS,
  GET_MOVIE_STREAM_FAIL,

} from "./actionTypes";

const INIT_STATE = {
  movieDetail: null,
  isLoadingMovieDetail: false,
  movieDetailError: null,
  movieLists: [[]],
  isLoadingMovieList: false,
  movieListError: null,
  movieStreamUrl: null,
  isLoadingMovieStream: false,
  movieStreamError: null,
};

const movie = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        isLoadingMovieDetail: true,
        movieDetail: INIT_STATE.movieDetail,
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
      let newMovieLists;
      const movieListIndex = state.movieLists.findIndex((movieList : any) => movieList.title === action.payload.movieList.title);
      if (movieListIndex !== -1) {
        newMovieLists = [...state.movieLists];
        newMovieLists[movieListIndex] = action.payload.movieList;
      } else {
        if (state.movieLists.length === 1 && state.movieLists[0].length === 0) {
          newMovieLists = [action.payload.movieList];
        } else {
          newMovieLists = [...state.movieLists, action.payload.movieList];
        }
      }  
      
      return {
        ...state,
        movieLists: newMovieLists,
        isLoadingMovieList: false,
      };

    case GET_MOVIE_LIST_FAIL:
      return {
        ...state,
        movieListError: action.payload,
        isLoadingMovieList: false,
      };

    case GET_MOVIE_STREAM:
      return {
        ...state,
        isLoadingMovieStream: true,
        movieStreamUrl: INIT_STATE.movieStreamUrl,
      };
      
    case GET_MOVIE_STREAM_SUCCESS:
          
      return {
        ...state,
        movieStreamUrl: action.payload.stream.url,
        isLoadingMovieStream: false,
      };

    case GET_MOVIE_STREAM_FAIL:
      return {
        ...state,
        movieStreamUrl: INIT_STATE.movieStreamUrl,
        isLoadingMovieStream: false,
      };

		default:
				return state;
		}
};

export default movie;