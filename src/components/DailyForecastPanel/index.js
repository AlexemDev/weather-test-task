import React from 'react';
import classes from './DailyForecastPanel.module.scss';
import { useSelector } from 'react-redux'
import clsx from "../../helpers/clsx";

const DailyForecastPanel = () => {
  const { weather } = useSelector((state) => state);
  const { daily } = weather;

	return (
		<div className={classes.wrap}>
      <div className={classes.title}>
          Daily forecast
      </div>
      <div className={classes.content}>
        {
          daily && daily.map(item => (
              <React.Fragment key={item.dt}>
                <div className={classes.item}>
                  <div className={classes.item_top}>
                    <div className={classes.item_time}>
                      {
                        new Date(item.dt * 1000)
                            .toLocaleTimeString(
                                'en-US',
                                { timeZone: weather.timezone, month: 'numeric', day: 'numeric' })
                      }
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt=""/>
                  </div>
                  <div className={classes.item_bottom}>
                    {item.pop > 0 && <span>Precipitation {item.pop}%</span>}
                    <span className={clsx(classes.item_temp, {[classes.item_margin]: item.pop === 0})}>
                      {Math.trunc(item.temp.day)}&deg;C
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

export default DailyForecastPanel;
