import { GenericInstaller } from '../../aggregates/core/installer/GenericInstaller';
import { HttpRakutenTvService } from '../infrastructure/HttpRakutenTvService';
import { MovieController } from '../interfaceAdapters/controllers/MovieCatalogController';
import { RakutenTvMovieMapper } from '../interfaceAdapters/mappers/RakutenTvMovieMapper';

const SERVICE_NAME = 'RakutenTv Movie Catalog Service';
const LOG_PATH = './logs/api.logs';

export default class ApplicationInstaller extends GenericInstaller {

	_controller: MovieController;

	constructor() {
		super(SERVICE_NAME, LOG_PATH);
		this._controller = this.initializeController();
	}

	initializeController() {
		const logRepository = this.logger;
		const movieService = new HttpRakutenTvService();
		const movieRepository = new RakutenTvMovieMapper(movieService);

		return new MovieController({
			_logger: logRepository,
			_movieRepository: movieRepository,
		});
	}

	getController(): MovieController {
		return this._controller;
	}
}
