import React, { useEffect } from 'react';
import TvShowList from '../../Components/Tv Show/TvShowList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	requestTvShows,
	searchTvShows,
} from '../../store/actions/tv.show.actions';
const TvShowPage = (props: any) => {
	const dispatch = useDispatch();
	//@ts-ignore
	const { tvShows, isLoading } = useSelector((state) => state.tvShowsState);
	const { search } = useSelector((state: any) => state.searchState);
	console.log('SEACHING', search);
	useEffect(() => {
		if (search.length) {
			dispatch(searchTvShows(search));
		} else {
			dispatch(requestTvShows());
		}
	}, [search]);
	if (isLoading) return <div>Loading</div>;

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
