
import React from "react";

const CurrentWeather = ({ city, weatherData, sunrise, sunset }) => {
  return (
    <div className="flex flex-col justify-around md:flex-row p-6 rounded shadow-md animate-zoomIn sm:flex-row sm:space-x-4 h-full">
      <div>
        <h2 className="text-5xl font-bold">{city}</h2>
        <p className="text-3xl">{weatherData.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
          alt={weatherData.weather[0].description}
          className="animate-pulse animate-rotate"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-2xl glass-bg p-5 rounded">
        <div className="flex flex-col items-center">
          <p className="font-bold">{weatherData.main.temp}°C</p>
          <span>Temperature 🌡️</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{weatherData.main.humidity}%</p>
          <span>Humidity 💧</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{weatherData.wind.speed} m/s</p>
          <span>Wind 🌬️</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{sunrise}</p>
          <span>Sunrise 🌅</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold">{sunset}</p>
          <span>Sunset 🌇</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
