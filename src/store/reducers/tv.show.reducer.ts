import { act } from 'react-dom/test-utils';
import TvShowList from '../../Components/Tv Show/TvShowList';
import {
	FETCH_TV_SHOWS_ERROR,
	FETCH_TV_SHOWS_SUCCESS,
	FETCH_TV_SHOWS,
} from '../../const/redux.const';
import { TvShowStateType } from '../../Types/TvShowTypes/TvShowStateType';
import { requestTvShowsSuccess } from '../actions/tv.show.actions';

const initialState: TvShowStateType = {
	tvShows: [],
	isLoading: false,
};

export const TvShowReducer = (
	state = initialState,
	action: any
): TvShowStateType => {
	switch (action.type) {
		case FETCH_TV_SHOWS:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_TV_SHOWS_SUCCESS:
			return {
				...state,
				isLoading: false,
				tvShows: action.payload.tvShows,
			};

		case FETCH_TV_SHOWS_ERROR:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};