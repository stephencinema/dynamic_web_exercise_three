import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCloud, faRainDrops, faSnowflake, faSun, faUmbrella } from "@fortawesome/free-solid-svg-icons";

function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Fog":
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Sun":
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}

export default WeatherIcon;
