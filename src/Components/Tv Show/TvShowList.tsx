import React from 'react';
import Card from '../Card';
import Logo from '../../Pictures/search_logo.png';
const TvShowList = (props: any) => {
	console.log(props);
	return (
		<div id="containter">
			<div id="search">
				<div id="searchlogo">
					<img src={Logo} />
				</div>
				<input />
			</div>
			<div id="list">
				{
					//@ts-ignore
					props.tvShows.slice(0, 10).map((value, index) => {
						//@ts-ignore
						return <Card key={index} details={value} />;
					})
				}
			</div>
		</div>
	);
};

export default TvShowList;
