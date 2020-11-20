import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TvShowList from '../../Components/Tv Show/TvShowList'
import { requestTvShows, searchTvShows } from '../../store/actions/tv.show.actions'
import Navbar from '../../Components/Navbar'
import Search from '../../Components/Search'
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import { AppStateType, TvShowStateType, SearchStateType } from '../../Types'

const TvShowPage: React.FC = () => {
  const dispatch = useDispatch()
  const { tvShows, isLoading, error } = useSelector<AppStateType, TvShowStateType>((state) => state.tvShowsState)
  const { search } = useSelector<AppStateType, SearchStateType>((state) => state.searchState)
  useEffect(() => {
    if (search.length) {
      dispatch(searchTvShows(search))
    } else {
      dispatch(requestTvShows())
    }
  }, [search])
  if (isLoading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <div>
      <Navbar />
      <Search />
      <TvShowList tvShows={tvShows} />
    </div>
  )
}

export default TvShowPage
