import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  // Behandlung der Formular\u00fcbermittlung ...

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Jetzt bezahlen
      </button>
    </form>
  );
}





ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Verkäufe 2023 (Mio.)',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Weiß mit leichter Transparenz
        borderColor: 'rgba(211, 211, 211, 1)', // Hellgrau
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 255, 255, 1)', // Weiße Datenpunkte
        pointBorderColor: 'rgba(211, 211, 211, 1)', // Hellgraue Umrandung der Datenpunkte
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    elements: {
      line: {
        tension: 0.4 // Gibt der Linie eine leichte Krümmung
      },
      point: {
        radius: 5 // Größe der Datenpunkte
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
