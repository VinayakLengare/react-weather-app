import React, { useState } from "react";
import "../styles/Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");

  return (
    <div className="weather-container">
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button>Get Weather</button>

      <p>City entered: {city}</p>
    </div>
  );
};

export default Weather;
