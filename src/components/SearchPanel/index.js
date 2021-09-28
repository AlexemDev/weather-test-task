import React, {useState} from 'react';
import classes from './SearchPanel.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchGraphForecast} from "../../Store/main/actions";


const SearchPanel = () => {
   const { error } = useSelector((state) => state);
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
      <div className={classes.inputWrap}>
        <input name={'search'} type="text" value={searchData} className={classes.inputWrap_input} onChange={handleChange}/>
        <button className={classes.inputWrap_button}>Search</button>
      </div>
      {error && <span className={classes.error}>{error}</span>}
		</form>
	);
};

export default SearchPanel;
