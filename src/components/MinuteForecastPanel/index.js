import React from 'react';
import classes from './MinuteForecastPanel.module.scss';
import { useSelector } from 'react-redux'

const MinuteForecastPanel = () => {
  const { weather } = useSelector((state) => state);
  const { minutely } = weather;

	return (
		<div className={classes.wrap}>
      <div className={classes.title}>
          Minute forecast for 1 hour
      </div>
      <div className={classes.content}>
        {
          minutely && minutely.map(item => (
              <React.Fragment key={item.dt}>
                <div className={classes.item}>
                  <div className={classes.item_time}>
                    {
                      new Date(item.dt * 1000)
                        .toLocaleTimeString('en-US', { timeZone: weather.timezone, hour: '2-digit', minute:'2-digit' })
                    }
                  </div>
                  <div className={classes.item_precipitation}>Precipitation: {item.precipitation} mm</div>
                </div>
              </React.Fragment>
          ))
        }
      </div>
		</div>
	);
};

export default MinuteForecastPanel;
