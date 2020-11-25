import React from "react";
import Icon from "./Icons.Componet";
import {useSpring, animated} from 'react-spring'
import PerfectScrollbar from "react-perfect-scrollbar";
const Weather = (props) => {
  const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})
  let weather = props.weather
  let flag = props.flag
  let forecast = props.forecast
  let items = []
  if(typeof forecast.list != "undefined"){
    for(let i = 0; i < 40 ; i++){
      let time = forecast.list[i].dt_txt
      items.push(
        <div className="d-time" key={forecast.list[i].dt}>
          <div className="hourly" >
            <div className="hourly-t">
              {time.slice(0,10)} 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="hourly-w">  {Math.round(forecast.list[i].main.temp - 273.15)}°C</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              {time.slice(11,16)}
            </div>
          </div>
      </div>
      )
    }
  }
  return (
    <animated.div style={iconan}>
    <div className="leftSideContainer">
      <img src={flag.flag} alt="flag" className="countray-flag" /> <br />        
      <div className="degree">
        <div className="weather-flag-icon">{typeof props != "undefined" ? <Icon icon={weather.weather[0].id}  /> : ""}  </div>
          {Math.round(weather.main.temp - 273.15)}°C 
        </div>
    </div> 
    <div className="info-box" >
      <div className="weather-container">     
        <div className="flag-box">
          <div className="weather-city-name">{weather.name}, {weather.sys.country}</div> 
            <br />
          <div className="weather-country-name">{flag.nativeName} - {flag.name}</div>
        </div>
        <div>
          <div className="cap-box">
            <div className="weather-extra">Capital : {flag.capital}</div>
            <div className="weather-extra">Region : {flag.region}</div>
            <div className="weather-extra">Humidity : {weather.main.humidity}%</div>
            <div className="weather-extra">Wind : {weather.wind.speed} m/s</div>
            <div className="weather-extra">Pressure : {weather.main.pressure} hPa</div>
            <div className="weather-extra">Description: {weather.weather[0].description}</div>
          </div>
        </div>
        <div className="hourly-scroll">
        <PerfectScrollbar style={{ width: 270, height: 239 }}>
          {items}
          </PerfectScrollbar>
        </div>
      </div> 
    </div>
    </animated.div>
  );
};
export default Weather;