import MovieType from './MovieType';

export interface MovieActionType {
	type: string;
	movies: MovieType[];
}
