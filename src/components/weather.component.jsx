import React,{useState, useEffect} from "react";
import Icon from "./Icons.Componet";
import {useSpring, animated} from 'react-spring'

const Weather = (props) => {
  const iconan = useSpring({opacity: 1, from: {opacity: 0}})
  let weather = props.weather
  let flag = props.flag
  let date = props.date
  
  const [sec, setSec] = useState(0)
  const [min , setMin] = useState(0)
 
  let second = parseInt(date.slice(6,8))
  let minute = parseInt(date.slice(3,5))
  let clock = parseInt(date.slice(0,2))

  useEffect(() => {
      if(second !== 'NAN'){
        setSec(second)
        setMin(minute)
        const interval = setInterval(() => {
            setSec(prev => prev < 59 ? prev + 1 : (
              setSec(0),
              setMin(minute + 1) ))
        }, 1000);
      return () => clearInterval(interval);
      }
  }, [second])
  let Time =() => {
    return(
      <div>
        {clock}:{min}:{sec}
      </div>
    )
  }
  return (
    <div className="">
      <animated.div style={iconan}>
      <div className="info-box" >
        <div className="weather-container">
          <div className="leftSideContainer">
              <img src={flag.flag} alt="flag" className="countray-flag" /> <br />        
              <div className="degree">
                {typeof props != "undefined" ? <Icon icon={weather.icon}  /> : ""}  
                {Math.round(weather.main.temp - 273.15)}°C 
              
               {/* <div className="currTime">
                {clock >= 0 ?  <Time /> : ''}          
               </div> */}
               </div>
          </div>
          <div className="flag-box">
          <div className="weather-extra-countryName">{flag.nativeName} - {flag.name}</div>
          <div className="weather-city-name">{weather.name}, {weather.sys.country}</div> 
          <div className="weather-description"> {weather.weather[0].description}</div>
          
          </div>
          <div className="flag-box">
            <div className="">
              <h5 className="weather-extra">Capital : {flag.capital}</h5>
              <h5 className="weather-extra">Region : {flag.region}</h5>
              <h5 className="weather-extra">Humidity : {weather.main.humidity}%</h5>
              <h5 className="weather-extra">Wind : {weather.wind.speed} m/s</h5>
              <h5 className="weather-extra">Pressure : {weather.main.pressure} hPa</h5>
              
            </div>
          </div>
        </div>
      </div>
      </animated.div>
    </div>
  );
};
export default Weather;