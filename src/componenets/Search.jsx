import React, { useState } from "react";

export default function Search(props) {
  const [city, setCity] = useState("tel aviv");

  const cityStuff = () => {
    props.setCheak("block");
    props.setCheak1("none");
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=SSBIMKRxtbWcpyCAX6GKMrYzISAecyNR&q=${city}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.setCity(data[0].AdministrativeArea.EnglishName);
        props.setCityKey(data[0].Key);

        for (let i = 0; i < props.fav.length; i++) {
          if (props.fav[i].cityKey === data[0].Key) {
            props.setCheak("none");
            props.setCheak1("block");
          }
        }

        fetch(
          `http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=SSBIMKRxtbWcpyCAX6GKMrYzISAecyNR`
        )
          .then((res) => {
            return res.json();
          })
          .then((data1) => {
            props.setTempC(data1[0].Temperature.Metric.Value);
            props.setWeatherText(data1[0].WeatherText);
          })
          .catch((err) => {
            console.log(err);
          });

        fetch(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=SSBIMKRxtbWcpyCAX6GKMrYzISAecyNR`
        )
          .then((res) => {
            return res.json();
          })
          .then((data2) => {
            props.setFiveDay(data2.DailyForecasts);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setCity(e.target.value);
        }}
        type="text"
        placeholder="City"
      />
      <button
        onClick={() => {
          cityStuff();
        }}
      >
        search
      </button>
    </div>
  );
}
