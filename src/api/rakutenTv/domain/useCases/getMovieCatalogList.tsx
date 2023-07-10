import { GetMovieListInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListOutputDTO";

export const getMovieList = async (
	getMovieList: Function,
	args: GetMovieListInputDTO,
): Promise<GetMovieListOutputDTO> => {
	return await getMovieList(args);
}