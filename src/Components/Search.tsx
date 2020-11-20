import React, { useEffect, useState } from 'react';
import Logo from '../Pictures/search_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { searchAction } from '../store/actions/search.actions';
import '../Style/search.css';
import { AppStateType, SearchStateType } from '../Types';

const Search: React.FC = () => {
	const { search } = useSelector<AppStateType, SearchStateType>(
		(state) => state.searchState
	);
	const [inputValue, setInputValue] = useState<string>(search);
	const dispatch = useDispatch();
	useEffect(() => {
		const clt = setTimeout(() => {
			if (inputValue.length < 3 && search.length > inputValue.length) {
				dispatch(searchAction(''));
			} else if (inputValue.length >= 3) {
				dispatch(searchAction(inputValue));
			}
		}, 3000);
		return () => clearTimeout(clt);
	}, [dispatch, inputValue]);
	return (
		<div className="search">
			<div className="searchlogo">
				<img src={Logo} />
			</div>
			<input
				type="text"
				value={inputValue}
				onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
					setInputValue(ev.target.value)
				}
			/>
		</div>
	);
};

export default Search;
