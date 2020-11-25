import React from "react";
import Icon from "./Icons.Componet";
import {useSpring, animated} from 'react-spring'
const Forecast = React.memo((props) => {
  const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})
  let gsDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const items = [];
  if (typeof props.data.list != "undefined") {
    for (let i = 0; i < 39; i += 8) {
      let date = props.data.list[i].dt_txt.substring(0, 10);
      let d = new Date(date);
      let dayName = gsDayNames[d.getDay()];
      items.push(
        <div className="forecast-box" key={i}>
          <div>
            <h4>{dayName}</h4>
            {/* <h6>{props.data.list[i].weather[0].description}</h6> */}
            <div className="">
              {Math.round(props.data.list[i].main.temp - 273.15)}°C{" "}
            </div>
            <Icon icon={props.data.list[i].weather[0].id} />
            <h6>{props.data.list[i].dt_txt.substring(0, 10)}</h6>
          </div>
        </div>
      );
    }
  }
  return (
  <div>
    <animated.div style={iconan}>
    {items}
    </animated.div>
  </div>);
})

export default Forecast;