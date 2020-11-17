import { combineReducers } from 'redux';
import moviesReducer from './movie.reducer';


const rootReducer = combineReducers({
  moviesState: moviesReducer
});

export default rootReducer;