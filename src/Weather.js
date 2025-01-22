import { useState } from "react";
import { getWeatherData } from "./api";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getWeatherData(city);
    setWeather(data);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cityInput" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="cityInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Get Weather
        </button>
      </form>
      {weather && (
        <div className="mt-4">
          <h2 className="mb-4">{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
