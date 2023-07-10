import { ILogRepository } from '../application/repositories/ILogRepository';
import { ApplicationRepositories } from '../application/repositories/ApplicationRepositories';

export class GenericController<T extends ApplicationRepositories> {


	_logger: ILogRepository;
	_movieRepository: T["_movieRepository"];

	constructor(repositories: T) {

		this._logger = repositories._logger;
		this._movieRepository = repositories._movieRepository;
	}

	public writeLog(str: string): void {
		this._logger.write(str);
	}

}
