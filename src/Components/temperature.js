import React from 'react';
import ReactEcharts from 'echarts-for-react';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { useState } from 'react';



const Temperature = () => {


  // const timeDate = "";
  // const weather_data = "";
  // const wind_direction = "";
  // const rain_prep = "";

  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(8);

  const data = [35, 29, 22, 26, 31, 32, 27, 28, 30, 24, 34, 23]
  const data2 = [25, 19, 10, 15, 12, 20, 22, 12, 15, 27, 28, 14]
  const data3 = [0, 5, 8, 11, 7, 6, 4, 2, 19, 13, 18, 24]

  const MonthsData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const options = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: MonthsData,
      axisLine: {
        show: true,
      },
      axisLabel: {
        color: '#000',
      },
    },
    yAxis: {
        type: 'value',
        min: -10,
        max: 35,
        interval: 5, 
        axisLine: {
            show: true,
          },
          splitLine: {
            show: true,
          },
          axisTick: {
            show: true,
          },
        axisLabel: {
          color: '#000',
          formatter: '{value}°C',
        },
      },
    series: [
      {
        data: data,
        type: 'line',
        areaStyle: {
          color: '#F4BC58',
        },
        lineStyle: {
          color: '#F4BC58',
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 0, 
      },

      {
        data: data2,
        type: 'line',
        areaStyle: {
          color: '#86D72F',
        },
        lineStyle: {
          color: '#86D72F',
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 0, 
      },

      {
        data: data3,
        type: 'line',
        areaStyle: {
          color: '#4B970F',
        },
        lineStyle: {
          color: '#4B970F',
        },
        smooth: false,
        symbolSize: 0, 
      },
    ],
    tooltip: {
      trigger: 'axis',
      formatter: '{b0}: {c0}',
    },
    // dataZoom: [
    //   {
    //     type: 'inside',
    //     start: 0,
    //     end: 100,
    //   },
    // ],
  };

  

  return (
    <div>
      <h2 className="w-heading color-#344E41">Temperature, °C  </h2>
      <ReactEcharts option={options} style={{ height: 300, width: '100%', position: 'relative', left: -50, top: -40 }} />
      
    </div>
  );
};

export default Temperature;