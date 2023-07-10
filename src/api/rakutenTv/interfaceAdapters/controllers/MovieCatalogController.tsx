

import { IMovieRepository } from "../../../aggregates/core/application/repositories/IMovieRepository";
import { RepositoryCollection } from "../../../aggregates/core/installer/GenericInstaller";
import { GenericController } from "../../../aggregates/core/interfaceAdapters/GenericController";
import { GetMovieByIdInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListOutputDTO";
import { getMovieById } from "../../domain/useCases/getMovieCatalogById";
import { getMovieList } from "../../domain/useCases/getMovieCatalogList";

export class MovieController extends GenericController<RepositoryCollection> implements IMovieRepository {
	private _repositories: RepositoryCollection;
	constructor(repositories: RepositoryCollection) {
		super(repositories);
		this._repositories = repositories;
	}
	getMovieList(args: GetMovieListInputDTO): Promise<GetMovieListOutputDTO> {
		return getMovieList(this._movieRepository.getMovieList, args);
	}
	getMovieById(args: GetMovieByIdInputDTO): Promise<GetMovieByIdOutputDTO> {
		return getMovieById(this._movieRepository.getMovieById, args);
	}
}
