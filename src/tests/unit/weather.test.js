import reducer from '../../Store/main/reducer'
import * as action from "../../Store/main/actions";

let state;

beforeEach(() => {
  state = {
    weather: {
      lat: 12.9724,
      lon: 77.5806,
      timezone: 'Asia/Kolkata',
      current: {
        dt: 1632824321,
        temp: 24.8,
        feels_like: 25.37,
        pressure: 1009,
        humidity: 78,
        clouds: 75,
        visibility: 3000,
        wind_speed: 7.2,
        weather: {
          main: 'Clouds'
        }
      },
      minutely: [
        {
          dt: 1632824340,
          precipitation: 0
        },
        {
          dt: 1632824400,
          precipitation: 0
        },
        {
          dt: 1632824460,
          precipitation: 0
        },
      ],
      hourly: [
        {
          dt: 1632823200,
          temp: 24.8,
          feels_like: 25.37,
          pressure: 1009,
          humidity: 78,
          clouds: 75,
          visibility: 3000,
          wind_speed: 7.2,
          weather: {
            main: 'Clouds'
          }
        },
        {
          dt: 1632823200,
          temp: 24.35,
          feels_like: 24.85,
          pressure: 1008,
          humidity: 77,
          clouds: 75,
          visibility: 3000,
          wind_speed: 7.2,
          weather: {
            main: 'Clouds'
          }
        }
      ],
      daily: [
        {
          dt: 1632810600,
          temp: {
            day: 24.23
          },
          feels_like: {
            day: 24.23
          },
          pressure: 1009,
          humidity: 78,
          weather: {
            main: 'Clouds'
          }
        },
        {
          dt: 1632897000,
          temp: {
            day: 25.99
          },
          feels_like: {
            day: 25.99
          },
          pressure: 1009,
          humidity: 78,
          weather: {
            main: 'Clouds'
          }
        }
      ]
    },
    historicalWeather: [
      {
        lat: 12.9724,
        lon: 77.5806,
        timezone: 'Asia/Kolkata',
        current: {
          dt: 1632824321,
          temp: 24.8,
          feels_like: 25.37,
          pressure: 1009,
          humidity: 78,
          clouds: 75,
          visibility: 3000,
          wind_speed: 7.2,
          weather: {
            main: 'Clouds'
          }
        }
      },
      {
        lat: 12.9724,
        lon: 77.5806,
        timezone: 'Asia/Kolkata',
        current: {
          dt: 1632824321,
          temp: 24.8,
          feels_like: 25.37,
          pressure: 1009,
          humidity: 78,
          clouds: 75,
          visibility: 3000,
          wind_speed: 7.2,
          weather: {
            main: 'Clouds'
          }
        }
      }
    ],
  }
})



test('getWeather', () => {

  const newState = reducer(state, action.fetchWeather());

  expect(newState.weather.timezone).toBe('Asia/Kolkata');
  expect(newState.weather.lat).toBe(12.9724);
  expect(newState.weather.lon).toBe(77.5806);
});


test('getHistoricalWeather', () => {

  const newState = reducer(state, action.fetchHistoricalWeather());
  for (let i = 0; i < state.historicalWeather.length; i++) {
    expect(newState.historicalWeather[i].timezone).toBe('Asia/Kolkata');
    expect(newState.historicalWeather[i].lat).toBe(12.9724);
    expect(newState.historicalWeather[i].lon).toBe(77.5806);
  }
});
