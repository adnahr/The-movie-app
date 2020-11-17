import MovieType from './MovieType';

export default interface MovieActionType {
  type: string;
  movies: MovieType[];
}
