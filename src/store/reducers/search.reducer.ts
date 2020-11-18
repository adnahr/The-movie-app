import { SEARCH } from '../../const/redux.const';

export const SearchReducer = (state = { search: '' }, action: any) => {
	switch (action.type) {
		case SEARCH:
			return action.payload;

		default:
			return state;
	}
};
