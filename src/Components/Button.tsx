import React from 'react';
import backButton from '../Pictures/back_logo.png';

import history from '../history';
import { withRouter } from 'react-router';
const Button: React.FC = (prop: any) => {
	//let history = useHistory();
	return (
		/*@ts-ignore*/
		<button className="backbutton" onClick={() => prop.history.goBack()}>
			<img src={backButton} />
		</button>
	);
};

export default withRouter(Button);
