import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 id="date-in-html">Weather App React</h1>
      <div className="row justify-content-center" id="search">
        <div className="row col-md-4">
          <input
            id="city-name"
            className="shadow"
            type="text"
            placeholder="Enter a city"
          />
        </div>
        <div className="offset-md-1 row col-md-2">
          <button id="search-button" className="shadow">
            Search
          </button>
          <button id="current-location" className="shadow">
            Current Location
          </button>
        </div>
      </div>
      <Weather />
      <div className="row justify-content-center" id="weekDay"></div>
      <div className="row justify-content-center" id="forecast"></div>
      <footer>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/chiharu-suzuki-915130201/"
          target="_"
        >
          Chiharu Suzuki (linkedin)
        </a>{" "}
        ,is{" "}
        <a
          href="https://github.com/Thousandsprings/weather-app-react"
          target="_"
        >
          open-sourced on GitHub
        </a>
        and hosted on
        <a href="https://www.netlify.com/" target="_">
          Netlify
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
