export const SEARCH = 'SEARCH'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const REQUEST_MOVIES_SUCCESS = 'REQUEST_MOVIES_SUCCESS'
export const REQUEST_MOVIES_ERROR = 'REQUEST_MOVIES_ERROR'

export const REQUEST_TV_SHOWS = 'REQUEST_TV_SHOWS'
export const REQUEST_TV_SHOWS_SUCCESS = 'REQUEST_TV_SHOWS_SUCCESS'
export const REQUEST_TV_SHOWS_ERROR = 'REQUEST_TV_SHOWS_ERROR'

const API_KEY = '613a032dd12fc49aed6a4ab4be1a3abc'
export const URL = 'https://image.tmdb.org/t/p/w500'

export const API_URLS = {
  TV_SHOWS: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
  MOVIES: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  SEARCH_TV_SHOW: (search: string) => `https://api.themoviedb.org/3/search/tv/?query=${search}&api_key=${API_KEY}`,
  SEARCH_MOVIE: (search: string) => `https://api.themoviedb.org/3/search/movie/?query=${search}&api_key=${API_KEY}`,
  TV_SHOW: (search: string) => `https://api.themoviedb.org/3/tv/${search}?api_key=${API_KEY}`,
  MOVIE: (search: string) => `https://api.themoviedb.org/3/movie/${search}?api_key=${API_KEY}`,
}
