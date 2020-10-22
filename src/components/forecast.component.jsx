import React from "react";
import Icon from "./Icons.Componet";
const Forecast = React.memo((props) => {
  // console.log(props.data.list[0].weather[0].id);

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
    for (let i = 0; i < 40; i += 8) {
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
  return <div>{items}</div>;
})

export default Forecast;
