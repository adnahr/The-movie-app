import Axios from 'axios';
import {
	REQUEST_MOVIES,
	REQUEST_MOVIES_ERROR,
	REQUEST_MOVIES_SUCCESS,
} from '../../const/redux.const';
import { API_URLS } from '../../const/redux.const';
import Movie from '../../Types/MovieTypes/MovieType';

export const requestMoviesSuccess = (movies: Movie[]) => {
	return {
		type: REQUEST_MOVIES_SUCCESS,
		payload: {
			movies: movies,
		},
	};
};

export const requestMoviesFailure = (error: any) => {
	return {
		type: REQUEST_MOVIES_ERROR,
	};
};

export const requestMoviesLoading = () => {
	return {
		type: REQUEST_MOVIES,
	};
};
export const requestMovies = () => {
	return async (dispatch: any) => {
		dispatch(requestMoviesLoading());
		try {
			const data = await Axios.get(API_URLS.MOVIES);
			dispatch(requestMoviesSuccess(data.data.results));
		} catch (err: any) {
			dispatch(requestMoviesFailure(err));
		}
	};
};

export const searchMovies = (search: string) => {
	return async (dispatch: any) => {
		dispatch(requestMoviesLoading());
		try {
			const data = await Axios.get(API_URLS.SEARCH_MOVIE(search));
			console.log('SEARCH MOVIES', data);
			dispatch(requestMoviesSuccess(data.data.results));
		} catch (err: any) {
			dispatch(requestMoviesFailure(err));
		}
	};
};
