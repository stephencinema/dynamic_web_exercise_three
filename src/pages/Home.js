import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { WEATHER_APP_APT_KEY } from "../API_KEYS";
import WeatherCard from "../components/WeatherCard";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

function Home() {
  // Value stored in state for weather data
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("New York City");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cityToQuery = searchParams.get("city") || city;
    setCity(cityToQuery);
    // Query OpenWeatherAPT for weather data
    // make request to OpenWeather
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_APT_KEY}&units=imperial`)
      .then(function (response) {
        setWeatherData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
        setWeatherData({});
      });
  }, []);

  const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
    const weatherMain = weatherData.main || {};
    return {
      cloudiness: weatherData.clouds && weatherData.clouds.all,
      currentTemp: weatherMain.temp,
      highTemp: weatherMain.temp_max,
      humidity: weatherMain.humidity,
      lowTemp: weatherMain.temp_min,
      weatherType: weatherData.weather && weatherData.weather[0].main,
      windSpeed: weatherData.wind && weatherData.wind.speed,
    };
  }, [weatherData]);

  console.log("state value", weatherData);

  return (
    <div style={{ backgroundColor: `rgba(0,0,0,${cloudiness / 100})` }}>
      <div className="weatherCard--container">
        <div>
          <Header />
          <WeatherCard
            city={city}
            weatherType={weatherType}
            currentTemp={currentTemp}
            highTemp={highTemp}
            lowTemp={lowTemp}
            cloudiness={cloudiness}
            humidity={humidity}
            windSpeed={windSpeed}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
