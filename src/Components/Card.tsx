import React from 'react';
import { URL } from '../const/redux.const';
import { Link } from 'react-router-dom';
const Card = (props: any) => {
	return (
		<div>
			{props.details.original_title ? (
				<Link to={'/movies/' + props.details.id}>
					<div className="card">
						<img
							src={URL + props.details.poster_path}
							alt="No picture avaliable"
						/>
						<h1>
							<b>{props.details.original_title}</b>
						</h1>
					</div>
				</Link>
			) : (
				<Link to={'/tvshows/' + props.id}>
					<div className="card">
						<img src={URL + props.details.poster_path} />
						<h1>
							<b>{props.details.original_name}</b>
						</h1>
					</div>
				</Link>
			)}
		</div>
	);
};

export default Card;
