import React from "react";
import Icon from "./Icons.Componet";

const Weather = (props) => {

  return (
    <div className="">
            <div className="info-box">
    <div className="weather-container">
      <div className="location-box">
        <div className="location">
          {props.name}, {props.sys.country}
          <div className="flag-box">
            <div className="temp">
              <h5 className="weather-extra">Humidity: {props.main.humidity}%</h5>
              <h5 className="weather-extra">Wind: {props.wind.speed} m/s</h5>
              <h5 className="weather-extra">Pressure: {props.main.pressure} hPa</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="flag-box">
        <div className="temp">
          <div>{Math.round(props.main.temp - 273.15)}°C </div>
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
    </div>
            <div></div>
          </div>
  );
};

export default Weather;
