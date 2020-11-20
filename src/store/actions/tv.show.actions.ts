import Axios from 'axios'
import { Dispatch } from 'redux'
import { REQUEST_TV_SHOWS, REQUEST_TV_SHOWS_ERROR, REQUEST_TV_SHOWS_SUCCESS, API_URLS } from '../../const'
import { ErrorType, TvShowType } from '../../Types'

export const requestTvShowsSuccess = (tvShows: TvShowType[]) => {
  return {
    type: REQUEST_TV_SHOWS_SUCCESS,
    payload: {
      tvShows,
    },
  }
}

export const requestTvShowsFailure = (error: ErrorType) => {
  return {
    type: REQUEST_TV_SHOWS_ERROR,
    error,
  }
}

export const requestTvShowsLoading = () => {
  return {
    type: REQUEST_TV_SHOWS,
  }
}
export const requestTvShows = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestTvShowsLoading())
    try {
      const data = await Axios.get(API_URLS.TV_SHOWS)
      dispatch(requestTvShowsSuccess(data.data.results))
    } catch (err) {
      dispatch(requestTvShowsFailure(err))
    }
  }
}

export const searchTvShows = (search: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestTvShowsLoading())
    try {
      const data = await Axios.get(API_URLS.SEARCH_TV_SHOW(search))
      dispatch(requestTvShowsSuccess(data.data.results))
    } catch (err) {
      dispatch(requestTvShowsFailure(err))
    }
  }
}
