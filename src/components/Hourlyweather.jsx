
import React from "react";
import { format } from "date-fns";

const HourlyWeather = ({ hourlyData }) => {
  return (
    <div className="mt-6">
      <h3 className="text-3xl font-semibold mb-4 animate-slideInLeft">Hourly Updates</h3>
      <div className="overflow-x-scroll flex space-x-4 p-4 glass-bg rounded shadow-md">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className="min-w-[120px] flex-shrink-0 flex flex-col items-center glass-bg p-4 rounded shadow-md transform hover:scale-105 transition-transform duration-300 animate-slideInRight"
          >
            <p className="font-bold">{format(new Date(hour.dt_txt), "eeee")}</p>
            <p>{format(new Date(hour.dt_txt), "h a")}</p>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
            />
            <p>{hour.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
