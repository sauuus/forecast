import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function Wea() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5b6efc31d9df5b58c06a64f0cba78094&units=imperial`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter City"
          type="text"
        />
      </div>
      <div
        className="container mt-5 p-4 bg-image hover-overlay"
        style={{
          background:
            "linear-gradient(40deg, rgba(26, 236, 187, 0.5), rgba(91, 14, 214, 0.5) 75%)",
        }}
      >
        <div
          className="top text-uppercase "
          style={{
            font: "Helvetica Neue UltraLight",
          }}
        >
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description text-uppercase">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wea;
