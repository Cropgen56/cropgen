import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Collapse } from "react-bootstrap";
import { Weather2, Arrow } from "../assets/icons";
// import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import RainChancesChart from "../components/oldcomponents/rain-chart";
import WindChart from "../components/weather/wind-speed";
import Temperature from "../components/weather/temperature";
import Humidity from "../components/weather/Humidity";
import "../components/weather/weather.css";

const Weather = () => {
  const [forecast, setForecast] = useState([]);
  const apiKey = "55914755213187993587f0bcd665271b";
  const lat = 19.076;
  const lon = 72.8777;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const dailyData = response.data.list.reduce((acc, reading) => {
          const dateObj = new Date(reading.dt * 1000);
          const date = ` ${dateObj
            .toLocaleDateString("en-US", { weekday: "short" })
            .toLocaleUpperCase()} ${dateObj.getDate()} ${dateObj.toLocaleDateString(
            "en-US",
            { month: "short" }
          )}`;

          if (!acc[date]) {
            acc[date] = {
              temp: reading.main.temp,
              icon: reading.weather[0].icon,
              description: reading.weather[0].description,
            };
          }
          return acc;
        }, {});

        setForecast(Object.entries(dailyData).slice(0, 5));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [lat, lon, apiKey]);

  return (
    <Container fluid style={{ background: "#5f7e6f", height: "100vh" }}>
      <Row>
        <Col md={3} className={`sidebar ${collapsed ? "collapsed" : ""}`}>
          <div
            style={{ display: "inline-flex", marginTop: 20, marginLeft: 30 }}
          >
            <div style={{ display: collapsed ? "none" : "block" }}>
              <Weather2 />
              <h2
                style={{
                  marginLeft: 10,
                  color: "#344E41",
                  fontFamily: "Inter",
                }}
              >
                <b>Weather</b>
              </h2>
            </div>
            <Button
              variant="link"
              onClick={() => setCollapsed(!collapsed)}
              style={{ marginTop: -7, marginLeft: collapsed ? -24 : 10 }}
            >
              <Arrow />
            </Button>
          </div>
        </Col>

        <Col md={9} className="content">
          <Card style={{ height: 250, marginTop: 20 }}>
            <div className="weather-container">
              <div className="forecast-wrapper">
                {forecast.map(([day, data], index) => (
                  <div className="weather-day" key={index}>
                    <h3>{day}</h3>
                    <img
                      src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                      alt={data.description}
                    />
                    <p>{data.description}</p>
                    <p>{Math.round((data.temp * 9) / 5 + 32)}°F</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card style={{ height: 120, marginTop: 20 }}>
            <Card.Body>
              <h2 className="w-heading">Weather History</h2>
              <div className="subtext">Period</div>
              {/* You can replace this with a date picker from React Bootstrap if needed */}
              <Button variant="primary">Select Date</Button>
            </Card.Body>
          </Card>

          <Card style={{ height: 300, marginTop: 20 }}>
            <RainChancesChart />
          </Card>

          <Card style={{ height: 400, marginTop: 20 }}>
            <Card.Body>
              <h2 style={{ color: "#344E41", fontWeight: 700 }}>Wind</h2>
              <WindChart />
            </Card.Body>
          </Card>

          <Card style={{ height: 300, marginTop: 20 }}>
            <Card.Body>
              <Temperature />
            </Card.Body>
          </Card>

          <Card style={{ height: 300, marginTop: 20, marginBottom: 20 }}>
            <Card.Body>
              <Humidity />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
