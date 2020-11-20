import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TvShowPage from './Pages/TVShowPages/TvShowPage';
import TvShowDetailPage from './Pages/TVShowPages/TvShowDetailPage';
import MoviePage from './Pages/MoviePages/MoviePage';
import MovieDetailPage from './Pages/MoviePages/MovieDetailPage';
function app() {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" exact component={TvShowPage} />
				<Route path="/tvshows/:id" component={TvShowDetailPage} />
				<Route path="/movies" exact component={MoviePage} />
				<Route path="/movies/:id" component={MovieDetailPage} />
			</Router>
		</Provider>
	);
}

export default app;
