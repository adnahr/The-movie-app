import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Details from '../../Components/Details';
import { API_URLS } from '../../const/redux.const';
import { RouteComponentProps } from 'react-router';
const MovieDetailPage: React.FC<RouteComponentProps<{ id: string }>> = (
	props
) => {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const requestDetails = async (id: string) => {
			try {
				const data = await Axios.get(API_URLS.MOVIE(id), {
					params: { append_to_response: 'videos' },
				});
				setMovie(data.data);
				setLoading(false);
			} catch (err) {}
		};
		requestDetails(props.match.params.id);
	}, [loading]);
	return (
		<div>
			<Button />
			<Details data={movie} />
		</div>
	);
};

export default MovieDetailPage;
