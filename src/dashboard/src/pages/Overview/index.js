import React from "react";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

const Chart1 = () => {
  useEffect(() => {
    const canvas = document.getElementById('chart1');
    const ctx = canvas.getContext('2d');

    // Zeichne deinen Chart 1 hier mit Canvas und JavaScript
    // Beispiel:
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div style={{ width: '50%', float: 'left' }}>
      <canvas id="chart1" width="300" height="200"></canvas>
    </div>
  );
};

const Chart2 = () => {
  useEffect(() => {
    const canvas = document.getElementById('chart2');
    const ctx = canvas.getContext('2d');

    // Zeichne deinen Chart 2 hier mit Canvas und JavaScript
    // Beispiel:
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div style={{ width: '50%', float: 'left' }}>
      <canvas id="chart2" width="300" height="200"></canvas>
    </div>
  );
};

const ChartsContainer = () => {
  return (
    <div>
      <Chart1 />
      <Chart2 />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Two Charts Side by Side</h1>
      <ChartsContainer />
    </div>
  );
};


export default RedirectButton;
