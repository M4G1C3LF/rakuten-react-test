import { IMovieRepository } from "../../../aggregates/core/application/repositories/IMovieRepository";
import { GetMovieByIdInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdInputDTO";
import { GetMovieByIdOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieByIdOutputDTO";
import { GetMovieListInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListInputDTO";
import { GetMovieListOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieListOutputDTO";
import { GetMovieStreamInputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamInputDTO";
import { GetMovieStreamOutputDTO } from "../../../aggregates/movie/shared/dto/GetMovieStreamOutputDTO";
import { Genre } from "../../../aggregates/movie/shared/types/Genre";
import { StaffMember } from "../../../aggregates/movie/shared/types/StaffMember";
import { HttpRakutenTvService } from "../../infrastructure/HttpRakutenTvService";
import { GetRakutenTvMovieByIdOutputDTO } from "../../shared/dto/GetRakutenTvMovieByIdOutputDTO";
import { GetRakutenTvMovieListInputDTO } from "../../shared/dto/GetRakutenTvMovieListInputDTO";


export class RakutenTvMovieMapper implements IMovieRepository {
	movieService: HttpRakutenTvService;
	constructor(movieService: HttpRakutenTvService) {
		this.movieService = movieService;
	}
	async getMovieStream(args: GetMovieStreamInputDTO): Promise<GetMovieStreamOutputDTO> {
		const response = await this.movieService.getMovieStreamById(args);
		if (!response.data.stream_infos || !response.data.stream_infos[0])
			return {
				url: ""
			}
	
		return {
			url: response.data.stream_infos[0].url
		}
	}
	async getMovieList(args: GetMovieListInputDTO): Promise<GetMovieListOutputDTO> {
		const response = await this.movieService.getMovieList(args);

		return {
			title: response.data.name,
			movies: response.data.contents.data.map((movie) => {
				return {
					id: movie.id,
					image: movie.images.standard_artwork,
					title: movie.title,
				}
			})
		}
	}
	async getMovieById(args: GetMovieByIdInputDTO): Promise<GetMovieByIdOutputDTO> {
		const response = await this.movieService.getMovieById(args);
		
		const getLanguagues = (response : GetRakutenTvMovieByIdOutputDTO) => {
			const languages : string[] = [];
			response.data.view_options.private.streams.forEach(stream => {
				return stream.audio_languages.forEach(language => {
					languages.push(language.name);
				});
			})
			return languages
		}
		const getSubtitles = (response : GetRakutenTvMovieByIdOutputDTO) => {
			const subtitles : string[] = [];
			response.data.view_options.private.streams.forEach(stream => {
				return stream.subtitle_languages.forEach(language => {
					subtitles.push(language.name);
				});
			})
			return subtitles
		}
		const findScoreByPlatform = (response : GetRakutenTvMovieByIdOutputDTO, platform : string) : number => {
			const score = response.data.scores.find(score => {
				return score.site.name === platform;
			});
			if (score)
				return score.score;
			return -1;
		}

		const getGenres = (response : GetRakutenTvMovieByIdOutputDTO) => {
			const genres : Genre[] = [];
			response.data.genres.forEach(genre => {
				genres.push({
					id: genre.id,
					name: genre.name,
					image: genre.additional_images.artwork,
					link: `https://www.rakuten.tv/es/genres/${genre.id}/movies`,
				});
			});
			return genres;
		}

		const getStaff = (response : GetRakutenTvMovieByIdOutputDTO) => {
			const staff : StaffMember[] = [];
			response.data.directors.forEach(director => {
				staff.push({
					name: director.name,
					role: "Director",
					image: director.photo,
					link: `https://www.rakuten.tv/es/search/${director.id}`,
				});
			});
			response.data.actors.forEach(actor => {
				staff.push({
					name: actor.name,
					role: "Actor",
					image: actor.photo,
					link: `https://www.rakuten.tv/es/search/${actor.id}`,
				});
			});
			return staff;
		}
			
		return {
			id: response.data.id,
			title: response.data.title,
			description: response.data.plot,
			duration: response.data.duration,
			releaseYear: response.data.year,
			screenshotUrl: response.data.images.snapshot,
			classification: response.data.classification.age,
			audioQualities: response.data.view_options.support.audio_qualities.map((audioQuality) => {
				return audioQuality.name;
			}),
			videoQualities: response.data.view_options.support.video_qualities.map((videoQuality) => {
				return videoQuality.name;
			}),
			languages: getLanguagues(response),
			subtitles: getSubtitles(response),
			scores: {
				imdb: findScoreByPlatform(response, "IMDb"),
				tmdb: findScoreByPlatform(response, "The Movie Database"),
			},
			genres: getGenres(response),
			staff: getStaff(response)
		}
	}

	
}
