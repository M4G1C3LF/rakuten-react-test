import { GetMovieByIdInputDTO } from "../../../movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../../movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../movie/shared/dto/GetMovieListOutputDTO";
import { GetMovieStreamInputDTO } from "../../../movie/shared/dto/GetMovieStreamInputDTO";
import { GetMovieStreamOutputDTO } from "../../../movie/shared/dto/GetMovieStreamOutputDTO";


export interface IMovieRepository {
	getMovieById(args: GetMovieByIdInputDTO): Promise<GetMovieByIdOutputDTO>;
	getMovieList(args: GetMovieListInputDTO): Promise<GetMovieListOutputDTO>;
	getMovieStream(args: GetMovieStreamInputDTO): Promise<GetMovieStreamOutputDTO>
}
