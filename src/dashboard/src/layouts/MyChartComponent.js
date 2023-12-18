import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./lays.css";
const MyChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: [ 'T-10','T-9', 'T-8', 'T-7', 'T-6', 'T-5', 'T-4', 'T-3', 'T-2', 'T-1'],
        datasets: [{
          label: 'Usage in %',
          data: [15 , 2 , 5 ,8 ,12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(18, 30, 53, 1)', // Umrechnung von #121E35 in RGBA mit 0.2 Deckkraft

          borderColor:  'rgba (255, 255, 255, 1)',
        
          
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas className="Chart" ref={chartRef} />;
};

export default MyChartComponent;

     
