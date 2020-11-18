import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Logo from './Pictures/search_logo.png';
import { API_URLS } from './const/redux.const';
import store from './store';
import Axios from 'axios';
import Proba from './Types/df';
import TvShowList from './Components/Tv Show/TvShowList';
import { logDOM } from '@testing-library/react';
import TvShowPage from './Pages/TVShowPages/TvShowPage';
import TvShowDetailPage from './Pages/TVShowPages/TvShowDetailPage';
import MoviePage from './Pages/MoviePages/MoviePage';
import MovieDetailPage from './Pages/MoviePages/MovieDetailPage';
import history from './history';
function app() {
	return (
		<Provider store={store}>
			{/*@ts-ignore*/}
			<Router forceRefresh={false} history={history}>
				<Route path="/" exact component={TvShowPage} />
				<Route path="/tvshows/:id" component={TvShowDetailPage} />
				<Route path="/movies" exact component={MoviePage} />
				<Route path="/movies/:id" component={MovieDetailPage} />
			</Router>
		</Provider>
	);
}

export default app;
