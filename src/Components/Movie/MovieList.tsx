import React from 'react';
import Card from '../Card';
import { MovieType } from '../../Types';

const MovieList: React.FC<{ movies: MovieType[] }> = ({ movies }) => {
	if (movies.length == 0) return <div className="no-avaliable-list">No movies avaliable! </div>;
	return (
		<div className="containter">
			<div className="list">
				{movies.slice(0, 10).map((value, index) => {
					return <Card key={index} details={value} />;
				})}
			</div>
		</div>
	);
};

export default MovieList;
