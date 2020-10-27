import React from "react";

const Icon = (props) => {
  let icon = "";
  let rangeId = props.icon;
  switch (true) {
    case rangeId >= 200 && rangeId <= 232:
      icon = "11d";
      break;
    case rangeId >= 300 && rangeId <= 321:
      icon = "09d";
      break;
    case rangeId >= 500 && rangeId <= 531:
      icon = "10d";
      break;
    case rangeId >= 600 && rangeId <= 622:
      icon = "13d";
      break;
    case rangeId >= 701 && rangeId <= 781:
      icon = "50d";
      break;
    case rangeId === 800:
      icon = "01d";
      break;
    case rangeId >= 801 && rangeId <= 804:
      icon = "03d";
      break;
    default:
      icon = "03d";
  }
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
        className="icon"
      />
    </div>
  );
};

export default Icon;