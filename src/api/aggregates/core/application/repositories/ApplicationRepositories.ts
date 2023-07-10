import { ILogRepository } from "./ILogRepository";
import { IMovieRepository } from "./IMovieRepository";

export interface ApplicationRepositories {
	_logger: ILogRepository,
	_movieRepository: IMovieRepository,
}