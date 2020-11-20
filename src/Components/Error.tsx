import React from 'react';
import { ErrorType } from '../Types';

const Error: React.FC<{ error: ErrorType | undefined }> = ({ error }) => {
	return (
		<div className="error">
			<p>{error}</p>
		</div>
	);
};

export default Error;
