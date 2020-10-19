import React from "react";
import Icon from "./Icons.Componet";

const Weather = (props) => {

  let weather = props.weather
  let flag = props.flag
  return (
    <div className="">
            <div className="info-box">
    <div className="weather-container">
      <div className="location-box">
        <div className="location">
          {weather.name}, {weather.sys.country}
          <div className="flag-box">
            <div className="temp">
              <h5 className="weather-extra">Humidity: {weather.main.humidity}%</h5>
              <h5 className="weather-extra">Wind: {weather.wind.speed} m/s</h5>
              <h5 className="weather-extra">Pressure: {weather.main.pressure} hPa</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flag-box">
        <div className="temp">
          <div>{Math.round(weather.main.temp - 273.15)}°C </div>
          <div>
            {typeof props != "undefined" ? <Icon icon={weather.icon} /> : ""}{" "}
          </div>
        </div>
      </div>
      <div className="flag-box">
        <h3 className="weather-extra-countryName">{flag.nativeName}</h3>
        <img src={flag.flag} alt="flag" className="countray-flag" />
        <h5 className="weather-extra">Capital: {flag.capital}</h5>
        <h5 className="weather-extra">Region: {flag.region}</h5>
      </div>
    </div>
    </div>
            <div></div>
          </div>
  );
};

export default Weather;
