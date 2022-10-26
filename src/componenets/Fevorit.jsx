import React from "react";

export default function Fevorit(props) {
  return (
    <div>
      {props.fav.map((val) => {
        return (
          <div>
            <p>{val.name}</p>
            <p>{val.tempC}C</p>
          </div>
        );
      })}
    </div>
  );
}
