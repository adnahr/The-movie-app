import React from 'react';
import { URL } from '../const/redux.const';
const Details = (props: any) => {
	return (
		<div className="detail-container">
			{props.data.videos &&
			props.data.videos.results &&
			props.data.videos.results.length ? (
				<iframe
					src={
						'https://www.youtube.com/embed/' + props.data.videos.results[0].key
					}
				></iframe>
			) : (
				<img src={URL + props.data.poster_path} />
			)}

			<h1>
				{props.data.original_name
					? props.data.original_name
					: props.data.original_title}
			</h1>
			<p>{props.data.overview}</p>
		</div>
	);
};

export default Details;
