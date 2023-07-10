import { GetMovieByIdInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../api/aggregates/movie/shared/dto/GetMovieListOutputDTO";

import {
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAIL,
} from "./actionTypes";


export const getMovieById = (args: GetMovieByIdInputDTO) => ({
  type: GET_MOVIE_BY_ID,
  payload: args,
});

export const getMovieByIdSuccess = (result : GetMovieByIdOutputDTO) => ({
  type: GET_MOVIE_BY_ID_SUCCESS,
  payload: { movie: result },
});

export const getMovieByIdFail = (error : any) => ({
  type: GET_MOVIE_BY_ID_FAIL,
  payload: error,
});

export const getMovieList = (args: GetMovieListInputDTO) => ({
  type: GET_MOVIE_LIST,
  payload: args,
});

export const getMovieListSuccess = (result: GetMovieListOutputDTO) => ({
  type: GET_MOVIE_LIST_SUCCESS,
  payload: { movieList: result },
});

export const getMovieListFail = (error : any) => ({
  type: GET_MOVIE_LIST_FAIL,
  payload: error,
});