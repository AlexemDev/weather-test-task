import React, {useEffect} from "react";
import Dashboard from "./views/Dashboard";
import WeatherGraph from "./views/WeatherGraph";
import { Route } from 'react-router-dom';
import AppBar from "./components/AppBar";
import { useDispatch } from 'react-redux';
import {fetchHistoricalWeather, fetchWeather} from "./Store/main/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
    dispatch(fetchHistoricalWeather());
  }, []);

  return (
    <div>
      <AppBar/>
      <main className="section-weather">
        <Route exact path="/" component={Dashboard} />
        <Route path="/graphs" component={WeatherGraph} />
      </main>
    </div>
  );
}
