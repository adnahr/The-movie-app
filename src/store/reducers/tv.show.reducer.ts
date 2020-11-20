import { REQUEST_TV_SHOWS_ERROR, REQUEST_TV_SHOWS_SUCCESS, REQUEST_TV_SHOWS } from '../../const'
import { TvShowActionType, TvShowStateType } from '../../Types'

const initialState: TvShowStateType = {
  tvShows: [],
  isLoading: false,
  error: undefined,
}

const TvShowReducer = (state = initialState, action: TvShowActionType): TvShowStateType => {
  switch (action.type) {
    case REQUEST_TV_SHOWS:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvShows: action.payload.tvShows,
      }

    case REQUEST_TV_SHOWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default TvShowReducer
