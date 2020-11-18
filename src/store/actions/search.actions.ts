import { SEARCH } from '../../const/redux.const';
export const searchAction = (search: string) => {
	return {
		type: SEARCH,
		payload: {
			search,
		},
	};
};
