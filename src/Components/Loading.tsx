import React from 'react';
import PropTypes from 'prop-types';
import '../Style/loading.css';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
	return (
		<div style={isLoading ? { display: 'inline' } : { display: 'none' }}>
			<div className="infinity-loader">
				<div className="bg">
					<div className="left-bg"></div>
					<div className="right-bg"></div>
				</div>
				<div className="fg">
					<div className="top-left-rect">
						<div></div>
					</div>
					<div className="bottom-right-rect">
						<div></div>
					</div>
					<div className="top-right-rect">
						<div></div>
					</div>
					<div className="bottom-left-rect">
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
