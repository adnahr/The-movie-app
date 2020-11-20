import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Button from '../../Components/Button';
import Details from '../../Components/Details';
import { API_URLS } from '../../const/redux.const';
import { TvShowType } from '../../Types';

const TvShowDetailPage: React.FC<RouteComponentProps<{ id: string }>> = (
	props
) => {
	const [tvShow, setTvShow] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const requestDetails = async (id: string) => {
			try {
				const data = await Axios.get(API_URLS.TV_SHOW(id), {
					params: { append_to_response: 'videos' },
				});
				setTvShow(data.data);
				setLoading(false);
			} catch (err) {}
		};
		requestDetails(props.match.params.id);
	}, [loading]);
	return (
		<div>
			<Button />
			<Details data={tvShow} />
		</div>
	);
};

export default TvShowDetailPage;
