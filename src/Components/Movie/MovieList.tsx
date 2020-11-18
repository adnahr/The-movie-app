import React from 'react';
import Search from '../Search';
import Card from '../Card';
const MovieList = (props: any) => {
	return (
		<div className="containter">
			<div className="list">
				{
					//@ts-ignore
					props.movies.slice(0, 10).map((value, index) => {
						//@ts-ignore
						return <Card key={index} details={value} id={value.id} />;
					})
				}
			</div>
		</div>
	);
};

export default MovieList;
