import { combineReducers } from 'redux'
import { AppStateType } from '../../Types'
import MovieReducer from './movie.reducer'
import SearchReducer from './search.reducer'
import TvShowReducer from './tv.show.reducer'

const rootReducer = combineReducers<AppStateType>({
  tvShowsState: TvShowReducer,
  moviesState: MovieReducer,
  searchState: SearchReducer,
})

export default rootReducer
