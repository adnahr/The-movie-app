import React from 'react';
import backButton from '../Pictures/back_logo.png';

import history from '../history';
import { RouteComponentProps, withRouter, WithRouterProps } from 'react-router';
import { BrowserRouterProps } from 'react-router-dom';
import { History } from 'history';

const Button: React.FC = () => {
	return (
		<button className="backbutton" onClick={() => history.back()}>
			<img src={backButton} />
		</button>
	);
};

export default withRouter(Button);
