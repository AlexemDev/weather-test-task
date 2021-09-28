import axios from 'axios';
import { FETCH_WEATHER_DATA, FETCH_HISTORICAL_WEATHER_DATA, FETCH_GRAPH_FORECAST_DATA } from './types';

export const fetchWeather = () => (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_API_URL}/onecall?lat=12.972442&lon=77.580643&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        dispatch({
          payload: response.data,
          type: FETCH_WEATHER_DATA
        });
      });

  } catch (error) {
    console.log(error)
  }
};

export const fetchHistoricalWeather = () => (dispatch) => {
  const allQuery = [];
  for (let i = 1; i < 6; i++) {
    let previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - i);
    previousDate = Math.trunc(previousDate / 1000);
    const request = `${process.env.REACT_APP_API_URL}/onecall/timemachine?lat=12.972442&lon=77.580643&dt=${previousDate}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    allQuery.push(axios.get(request))
  }

  try {
    axios.all(allQuery)
        .then(axios.spread((...responses) => {
          dispatch({
            payload: responses,
            type: FETCH_HISTORICAL_WEATHER_DATA
          });
        }));
  } catch (error) {
    console.log(error)
  }
};

export const fetchGraphForecast = (query) => (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_API_URL}forecast/daily?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          console.log(response)
          dispatch({
            payload: response.data,
            type: FETCH_GRAPH_FORECAST_DATA
          });
        });
  } catch (error) {
    console.log(error)
  }
}
