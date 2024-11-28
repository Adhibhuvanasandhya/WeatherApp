// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import one from "./assests/images/w5.jpg";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/Hourlyweather";

const App = () => {
  const [city, setCity] = useState("Chennai");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [currentTime, setCurrentTime] = useState("");



  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), "PPpp"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=25a9ae322a161942f815e1fe7058c5a3`
      );

      const cityData = response.data.city;

      setWeatherData(response.data.list[0]);

      // Filter hourly data for specific times: 6 AM, 9 AM, 12 PM, 3 PM, 6 PM, 9 PM

      
      const filteredHourlyData = response.data.list.filter((item) => {
        const time = format(new Date(item.dt_txt), "HH:mm:ss");
        return ["06:00:00", "09:00:00", "12:00:00", "15:00:00", "18:00:00", "21:00:00"].includes(time);
      });
      setHourlyData(filteredHourlyData);

      setSunrise(format(new Date(cityData.sunrise * 1000), "p"));
      setSunset(format(new Date(cityData.sunset * 1000), "p"));
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const inputCity = e.target.elements.city.value.trim();
    if (inputCity) setCity(inputCity);
  };

  return (
    <div
      className="text-white p-3 bg-cover h-screen flex flex-col justify-between animate-fadeIn"
      style={{
        backgroundImage: `url(${one})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: window.innerWidth < 640 ? "160vh" : "100vh",
      }}
    >
      <Header currentTime={currentTime} />
      <Search handleSearch={handleSearch} />
      {weatherData && <CurrentWeather city={city} weatherData={weatherData} sunrise={sunrise} sunset={sunset} />}
      <HourlyWeather hourlyData={hourlyData} />
    </div>
  );
};

export default App;
