import { REQUEST_MOVIES_ERROR, REQUEST_MOVIES_SUCCESS, REQUEST_MOVIES } from '../../const'
import { MovieActionType, MovieStateType } from '../../Types'

const initialState: MovieStateType = {
  movies: [],
  isLoading: false,
  error: undefined,
}

const MovieReducer = (state = initialState, action: MovieActionType): MovieStateType => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
      }

    case REQUEST_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default MovieReducer
