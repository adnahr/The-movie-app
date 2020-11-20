export interface VideosType {
  videos?: {
    results?: Array<{
      id: string
      iso_639_1?: string
      iso_3166_1?: string
      key: string
      name: string
      site: string
      size: number
      type?: string
    }>
  }
}
export interface DataType extends VideosType {
  id: number
  poster_path: string
  first_air_date: string
  overview: string
}

export interface MovieType extends DataType {
  original_title?: string
}

export interface TvShowType extends DataType {
  original_name?: string
}

export interface ErrorType {
  message: string
}

export interface CommonStateType {
  isLoading: boolean
  error?: ErrorType
}

export interface MovieStateType extends CommonStateType {
  movies: MovieType[]
}

export interface TvShowStateType extends CommonStateType {
  tvShows: TvShowType[]
}
export interface MovieActionType {
  type: string
  payload: MovieStateType
}

export interface TvShowActionType {
  type: string
  payload: TvShowStateType
}

export interface SearchType {
  type: string
  payload: {
    search: string
  }
}

export interface SearchStateType {
  search: string
}

export interface AppStateType {
  tvShowsState: TvShowStateType
  moviesState: MovieStateType
  searchState: SearchStateType
}
