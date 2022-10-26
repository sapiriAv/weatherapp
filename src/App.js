import { useState } from "react";
import "./App.css";
import Header from "./componenets/Header";
import Search from "./componenets/Search";
import Wheather from "./componenets/Wheather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fevorit from "./componenets/Fevorit";

function App() {
  const [cityKey, setCityKey] = useState("215854");
  const [tempC, setTempC] = useState(24.4);
  const [weatherText, setWeatherText] = useState("Clear");
  const [city, setCity] = useState("Tel Aviv");
  const [fiveDay, setFiveDay] = useState([
    {
      Date: "2022-10-26T07:00:00+03:00",
      EpochDate: 1666756800,
      Temperature: {
        Minimum: {
          Value: 65,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 80,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 17,
        IconPhrase: "Partly sunny w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2022-10-27T07:00:00+03:00",
      EpochDate: 1666843200,
      Temperature: {
        Minimum: {
          Value: 63,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 81,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2022-10-28T07:00:00+03:00",
      EpochDate: 1666929600,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 82,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2022-10-29T07:00:00+03:00",
      EpochDate: 1667016000,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 83,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
    {
      Date: "2022-10-30T07:00:00+03:00",
      EpochDate: 1667102400,
      Temperature: {
        Minimum: {
          Value: 64,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 82,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    },
  ]);
  const [fav, setFev] = useState([]);
  const [check, setCheak] = useState("block");
  const [check1, setCheak1] = useState("none");

  const addToFav = (place) => {
    let temp = [...fav];
    temp.push(place);
    setFev(temp);
  };

  const removeFromFav = (key) => {
    let temp = [...fav];
    let x;
    for (let i = 0; i < fav.length; i++) {
      if (fav.cityKey == key) {
        x = i;
      }
    }
    temp.splice(x, 1);
    setFev([...temp]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Search
                  setCityKey={setCityKey}
                  setTempC={setTempC}
                  setWeatherText={setWeatherText}
                  setCity={setCity}
                  setFiveDay={setFiveDay}
                  setCheak={setCheak}
                  setCheak1={setCheak1}
                  fav={fav}
                />
                <Wheather
                  fav={fav}
                  cityKey={cityKey}
                  addToFav={addToFav}
                  tempC={tempC}
                  weatherText={weatherText}
                  city={city}
                  fiveDay={fiveDay}
                  check={check}
                  check1={check1}
                  removeFromFav={removeFromFav}
                />
              </div>
            }
          />
          <Route path="/favorite" element={<Fevorit fav={fav} />} />
        </Routes>
      </BrowserRouter>

      <br />
    </div>
  );
}

export default App;
