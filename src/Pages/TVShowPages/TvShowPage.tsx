import React, { useEffect } from 'react';
import TvShowList from '../../Components/Tv Show/TvShowList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	requestTvShows,
	searchTvShows,
} from '../../store/actions/tv.show.actions';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import { AppStateType, TvShowStateType, SearchStateType } from '../../Types';

const TvShowPage: React.FC = () => {
	const dispatch = useDispatch();
	const { tvShows, isLoading, error } = useSelector<
		AppStateType,
		TvShowStateType
	>((state) => state.tvShowsState);
	const { search } = useSelector<AppStateType, SearchStateType>(
		(state) => state.searchState
	);
	useEffect(() => {
		if (search.length) {
			dispatch(searchTvShows(search));
		} else {
			dispatch(requestTvShows());
		}
	}, [search]);
	if (isLoading) return <Loading isLoading={isLoading} />;
	if (error) return <Error error={error} />;
	return (
		<div>
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Tv Shows</Link>
					</li>

					<li>
						<Link to="/movies">Movies</Link>
					</li>
				</ul>
			</nav>

			<TvShowList tvShows={tvShows} />
		</div>
	);
};

export default TvShowPage;
