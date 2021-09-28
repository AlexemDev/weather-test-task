import React from "react";
import clsx from '../../helpers/clsx';
import classes from './WeatherGraph.module.scss';
import SearchPanel from "../../components/SearchPanel";

const WeatherGraph = () => {

  return (
    <div className={clsx(classes.container, classes.weatherContainer)}>
      <SearchPanel />
    </div>
  );
};

export default WeatherGraph;
