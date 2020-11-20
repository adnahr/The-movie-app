import { SEARCH } from '../../const/redux.const';
import { SearchType } from '../../Types';

export const SearchReducer = (state = { search: '' }, action: SearchType) => {
	switch (action.type) {
		case SEARCH:
			return action.payload;

		default:
			return state;
	}
};
