import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherCard({ city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed }) {
  return (
    <div id="weatherCard">
      <h2 className="weatherCard--cityName">{city}</h2>
      <div className="weatherCard--weatherType">
        <WeatherIcon weatherType={weatherType} />
        <p className="weatherCard--type">{weatherType}</p>
      </div>
      <p className="weatherCard--temp">{Math.round(currentTemp)}&deg;</p>
      <div className="weatherCard--stats">
        <p>High: {Math.round(highTemp)}&deg;</p>
        <p>Low: {Math.round(lowTemp)}&deg;</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
      </div>
    </div>
  );
}

export default WeatherCard;
