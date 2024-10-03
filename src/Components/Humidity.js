import React from 'react';
import ReactEcharts from 'echarts-for-react';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { useState } from 'react';



const Humidity = () => {


  const data = [87, 49, 72, 36, 91, 62, 100, 68, 79, 44, 69, 43]
  const data2 = [0, 70, 20, 16, 42, 30, 62, 38, 49, 27, 58, 14]

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
        min: 0,
        max: 100,
        interval: 20, 
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
          formatter: '{value}°%',
        },
      },
    series: [
      {
        data: data,
        type: 'line',
        areaStyle: {
          color: '#0A94C080',
        },
        lineStyle: {
          color: '0A94C080',
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 0, 
      },

      {
        data: data2,
        type: 'line',
        areaStyle: {
          color: '#86D72FB2',
        },
        lineStyle: {
          color: '#86D72FB2',
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 0, 
      },

      
    ],
    tooltip: {
      trigger: 'axis',
      formatter: '{b0}: {c0}',
    },
  };

  

  return (
    <div style={{height: 200}}>
      <h2 className="w-heading color-#344E41">Humidity, %</h2>
      <ReactEcharts option={options} style={{ height: 270, width: '100%', left: -50, top: -20 }} />
      
    </div>
  );
};

export default Humidity;