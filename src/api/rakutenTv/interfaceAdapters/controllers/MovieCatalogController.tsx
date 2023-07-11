

import { IMovieRepository } from "../../../aggregates/core/application/repositories/IMovieRepository";
import { RepositoryCollection } from "../../../aggregates/core/installer/GenericInstaller";
import { GenericController } from "../../../aggregates/core/interfaceAdapters/GenericController";
import { GetMovieByIdInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListOutputDTO";
import { GetMovieStreamInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamInputDTO";
import { GetMovieStreamOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamOutputDTO";
import { getMovieById } from "../../domain/useCases/getMovieCatalogById";
import { getMovieList } from "../../domain/useCases/getMovieCatalogList";
import { getMovieStream } from "../../domain/useCases/getMovieStream";

export class MovieController extends GenericController<RepositoryCollection> implements IMovieRepository {
	constructor(repositories: RepositoryCollection) {
		super(repositories);
	}
	getMovieStream(args: GetMovieStreamInputDTO): Promise<GetMovieStreamOutputDTO> {
		return getMovieStream(this._movieRepository.getMovieStream, args);
	}
	getMovieList(args: GetMovieListInputDTO): Promise<GetMovieListOutputDTO> {
		return getMovieList(this._movieRepository.getMovieList, args);
	}
	getMovieById(args: GetMovieByIdInputDTO): Promise<GetMovieByIdOutputDTO> {
		return getMovieById(this._movieRepository.getMovieById, args);
	}
}
