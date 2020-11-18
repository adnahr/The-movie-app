import Axios from 'axios';
import {
	REQUEST_TV_SHOWS,
	REQUEST_TV_SHOWS_ERROR,
	REQUEST_TV_SHOWS_SUCCESS,
} from '../../const/redux.const';
import { API_URLS } from '../../const/redux.const';
import TvShow from '../../Types/TvShowTypes/TvShowType';

export const requestTvShowsSuccess = (tvShows: TvShow[]) => {
	return {
		type: REQUEST_TV_SHOWS_SUCCESS,
		payload: {
			tvShows: tvShows,
		},
	};
};

export const requestTvShowsFailure = (error: any) => {
	return {
		type: REQUEST_TV_SHOWS_ERROR,
	};
};

export const requestTvShowsLoading = () => {
	return {
		type: REQUEST_TV_SHOWS,
	};
};
export const requestTvShows = () => {
	return async (dispatch: any) => {
		dispatch(requestTvShowsLoading());
		try {
			const data = await Axios.get(API_URLS.TV_SHOWS);
			dispatch(requestTvShowsSuccess(data.data.results));
		} catch (err: any) {
			dispatch(requestTvShowsFailure(err));
		}
	};
};

export const searchTvShows = (search: string) => {
	return async (dispatch: any) => {
		dispatch(requestTvShowsLoading());
		try {
			const data = await Axios.get(API_URLS.SEARCH_TV_SHOW(search));
			console.log('SEARCH TV SHOWS', data);
			dispatch(requestTvShowsSuccess(data.data.results));
		} catch (err: any) {
			dispatch(requestTvShowsFailure(err));
		}
	};
};
