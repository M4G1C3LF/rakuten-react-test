import { GetMovieByIdInputDTO } from "../../../movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../../movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../movie/shared/dto/GetMovieListOutputDTO";


export interface IMovieRepository {
	getMovieById(args: GetMovieByIdInputDTO): Promise<GetMovieByIdOutputDTO>;
	getMovieList(args: GetMovieListInputDTO): Promise<GetMovieListOutputDTO>;
}
