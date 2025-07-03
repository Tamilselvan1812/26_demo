import React, { useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';

function WeatherApp  () {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather({
        temp: response.data.main.temp,
        humidity: response.data.main.humidity,
        name: response.data.name,
      });
    } catch {
      setWeather({ error: 'City not found' });
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
      
      <button onClick={getWeather}>Get Weather</button>

      <div id="result">
        {weather && weather.error && <p style={{ color: 'red' }}>{weather.error}</p>}

        {weather && !weather.error && (
          <div>
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.temp}°C</p>
            <p>Humidity: {weather.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
