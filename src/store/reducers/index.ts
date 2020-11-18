import { combineReducers } from 'redux';
import { MovieReducer } from './movie.reducer';
import { SearchReducer } from './search.reducer';
import { TvShowReducer } from './tv.show.reducer';

const rootReducer = combineReducers({
	tvShowsState: TvShowReducer,
	moviesState: MovieReducer,
	searchState: SearchReducer,
});

export default rootReducer;
