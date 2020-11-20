import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from '../../Components/Movie/MovieList'
import { searchMovies, requestMovies } from '../../store/actions/movie.actions'
import Search from '../../Components/Search'
import { AppStateType, MovieStateType, SearchStateType } from '../../Types'
import Navbar from '../../Components/Navbar'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

const MoviePage: React.FC = () => {
  const dispatch = useDispatch()
  const { movies, isLoading, error } = useSelector<AppStateType, MovieStateType>((state) => state.moviesState)
  const { search } = useSelector<AppStateType, SearchStateType>((state) => state.searchState)
  useEffect(() => {
    if (search.length) {
      dispatch(searchMovies(search))
    } else {
      dispatch(requestMovies())
    }
  }, [search])
  if (isLoading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <div>
      <Navbar />
      <Search />
      <MovieList movies={movies} />
    </div>
  )
}

export default MoviePage
