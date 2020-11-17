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
import TvShowPage from './Pages/TvShowPage';
const indexPage: React.FC = () => <div> Hello </div>;
const a: Proba = {
	a: 'gsg',
};

function app() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={TvShowPage} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default app;
