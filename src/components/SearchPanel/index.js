import React, {useState} from 'react';
import classes from './SearchPanel.module.scss';
import {useDispatch} from "react-redux";
import {fetchGraphForecast} from "../../Store/main/actions";


const SearchPanel = () => {
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { value } }) => {
    setSearchData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchGraphForecast(searchData))
  };

	return (
		<form className={classes.wrap} onSubmit={handleSubmit}>
      <input name={'search'} type="text" value={searchData} onChange={handleChange}/>
      <button>Найти</button>
		</form>
	);
};

export default SearchPanel;
