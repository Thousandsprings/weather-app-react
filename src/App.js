import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <Weather city="Tokyo" />
    </div>
  );
}

export default App;
