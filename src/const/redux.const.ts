export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const FETCH_TV_SHOWS = 'FETCH_TV_SHOWS';
export const FETCH_TV_SHOWS_SUCCESS = 'FETCH_TV_SHOWS_SUCCESS';
export const FETCH_TV_SHOWS_ERROR = 'FETCH_TV_SHOWS_ERROR';

const API_KEY = '613a032dd12fc49aed6a4ab4be1a3abc';

export const API_URLS = {
    TV_SHOWS : `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
    MOVIES : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    SEARCH_TV_SHOW : (search : string) => `https://api.themoviedb.org/3/search/tv/?query=${search}&api_key=${API_KEY}`,
    SEARCH_MOVIE : (search: string) => `https://api.themoviedb.org/3/search/movie/?query=${search}&api_key=${API_KEY}`,
    TV_SHOW : (search : string) => `https://api.themoviedb.org/3/tv/${search}?api_key=${API_KEY}`,
    MOVIE : (search: string) => `https://api.themoviedb.org/3/movie/${search}?api_key=${API_KEY}`
}