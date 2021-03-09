import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    time: "12:00",
    description: "Sunny",
    humidity: 60,
    wind: 10,
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="Weather row justify-content-center">
      <div className="col-md-6">
        <h2>
          <ul>
            <li>{weatherData.city}</li>
            <li>{weatherData.time}</li>
            <li></li>
            <li>
              <span>{weatherData.temperature}</span>
              <a href="/" className="temp active">
                ℃
              </a>
              /
              <a href="/" className="temp">
                ℉
              </a>
            </li>
            <li>{weatherData.wind} m/s</li>
            <li>{weatherData.humidity} %</li>
          </ul>
        </h2>
      </div>
      <div className="CurrentWeather col-md-4">
        <img
          src={weatherData.imageUrl}
          alt={weatherData.description}
          className="weather-now"
        ></img>
        <p className="current-weather">{weatherData.description}</p>
      </div>
    </div>
  );
}
