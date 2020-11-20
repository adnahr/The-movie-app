import React, { useEffect } from 'react';
import MovieList from '../../Components/Movie/MovieList';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, requestMovies } from '../../store/actions/movie.actions';
import Search from '../../Components/Search';
import { AppStateType, MovieStateType, SearchStateType } from '../../Types';
import Loading from '../../Components/Loading';
const MoviePage: React.FC = () => {
	const dispatch = useDispatch();
	const { movies, isLoading } = useSelector<AppStateType, MovieStateType>(
		(state) => state.moviesState
	);
	const { search } = useSelector<AppStateType, SearchStateType>(
		(state) => state.searchState
	);
	useEffect(() => {
		if (search.length) {
			dispatch(searchMovies(search));
		} else {
			dispatch(requestMovies());
		}
	}, [search]);
	if (isLoading) return <Loading isLoading={isLoading} />;
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

			<Search />
			<MovieList movies={movies} />
		</div>
	);
};

export default MoviePage;
