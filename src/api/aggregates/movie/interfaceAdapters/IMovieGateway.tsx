export interface IMovieGateway {
	getMovieById(input: any): Promise<any>;
	getMovieList(input: any): Promise<any>;
	getMovieStreamById(input: any): Promise<any>;
}
