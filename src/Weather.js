import React from "react";
import axios from "axios";
import "./App.css";
export default function Weather(props) {
  function handleResponse(response) {
    alert(`It is ${response.data.main.temp} in ${response.data.name}`);
  }
  let apiKey = `ac021ab78099db15d109c8b194975aa6`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
  return <div>Weather app react</div>;
}
