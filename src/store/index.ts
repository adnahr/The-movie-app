import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppStateType } from '../Types'
import rootReducer from './reducers'

const middleware = [thunk]

const initialState: AppStateType = {
  tvShowsState: {
    tvShows: [],
    isLoading: true,
    error: undefined,
  },
  moviesState: {
    movies: [],
    isLoading: true,
    error: undefined,
  },
  searchState: {
    search: '',
  },
}
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store
