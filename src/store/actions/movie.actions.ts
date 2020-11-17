import { Dispatch } from 'redux';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from '../../const/redux.const';


import axios from 'axios';

import MovieType from '../../Types/MovieTypes/MovieType';
import MovieActionType from '../../Types/MovieTypes/MovieActionType';
import MovieDetailType from '../../Types/MovieTypes/MovieDetailType';
import MovieStateTxpe from '../../Types/MovieTypes/MovieStateType';

export const fetchMovies = (): MovieActionType => ({
  type: FETCH_MOVIES,
  //isLoading: true,
  movies: [],
});

export const fetchMoviesSuccess = (movies: MovieType[]): MovieActionType => ({
  type: FETCH_MOVIES_SUCCESS,
  //isLoading: false,
  movies,
});

//error type
export const fetchMoviesError = (error: any): any => ({
  type: FETCH_MOVIES_ERROR,
  isLoading: false,
  error,
  movies: [] as any,
});

export const loadMovies = () => async (dispatch: Dispatch) => {
  dispatch(fetchMovies());
  try {
    const {
      data: { results: moviesResult },
    } = await axios.get('/movie/top_rated');
    dispatch(fetchMoviesSuccess(moviesResult.splice(0, 10)));
  } catch (err) {
    dispatch(fetchMoviesError(err.response.data));
  }
};
export const searchMovies = (query: string) => async (dispatch: Dispatch) => {
  dispatch(fetchMovies());
  try {
    const {
      data: { results: moviesResult },
    } = await axios.get('/search/movie', {
      params: {
        query,
      },
    });
    dispatch(fetchMoviesSuccess(moviesResult));
  } catch (err) {
    dispatch(fetchMoviesError(err.response.data));
  }
};
