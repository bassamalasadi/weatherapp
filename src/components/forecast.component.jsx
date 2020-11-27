// Display 5 Days' forecast

import React from "react";
import Icon from "./Icons.Componet";
import {useSpring, animated} from 'react-spring'
const Forecast = React.memo((props) => {
  const iconan = useSpring({opacity: 1, from: {opacity: 0},transition: '1s'})
  // An array of the days
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
    // The Forecast API provide data for 5 days, and each day contain 8-time different forecast every 3 hours
    // Loop through these 40 predicts and extract one predict for each day by increasing our identifier 8 each time.
    for (let i = 0; i < 39; i += 8) {
      // Extract only the date of the day
      let date = props.data.list[i].dt_txt.substring(0, 10);
      // set your local date
      let d = new Date(date);
      //Set through the provided data you day
      let dayName = gsDayNames[d.getDay()];
      // Push the date and the forecast data to the array
      items.push(
        <div className="forecast-box" key={i}>
          <div>
            <h4>{dayName}</h4>
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