import React from "react";
import Icon from "./icons.componet";

const Weather = (props) => {
  // console.log("wea", props);

  return (
    <div className="weather-container">
      <div className="location-box">
        <div className="location">
          {props.city}, {props.country}
          <div className="flag-box">
            <div className="temp">
              <h5 className="weather-extra">Humidity: {props.humidity}%</h5>
              <h5 className="weather-extra">Wind: {props.wind.speed} m/s</h5>
              <h5 className="weather-extra">Pressure: {props.pressure} hPa</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flag-box">
        <div className="temp">
          <div>{Math.round(props.temp - 273.15)}°C </div>
          <div>
            {typeof props != "undefined" ? <Icon icon={props.icon} /> : ""}{" "}
          </div>
        </div>
      </div>
      <div className="flag-box">
        <h3 className="weather-extra">{props.nativeName}</h3>
        <img src={props.flag} alt="flag" className="countray-flag" />
        <h5 className="weather-extra">Capital: {props.capital}</h5>
        <h5 className="weather-extra">Region: {props.region}</h5>
      </div>
    </div>
  );
};

export default Weather;
