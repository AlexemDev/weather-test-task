import React from "react";
import clsx from '../../helpers/clsx';
import classes from './Dashboard.module.scss';
import CurrentPanel from "../../components/CurrentPanel";
import {useSelector} from "react-redux";
import MinuteForecastPanel from "../../components/MinuteForecastPanel";
import HourlyForecastPanel from "../../components/HourlyForecastPanel";
import DailyForecastPanel from "../../components/DailyForecastPanel";
import PreviousForecastPanel from "../../components/PreviousForecastPanel";

const HomePage = () => {
  const { weather, historicalWeather } = useSelector((state) => state);
  console.log('weather', weather);
  console.log('historicalWeather', historicalWeather);
  return (
    <div className={clsx(classes.container, classes.weatherContainer)}>
      {
        weather && <>
          <CurrentPanel />
          <MinuteForecastPanel />
          <HourlyForecastPanel />
          <DailyForecastPanel />
        </>
      }
      {
        historicalWeather && <PreviousForecastPanel />
      }
    </div>
  );
};

export default HomePage;
