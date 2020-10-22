import React from "react";
import Icon from "./Icons.Componet";

const Weather = (props) => {

  let weather = props.weather
  let flag = props.flag
  return (
    <div className="">
      <div className="info-box" >
        <div className="weather-container">
          <div className="location-box">
              <img src={flag.flag} alt="flag" className="countray-flag" /> <br /><br />
              {weather.name}, {weather.sys.country}
          </div>
          <div className="flag-box">
            <div className="">
              <div>{Math.round(weather.main.temp - 273.15)}°C </div>
              
                {typeof props != "undefined" ? <Icon icon={weather.icon} /> : ""}{" "}
              
            </div>
          </div>
          <div className="flag-box">
            <div className="">
              <h3 className="weather-extra-countryName">{flag.nativeName}</h3>
              <h5 className="weather-extra">Capital: {flag.capital}</h5>
              <h5 className="weather-extra">Region: {flag.region}</h5>
              <h5 className="weather-extra">Humidity: {weather.main.humidity}%</h5>
              <h5 className="weather-extra">Wind: {weather.wind.speed} m/s</h5>
              <h5 className="weather-extra">Pressure: {weather.main.pressure} hPa</h5>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;


