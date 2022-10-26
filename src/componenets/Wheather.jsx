import React from "react";
import "./Weather.css";

export default function Wheather(props) {
  const days = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
  ];
  const d = new Date();
  let day = d.getDay();

  return (
    <div>
      <div className="w1">
        <div>
          <p>{props.city}</p>
          <button
            style={{ display: props.check }}
            onClick={() =>
              props.addToFav({
                name: props.city,
                tempC: props.tempC,
                cityKey: props.cityKey,
                fav: true,
                index: props.fav.length,
              })
            }
          >
            add to favorit
          </button>
          <button
            style={{ display: props.check1 }}
            onClick={() => {
              props.removeFromFav(props.cityKey);
            }}
          >
            remove from favorit
          </button>
        </div>
        <div>
          <p>{props.tempC}C</p>
          <p>{props.weatherText}</p>
        </div>
      </div>
      <div className="w2">
        {props.fiveDay.map((val, i) => {
          return (
            <div className="w3">
              <p>{days[day + i]}</p>
              {Math.floor(((val.Temperature.Maximum.Value - 32) * 5) / 9)}C
            </div>
          );
        })}
      </div>
    </div>
  );
}
