import React, { useEffect } from 'react';
import TvShowList from '../Components/Tv Show/TvShowList';

import { useDispatch, useSelector } from 'react-redux';
import { requestTvShows } from '../store/actions/tv.show.actions';
const TvShowPage = (props: any) => {
	const dispatch = useDispatch();
	//@ts-ignore
	const { tvShows, isLoading } = useSelector((state) => state.tvShowsState);
	useEffect(() => {
		dispatch(requestTvShows());
	}, []);
	if (isLoading) return <div>Loading</div>;

	return (
		<div>
			<TvShowList tvShows={tvShows} />
		</div>
	);
};

export default TvShowPage;
