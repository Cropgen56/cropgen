import React from 'react';
import ReactECharts from 'echarts-for-react';

const PlantGrowthStagesCard = () => {

const ascendingGrowthData = Array.from({ length: 13 }, (_, i) => (2 + i * 0.25 + (Math.random() - 0.5) * 0.3).toFixed(2));

  const chartOptions = {
    xAxis: {
      type: 'category',
      data: Array.from({ length: 13 }, (_, i) => `Week ${i + 1}`),
    },
    yAxis: {
      type: 'value',
      min: 1,
      max: 6,
      axisLabel: {
        formatter: '{value} cm',
      },
    },
    series: [
      {
        data: ascendingGrowthData,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: 'green',
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: '#4B970F' },
              { offset: 1, color: 'white' }, 
            ],
          },
        },
        lineStyle: {
          color: 'green',
        },
      },
    ],
  };

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}>
        <h2 style={{ fontSize: '25px', fontWeight: 'bold', color: '#344E41' }}>
          Plant Growth Activity
        </h2>
        <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '14px', color: 'gray', position: 'absolute', left: '25px', top: '60px' }}>
                Wheat
        </div>
        
        {/* Dropdown Section (Top Right) */}
        <div style={{
          display: 'flex',
          gap: '10px',
        }}>
          <div style={{
            borderRadius: '25px',
            border: '1px solid gray',
            padding: '10px',
            backgroundColor: '#f3f3f3',
            transition: 'background-color 0.2s',
          }}>
            <select style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              color: 'gray',
              fontSize: '14px',
            }}>
              <option>Planning/Sowing</option>
              <option>Sowing</option>
              <option>Growth</option>
            </select>
          </div>
          <div style={{
            borderRadius: '25px',
            border: '1px solid gray',
            padding: '10px',
            backgroundColor: '#f3f3f3',
            transition: 'background-color 0.2s',
          }}>
            <select style={{
              border: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              color: 'gray',
              fontSize: '14px',
            }}>
              <option>Days</option>
              <option>Week 1</option>
              <option>Week 2</option>
              <option>Week 3</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{width: '117%', height: '100%', position: 'relative', left: '-90px', top: '40px', marginTop: '-40px' }}>
        <ReactECharts option={chartOptions} style={{ height: '350px', width: '100%' }} />
      </div>
    </>
  );
};

export default PlantGrowthStagesCard;
