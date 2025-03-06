import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfor.css";

export default function WeatherInfor(props) {
  return (
    <div className="WeatherInfor">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clear-fix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity} %</li>
            <li>Wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
