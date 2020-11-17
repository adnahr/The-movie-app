import Axios from 'axios';
import {
	FETCH_TV_SHOWS,
	FETCH_TV_SHOWS_ERROR,
	FETCH_TV_SHOWS_SUCCESS,
} from '../../const/redux.const';
import { API_URLS } from '../../const/redux.const';
import TvShow from '../../Types/TvShowTypes/TvShowType';

export const requestTvShowsSuccess = (tvShows: TvShow[]) => {
	return {
		type: FETCH_TV_SHOWS_SUCCESS,
		payload: {
			tvShows: tvShows,
		},
	};
};

export const requestTvShowsFailure = (error: any) => {
	return {
		type: FETCH_TV_SHOWS_ERROR,
	};
};

export const requestTvShowsLoading = () => {
	return {
		type: FETCH_TV_SHOWS,
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
