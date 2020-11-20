import Axios from 'axios';
import { Dispatch } from 'redux';
import {
	REQUEST_MOVIES,
	REQUEST_MOVIES_ERROR,
	REQUEST_MOVIES_SUCCESS,
} from '../../const/redux.const';
import { API_URLS } from '../../const/redux.const';
import { ErrorType, MovieActionType, MovieType } from '../../Types';

export const requestMoviesSuccess = (movies: MovieType[]): MovieActionType => {
	return {
		type: REQUEST_MOVIES_SUCCESS,
		payload: {
			movies: movies,
			isLoading: false,
		},
	};
};

export const requestMoviesFailure = (error: ErrorType): MovieActionType => {
	return {
		type: REQUEST_MOVIES_ERROR,
		payload: {
			movies: [],
			isLoading: false,
			error: error,
		},
	};
};

export const requestMoviesLoading = () => {
	return {
		type: REQUEST_MOVIES,
	};
};
export const requestMovies = () => {
	return async (dispatch: Dispatch) => {
		dispatch(requestMoviesLoading());
		try {
			const data = await Axios.get(API_URLS.MOVIES);
			dispatch(requestMoviesSuccess(data.data.results));
		} catch (err) {
			dispatch(requestMoviesFailure(err));
		}
	};
};

export const searchMovies = (search: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(requestMoviesLoading());
		try {
			const data = await Axios.get(API_URLS.SEARCH_MOVIE(search));
			console.log('SEARCH MOVIES', data);
			dispatch(requestMoviesSuccess(data.data.results));
		} catch (err) {
			dispatch(requestMoviesFailure(err));
		}
	};
};
