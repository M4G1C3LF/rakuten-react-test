import { HttpRakutenTvService } from "../../../rakutenTv/infrastructure/HttpRakutenTvService";
import { ILogRepository } from "../application/repositories/ILogRepository";
import { IMovieRepository } from "../application/repositories/IMovieRepository";
import ConsoleLogService from "../infrastructure/ConsoleLogService";
import { drawLine } from "../shared/utils/StringUtils";

export class GenericInstaller {

	logger: ILogRepository;

	_serviceName: string;
	_logPath: string;

	constructor(
		serviceName: string,
		logPath: string,
	) {
		this._serviceName = serviceName;
		this._logPath = logPath;
		this.logger = new ConsoleLogService();
		
		this.printInitialMessage(this._serviceName);
	}

	printInitialMessage(serviceName: string) {
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 2, '=') +
			serviceName +
			drawLine(serviceName.length * 2, '='),
		);
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
		console.log(drawLine(serviceName.length * 5, '='));
	}

	initializeRepositories<
		T extends Partial<RepositoryCollection>,
		UseCaseCollections = {
			_logger: ILogRepository,
			_movieService: IMovieRepository,
			
		}
	>(args: T) {

		const logRepository = args._logger || new ConsoleLogService();
		const movieRepository = args._movieRepository || new HttpRakutenTvService();
		const useCaseCollections = {
			_logger: logRepository,
			_movieService: movieRepository,
		}

		return useCaseCollections as UseCaseCollections;
	}
}

export interface RepositoryCollection {
	_logger: ILogRepository,
	_movieRepository: IMovieRepository,
}