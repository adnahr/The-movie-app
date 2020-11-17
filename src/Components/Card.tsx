import React from 'react';

const Card = (props: any) => {
	return (
		<div className="card">
			<img
				src={'https://image.tmdb.org/t/p/w500' + props.details.poster_path}
			/>
			<h1>
				<b>{props.details.original_name}</b>
			</h1>
		</div>
	);
};

export default Card;
