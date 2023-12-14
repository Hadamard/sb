import React from "react";
import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';

function RedirectButton() {
  return (
    <Link to="https://hadamard.com" target="_blank">
      <button>Visit Hadamard.com</button>
    </Link>
  );
}





const Chart1 = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'Chart 1 Data',
        data: [12, 19, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '50%', float: 'left' }}>
      <Bar data={data} />
    </div>
  );
};




export default RedirectButton;
