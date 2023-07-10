import { MovieMinified } from "../types/MovieMinified";

export type GetMovieListOutputDTO = {
    title: string;
    movies: MovieMinified[];
};