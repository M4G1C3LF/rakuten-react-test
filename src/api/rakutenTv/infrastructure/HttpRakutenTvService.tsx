
import { HttpService } from "../../aggregates/core/infrastructure/HttpService";
import { IMovieGateway } from "../../aggregates/movie/interfaceAdapters/IMovieGateway";
import { GetRakutenTvMovieByIdInputDTO } from "../shared/dto/GetRakutenTvMovieByIdInputDTO";
import { GetRakutenTvMovieByIdOutputDTO } from "../shared/dto/GetRakutenTvMovieByIdOutputDTO";
import { GetRakutenTvMovieListInputDTO } from "../shared/dto/GetRakutenTvMovieListInputDTO";
import { GetRakutenTvMovieListOutputDTO } from "../shared/dto/GetRakutenTvMovieListOutputDTO";

const BASE_URL = "https://rakutenTv.co/api/v2";

export class HttpRakutenTvService extends HttpService implements IMovieGateway {

	constructor() {
		super({
			name: "Rakuten Tv Service",
			serviceOwner: "Sergio Balaguer Carmona",
			type: "Http",
		});
	}
	async getMovieList(args: GetRakutenTvMovieListInputDTO): Promise<GetRakutenTvMovieListOutputDTO> {
		return await this.get({
			url: `${BASE_URL}/v3/lists/${args.data.id}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
		});
	}
	async getMovieById(args: GetRakutenTvMovieByIdInputDTO): Promise<GetRakutenTvMovieByIdOutputDTO> {
		return await this.get({
			url: `${BASE_URL}v3/movies/${args.data.id}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
		});
	}

}
