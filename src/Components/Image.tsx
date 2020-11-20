import React from 'react';

import { URL } from '../const/redux.const';
import No_photo from '../Pictures/no_photo_avaliable.png';

const Image: React.FC<{ source: string }> = ({ source }) => {
	const src = source ? URL + source : No_photo;
	return <img src={src} />;
};

export default Image;
