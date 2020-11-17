import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

let middleware = [];

middleware.push(thunk);
const initialState = {
	tvShowsState: {
		twShows: [],
		isLoading: true,
	},
};
const store = createStore(
	rootReducer,
	//@ts-ignore
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
