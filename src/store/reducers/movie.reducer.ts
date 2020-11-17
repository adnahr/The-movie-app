import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from '../../const/redux.const';

const initialState: any = {
  movies: [],
  isLoading: undefined,
  error: undefined,
};

const moviesReducer = (
  state = initialState,
  action: any
): any => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: action.isLoading,
        movies: [] as any,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        movies: action.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        movies: [] as any,
      };
    default:
      return state;
  }
};

export default moviesReducer;
