import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Button from '../../Components/Button';
import Details from '../../Components/Details';
import { API_URLS } from '../../const/redux.const';
import { TvShowType } from '../../Types';
import Error from '../../Components/Error';
import Loading from '../../Components/Loading';

const TvShowDetailPage: React.FC<RouteComponentProps<{ id: string }>> = (
	props
) => {
	const [tvShow, setTvShow] = useState({} as TvShowType);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	useEffect(() => {
		const requestDetails = async (id: string) => {
			try {
				const data = await Axios.get(API_URLS.TV_SHOW(id), {
					params: { append_to_response: 'videos' },
				});
				setTvShow(data.data);
				setLoading(false);
			} catch (err) {
				setError(err);
			}
		};
		requestDetails(props.match.params.id);
	}, [loading, error]);
	if (loading) return <Loading isLoading={loading} />;
	if (error) return <Error error={error} />;
	return (
		<div>
			<Button />
			<Details data={tvShow} />
		</div>
	);
};

export default TvShowDetailPage;
