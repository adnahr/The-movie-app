import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Details from '../../Components/Details';
import { API_URLS } from '../../const/redux.const';
import { ErrorType } from '../../Types/ErrorType';
import { isPropertyAssignment } from 'typescript';
const MovieDetailPage: React.FC = (props: any) => {
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
			} catch (err: any) {}
		};
		requestDetails(props.match.params.id);
	}, [loading]);
	return (
		<div>
			{/*@ts-ignore*/}
			<Button history={props.history} />
			<Details movie={movie} />
		</div>
	);
};

export default MovieDetailPage;
