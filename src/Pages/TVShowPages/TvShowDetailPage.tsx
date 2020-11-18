import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Details from '../../Components/Details';
import TvShowType from '../../Types/TvShowTypes/TvShowType';
import { API_URLS } from '../../const/redux.const';
import { ErrorType } from '../../Types/ErrorType';
import { isPropertyAssignment } from 'typescript';
const TvShowDetailPage: React.FC = (props: any) => {
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
			} catch (err: any) {}
		};
		requestDetails(props.match.params.id);
	}, [loading]);
	return (
		<div>
			{/*@ts-ignore*/}
			<Button history={props.history} />
			<Details data={tvShow} />
		</div>
	);
};

export default TvShowDetailPage;
