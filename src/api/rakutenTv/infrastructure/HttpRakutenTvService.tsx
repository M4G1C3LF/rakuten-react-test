
import { HttpService } from "../../aggregates/core/infrastructure/HttpService";
import { IMovieGateway } from "../../aggregates/movie/interfaceAdapters/IMovieGateway";
import { GetRakutenTvMovieByIdInputDTO } from "../shared/dto/GetRakutenTvMovieByIdInputDTO";
import { GetRakutenTvMovieByIdOutputDTO } from "../shared/dto/GetRakutenTvMovieByIdOutputDTO";
import { GetRakutenTvMovieListInputDTO } from "../shared/dto/GetRakutenTvMovieListInputDTO";
import { GetRakutenTvMovieListOutputDTO } from "../shared/dto/GetRakutenTvMovieListOutputDTO";
import { GetRakutenTvMovieStreamInputDTO } from "../shared/dto/GetRakutenTvMovieStreamInputDTO";
import { GetRakutenTvMovieStreamOutputDTO } from "../shared/dto/GetRakutenTvMovieStreamOutputDTO";

const BASE_URL = "https://gizmo.rakuten.tv/v3";

export class HttpRakutenTvService extends HttpService implements IMovieGateway {

	constructor() {
		super({
			name: "Rakuten Tv Service",
			serviceOwner: "Sergio Balaguer Carmona",
			type: "Http",
		});
	}
	async getMovieStreamById(input: GetRakutenTvMovieStreamInputDTO): Promise<GetRakutenTvMovieStreamOutputDTO> {
		return await this.post({
			url: `${BASE_URL}/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es`,
			body: {
					audio_language: "SPA",
					audio_quality: "2.0",
					content_id: input.data.id,
					content_type: "movies",
					device_serial:  "device_serial_1",
					device_stream_video_quality: "FHD",
					player: "web:PD-NONE",
					subtitle_language: "MIS",
					video_type: "trailer"
			},
		});
	}
	async getMovieList(args: GetRakutenTvMovieListInputDTO): Promise<GetRakutenTvMovieListOutputDTO> {
		return await this.get({
			url: `${BASE_URL}/lists/${args.data.id}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
		});
	}
	async getMovieById(args: GetRakutenTvMovieByIdInputDTO): Promise<GetRakutenTvMovieByIdOutputDTO> {
		return await this.get({
			url: `${BASE_URL}/movies/${args.data.id}?classification_id=5&device_identifier=web&locale=es&market_code=es`,
		});
	}

}
