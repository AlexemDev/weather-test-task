import React, { useEffect, useState } from 'react';
import classes from './CurrentPanel.module.scss';
import { useSelector } from 'react-redux'

const CurrentPanel = () => {
  const { weather } = useSelector((state) => state);
  const { current } = weather;

  let localTime = new Date(current.dt * 1000);
  localTime = localTime.toLocaleTimeString('en-US', { timeZone: weather.timezone, hour: '2-digit', minute:'2-digit' });

	return (
		<div className={classes.wrap}>
      <div className={classes.title}>
          Current weather <span className={classes.time}>{localTime}</span>
      </div>
      <div className={classes.content}>
        <div className={classes.temperature}>
          <span className={classes.totalTemperature}>{Math.trunc(current.temp)}&deg;C</span>
          <span className={classes.realFeelsTemperature}>Real feel {Math.trunc(current.feels_like)}&deg;C</span>
          <span className={classes.weatherStatus}>
            <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt=""/>
            {current.weather[0].main}
          </span>
        </div>
        <div className={classes.weatherDetails}>
          <ul>
            <li className={classes.weatherDetails__item}><span>Wind:</span><span>{current.wind_speed}km/h</span></li>
            <li className={classes.weatherDetails__item}><span>Average visibility:</span><span>{current.visibility}m</span></li>
            <li className={classes.weatherDetails__item}><span>Humidity:</span><span>{current.humidity}%</span></li>
            <li className={classes.weatherDetails__item}><span>Clouds:</span><span>{current.clouds}%</span></li>
          </ul>
        </div>
      </div>
		</div>
	);
};

export default CurrentPanel;
