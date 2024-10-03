import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';


const GenrateTimeData = () => { 
  const timeData = []
        for(let hours = 0; hours<24; hours++) {
          const time = `${hours === 0 || hours === 12 ? 12 : hours % 12 }:00 ${hours < 12 ? 'AM' : 'PM'}`; 
          timeData.push(time);
        }
       return timeData;
};

const timeData = GenrateTimeData();

const RainChancesChart = () => {


  // const timeDate = "";
  // const weather_data = "";
  // const wind_direction = "";
  // const rain_prep = "";

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  const data = [0.2, 0.6, 0.4, 0.7, 0.5, 0.3, 0.8, 0.4, 0.6, 0.7]

  const options = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: timeData.slice(start, end),
      axisLabel: {
        color: '#000',
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#000',
      },
    },
    series: [
      {
        data: data,
        type: 'line',
        areaStyle: {
          color: '#81D8EB',
        },
        lineStyle: {
          color: '#81D8EB',
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 10, 
        itemStyle: {
          color: '#81D8EB',
          fill: '#81D8EB'
        },
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

  // const scrollRight = () => {
  //   if(end < timeData.length) {
  //     setStart(start +1)
  //     setEnd(end +1)
  //   }
  // };

  const scrollLeft = () => {
    if(start > 0) {
      setStart(start - 1 )
      setEnd(end - 1)
    }
  };

  return (
    <div>
      <h2 className="w-heading color-#344E41">Rain Chances</h2>
      <hr style={{ border: '1px solid #ccc', position: 'relative', top: 35, width: '85%', left: -30 }} />
      <ReactEcharts option={options} style={{ height: 250, width: '100%', position: 'relative', left: -30 }} />
      
      <LeftOutlined 
        onClick={scrollLeft} 
        style={{
          fontSize: '24px', 
          cursor: 'pointer', 
          color: start === 0 ? 'gray' : 'black', 
          position: 'absolute', 
          left: '15px', 
          top: '50%', 
          transform: 'translateY(-50%)'
        }} 
      />
      {/* <RightOutlined 
        onClick={scrollRight} 
        style={{
          fontSize: '24px', 
          cursor: 'pointer', 
          color: end >= timeData.length ? 'gray' : 'black', 
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)'
        }} 
      /> */}
    </div>
  );
};

export default RainChancesChart;