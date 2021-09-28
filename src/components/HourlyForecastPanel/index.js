import React from 'react';
import classes from './HourlyForecastPanel.module.scss';
import { useSelector } from 'react-redux'
import clsx from "../../helpers/clsx";

const HourlyForecastPanel = () => {
  const { weather } = useSelector((state) => state);
  const { hourly } = weather;

	return (
		<div className={classes.wrap}>
      <div className={classes.title}>
          Hourly forecast
      </div>
      <div className={classes.content}>
        {
          hourly && hourly.map(item => (
              <React.Fragment key={item.dt}>
                <div className={classes.item}>
                  <div className={classes.item_top}>
                    <div className={classes.item_time}>
                      {
                        new Date(item.dt * 1000)
                            .toLocaleTimeString('en-US', { timeZone: weather.timezone, month: 'numeric', day: 'numeric', hour: '2-digit' })
                      }
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=""/>
                  </div>
                  <div className={classes.item_bottom}>
                    {item.pop > 0 && <span>Precipitation {item.pop}%</span>}
                    <span className={clsx(classes.item_temp, {[classes.item_margin]: item.pop === 0})}>{Math.trunc(item.temp)}&deg;C</span>
                  </div>
                </div>
              </React.Fragment>
          ))
        }
      </div>
		</div>
	);
};

export default HourlyForecastPanel;
