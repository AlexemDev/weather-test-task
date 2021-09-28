import { FETCH_WEATHER_DATA, FETCH_HISTORICAL_WEATHER_DATA, FETCH_GRAPH_FORECAST_DATA } from './types';

const initialState = {
	weather: null,
	historicalWeather: null,
	weatherForGraphs: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_WEATHER_DATA:
			return {
				...state,
				weather: action.payload
			};
		case FETCH_HISTORICAL_WEATHER_DATA:
			return {
				...state,
				historicalWeather: action.payload
			};
		case FETCH_GRAPH_FORECAST_DATA:
			return {
				...state,
				weatherForGraphs: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
