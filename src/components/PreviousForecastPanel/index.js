import React from 'react';
import classes from './PreviousForecastPanel.module.scss';
import { useSelector } from 'react-redux'

const PreviousForecastPanel = () => {
  const { historicalWeather } = useSelector((state) => state);

	return (
		<div className={classes.wrap}>
      <div className={classes.title}>
          historical weather data for the previous 5 days
      </div>
      <div className={classes.content}>
        {
          historicalWeather && historicalWeather.map(item => (
              <React.Fragment key={item.data.current.dt}>
                <div className={classes.item}>
                  <div className={classes.item_top}>
                    <div className={classes.item_time}>
                      {
                        new Date(item.data.current.dt * 1000)
                            .toLocaleTimeString('en-US', { timeZone: item.data.timezone, month: 'numeric', day: 'numeric' })
                      }
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${item.data.current.weather[0].icon}.png`} alt=""/>
                  </div>
                  <div className={classes.item_bottom}>
                    <span>Humidity {item.data.current.humidity}%</span>
                    <span className={classes.item_temp}>
                      {Math.trunc(item.data.current.temp)}&deg;C
                    </span>
                  </div>
                </div>
              </React.Fragment>
          ))
        }
      </div>
		</div>
	);
};

export default PreviousForecastPanel;
