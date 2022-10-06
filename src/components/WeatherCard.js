import React from "react";

function WeatherCard({ city, cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed }) {
  return (
    <div className="WeatherCard">
      <h2>{city}</h2>
      <p className="WeatherCard--type">Weather Type: {weatherType}</p>
      <p className="WeatherCard--temp">Current Temperature: {Math.round(currentTemp)}&deg;</p>
      <div className="WeatherCard--stats">
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
