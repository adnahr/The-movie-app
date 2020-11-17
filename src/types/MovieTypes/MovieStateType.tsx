import MovieType from './MovieType';


export default interface MovieStateType {
  isLoading: boolean | null;
  movies: MovieType[];
}
