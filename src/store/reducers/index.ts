import { combineReducers } from 'redux';
import moviesReducer from './movie.reducer';
import { TvShowReducer } from './tv.show.reducer';

const rootReducer = combineReducers({
	tvShowsState: TvShowReducer,
});

export default rootReducer;
