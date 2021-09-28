import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './AppBar.module.scss';

const AppBar = () => {

	return (
		<div className={classes.navBar}>
      <div className={classes.container}>
        <div className={classes.content}>
          <Link to={'/'} className={classes.linkItem}>Dashboard</Link>
          <Link to={'/graphs'} className={classes.linkItem}>Graph weather</Link>
        </div>
      </div>
		</div>
	);
};

export default AppBar;
