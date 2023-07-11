import { GetMovieStreamInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamInputDTO";
import { GetMovieStreamOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamOutputDTO";

export const getMovieStream = async (
	getMovieStream: Function,
	args: GetMovieStreamInputDTO,
): Promise<GetMovieStreamOutputDTO> => {
	return await getMovieStream(args);
}