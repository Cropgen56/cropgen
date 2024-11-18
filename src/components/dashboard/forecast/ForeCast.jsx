import React from "react";
import Card from "react-bootstrap/Card";
import "./ForeCast.css";

function ForeCast() {
  const weatherData = {
    today: {
      temperature: 27,
      icon: "🌧️",
      wind: "14 km/h",
      humidity: "86%",
      pressure: "1007 hPa",
    },
    week: [
      { day: "MON", temperature: 45, icon: "☀️", chanceOfRain: "36%" },
      { day: "TUE", temperature: 21, icon: "🌧️", chanceOfRain: "65%" },
      {
        day: "WED",
        temperature: 20,
        icon: "⛅",
        chanceOfRain: "12%",
        isHighlighted: true,
      },
      { day: "THU", temperature: 32, icon: "⛅", chanceOfRain: "51%" },
      { day: "FRI", temperature: 32, icon: "⛅", chanceOfRain: "52%" },
      { day: "SAT", temperature: 36, icon: "☀️", chanceOfRain: "95%" },
      { day: "SUN", temperature: 23, icon: "🌧️", chanceOfRain: "21%" },
    ],
  };

  return (
    <Card body className="mt-4 mb-5 forecast shadow">
      <h3>Forecast</h3>
      <div className="forecast-container">
        <div className="d-flex">
          {/* todays weather */}
          <div className="forecast-today">
            <h2 className="mb-3">Weather's Today</h2>
            <div className="today-weather px-5">
              <span className="weather-icon">{weatherData.today.icon}</span>
              <div className="temperature">
                {weatherData.today.temperature}°C
              </div>
            </div>
            <div className="today-details ">
              <div>💨 {weatherData.today.wind}</div>
              <div>💧 {weatherData.today.humidity}</div>
              <div>📏 {weatherData.today.pressure}</div>
            </div>
          </div>
          {/* week weather */}
          <div className="week-weather">
            <h2 className="ps-4 ">This Week</h2>
            <div className="forecast-week py-2">
              {weatherData.week.map((day, index) => (
                <div
                  key={index}
                  className={`day-forecast ${
                    day.isHighlighted ? "highlighted" : ""
                  }`}
                >
                  <div className="day">{day.day}</div>
                  <div className="icon w-100 m-0 p-0">
                    <span>{day.icon}</span>
                    <span>{day.temperature}°C</span>
                  </div>
                  {/* <div className="temp"></div> */}
                  <div
                    className={`rani-chance ${
                      day.isHighlighted ? "highlighted" : ""
                    } `}
                  >
                    {day.chanceOfRain}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ForeCast;
