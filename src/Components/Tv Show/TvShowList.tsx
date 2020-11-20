import React from 'react';
import { TvShowStateType, TvShowType } from '../../Types';
import Card from '../Card';
import Search from '../Search';

const TvShowList: React.FC<{ tvShows: TvShowType[] }> = ({ tvShows }) => {
	return (
		<div className="containter">
			<Search />
			<div className="list">
				{tvShows.slice(0, 10).map((value, index) => {
					return <Card key={index} details={value} />;
				})}
			</div>
		</div>
	);
};

export default TvShowList;
