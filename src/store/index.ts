import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';



const initialState: any = {
  search: '',
  moviesState: {
    error: undefined,
    isLoading: undefined,
    movies: []
  },
  tvShowsState: {
    error: undefined,
    isLoading: undefined,
    tvShows: []
  }
};


let middleware = [];


  middleware = [thunk];
  
  const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

