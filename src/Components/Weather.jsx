import axios from 'axios';
import React, { useState, useEffect} from 'react';
import {DatePicker, Layout } from 'antd';
import {Weather2, Arrow} from '../assets/icons';
import 'antd/dist/reset.css';
import { Button, Card } from 'antd';
import '../Components/weather.css'
import RainChancesChart from './rain-chart';
import WindChart from './wind-speed'
import Temperature from './temperature'
import Humidity from './Humidity'


const { Sider } = Layout;




const WeatherData = () => {


    const [forecast, setForecast] = useState([]);
    // const city = useState('Mumbai');
    const apiKey = '55914755213187993587f0bcd665271b';
    const lat = 19.0760;
    const lon = 72.8777;
    const [collapsed, setCollapsed] = useState(false);
    const { RangePicker } = DatePicker;


    useEffect(() => {
      const fetchWeather = async () => {
        try {
          
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
          );
  
          
          const dailyData = response.data.list.reduce((acc, reading) => {
            
            const dateObj = new Date(reading.dt * 1000);
            const date = ` ${dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toLocaleUpperCase()} ${dateObj.getDate()} ${dateObj.toLocaleDateString('en-US', { month: 'short' })}`;

            
            
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
    <div style={{display: 'flex', background: '#5f7e6f'}}>

    <Sider
      collapsible
      collapsed= {collapsed}
      width={300}
      collapsedWidth={0}
      trigger={null}
      theme="light"
      style={{ position: 'relative', left: 0 }}
    >


    <div style={{display: 'inline-flex', marginTop: 20, marginLeft:30}}>
    <div style={{display: collapsed? 'none' : 'block'}}>
        <Weather2 />
        <h2 style={{marginLeft: 50, marginTop: -30, color: '#344E41', display: collapsed? 'none' : '', fontFamily: 'Inter'}}><b>Weather</b></h2>
   
    </div>
        <br/>
      <Button type='text' onClick={() => setCollapsed(!collapsed)} style={{marginTop: -7, marginLeft: collapsed? -24 : 80 }}>
        <Arrow />
        </Button>

        </div>
        
    </Sider>
 

    <div style={{width: collapsed? '97%': '73.5%', marginLeft: 20}}>
    <div className='line'></div>
    <div className='line3' style={{
          top: 22,
          left: collapsed? 140 : 630
    }}></div>
      <Card style={{height:250, marginTop: 20}}>
        {/* <Button type="text" className='next'><Arrow/></Button> */}
      <div className="weather-container">
      <div className="forecast-wrapper">
        {forecast.map(([day, data, date], index) => (
          <div className="weather-day" key={index}>
            <span><h3>{day}</h3></span>{date}
            <img 
              src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
              alt={data.description} 
            />
            <p>{data.description}</p>
            <p>{Math.round(data.temp * 9/5 + 32)}°F</p>
          </div>
        ))}
      </div>
    </div>
    {/* <Button type="text" className='back'><Arrow/></Button> */}
      </Card>
      <div className='line2' style={{
           top: 22,
           left: collapsed? 400 : 820
      }}></div>
      <div className='line4' style={{
            top: 22,
            left: collapsed? 660: 1395
      }}></div>
      <div className='line5' style={{
            top: 22,
            left: collapsed? 920 : 1020
      }}></div>
      <div className='line6' style={{
            top: 22,
            left: collapsed? 1180 : 1210
      }}></div>
      <div className='line7' style={{
            top: 22,
            left: collapsed? 1420 : 440
      }}></div>
      
      <Card style={{height:120, marginTop: 20}}>
          <h2 className="w-heading">Weather History</h2>
          <div className="subtext">Period</div>
          <span>
            <RangePicker
            className='DatePicker'
             format="DD MMM YYYY"
             ></RangePicker>
          </span>
      </Card>

      <Card style={{height:300, marginTop: 20}}>
      <div style={{}}>
      <RainChancesChart />
      </div>
      </Card>

      <Card style={{height:400, marginTop: 20}}>
        <div className="Wind" style={{width: '100%', height: '200px'}}>
          <h2 style={{color: '#344E41', fontWeight: 700}}>Wind</h2>
        <WindChart />
        </div>
      </Card>


      <Card style={{height:300, marginTop: 20}}>
      <div>
        <Temperature />
      </div>
      </Card>

      <Card style={{height:300, marginTop: 20, marginBottom: 20}}>
        <div>
          <Humidity />
        </div>
      </Card>

    </div>

</div>

  );
};

export default WeatherData;

