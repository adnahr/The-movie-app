import React, { useEffect } from 'react';
import MovieList from '../../Components/Movie/MovieList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies, requestMovies } from '../../store/actions/movie.actions';
import Search from '../../Components/Search';
const MoviePage = (props: any) => {
	const dispatch = useDispatch();
	//@ts-ignore
	const { movies, isLoading } = useSelector((state) => state.moviesState);
	const { search } = useSelector((state: any) => state.searchState);
	useEffect(() => {
		if (search.length) {
			dispatch(searchMovies(search));
		} else {
			dispatch(requestMovies());
		}
	}, [search]);
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
