import React from 'react';
import ReactECharts from 'echarts-for-react';

const WindChart = () => {

  const dateData = ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug'];
  const windSpeedData1 = [3.2, 4.1, 2.8, 3.6, 4.0, 3.9, 4.5];
  const windSpeedData2 = [2.8, 3.6, 3.0, 4.2, 3.8, 3.4, 4.1];

  
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: dateData,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 8,
      interval: 2,
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: [
      {
        name: 'Wind Speed 1',
        type: 'line',
        data: windSpeedData1,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#1f77b4',
        },
      },
      {
        name: 'Wind Speed 2',
        type: 'line',
        data: windSpeedData2,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#ff7f0e',
        },
      
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 350, width: '100%', marginTop: 20, position: 'relative', left: -70 }} />;
};

export default WindChart;
