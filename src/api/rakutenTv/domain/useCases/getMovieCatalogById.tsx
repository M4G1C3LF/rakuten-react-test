import { GetMovieByIdInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdOutputDTO";

export const getMovieById = async (
	getMovieById: Function,
	args: GetMovieByIdInputDTO,
): Promise<GetMovieByIdOutputDTO> => {
	return await getMovieById(args);
}