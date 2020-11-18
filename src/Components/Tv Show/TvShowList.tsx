import React from 'react';
import Card from '../Card';
import Search from '../Search';
import { log } from 'console';
const TvShowList = (props: any) => {
	return (
		<div className="containter">
			<Search />
			<div className="list">
				{
					//@ts-ignore
					props.tvShows.slice(0, 10).map((value, index) => {
						//@ts-ignore
						return <Card key={index} details={value} id={value.id} />;
					})
				}
			</div>
		</div>
	);
};

export default TvShowList;
