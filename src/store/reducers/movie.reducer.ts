import { act } from 'react-dom/test-utils';
import MovieList from '../../Components/Movie/MovieList';
import {
	REQUEST_MOVIES_ERROR,
	REQUEST_MOVIES_SUCCESS,
	REQUEST_MOVIES,
} from '../../const/redux.const';
import { MovieStateType } from '../../Types/MovieTypes/MovieStateType';
//import { requestMovieSuccess } from '../actions/movies.actions';

const initialState: MovieStateType = {
	movies: [],
	isLoading: false,
};

export const MovieReducer = (
	state = initialState,
	action: any
): MovieStateType => {
	switch (action.type) {
		case REQUEST_MOVIES:
			return {
				...state,
				isLoading: true,
			};
		case REQUEST_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				movies: action.payload.movies,
			};

		case REQUEST_MOVIES_ERROR:
			return {
				...state,
				isLoading: false,
			};

		default:
			return state;
	}
};
