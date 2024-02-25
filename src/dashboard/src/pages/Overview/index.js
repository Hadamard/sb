import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Auto-import für Chart.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS importieren
import './styles.css';

const BarChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "August", "September"],
        datasets: [{
          label: "Lost",
          data: [45, 25, 40, 20, 60, 20, 35, 25],
          backgroundColor: "#0d6efd",
          borderColor: 'transparent',
          borderWidth: 2.5,
          barPercentage: 0.4,
        }, {
          label: "Success",
          startAngle: 2,
          data: [20, 40, 20, 50, 25, 40, 25, 10],
          backgroundColor: "#dc3545",
          borderColor: 'transparent',
          borderWidth: 2.5,
          barPercentage: 0.4,
        }]
      },
      options: {
        // Hier kannst du die weiteren Optionen einfügen
      }
    });
  }, []); // Leeres Array als zweites Argument, um sicherzustellen, dass dieser Effekt nur einmal ausgeführt wird

  return <canvas id="myChart" />;
};




const LineChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart2');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "August", "September"],
        datasets: [{
          label: "My First dataset",
          data: [4, 20, 5, 20, 5, 25, 9, 18],
          backgroundColor: 'transparent',
          borderColor: '#0d6efd',
          lineTension: 0.4,
          borderWidth: 1.5,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              stepSize: 12
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
        }
      }
    });
  }, []);

  return <canvas id="myChart2" />;
};









function App(props) {
  return (
    <div className='App'>
     <head>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />

<link href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" rel="stylesheet" />
</head>



  
  <section id="wrapper">  
  
    <div className="p-4">
      <div className="welcome">
        <div className="content rounded-3 p-3">
          <h1 className="fs-3">Hadamard Hyperledger</h1>
          <p className="mb-0">Welcome to your awesome Hyperledger dashboard!</p>
        </div>
      </div>
  
      <section className="statistics mt-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
             
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">1,245</h3> <span className="d-block ms-2">Nodes</span>
                </div>
                <p className="fs-normal mb-0">Nodes connected to your account</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center mb-4 mb-lg-0 p-3">
            
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">34</h3> <span className="d-block ms-2">Networks</span>
                </div>
                <p className="fs-normal mb-0">Networks connected to your account</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box d-flex rounded-2 align-items-center p-3">
             
              <div className="ms-3">
                <div className="d-flex align-items-center">
                  <h3 className="mb-0">5,245</h3> <span className="d-block ms-2">Channels</span>
                </div>
                <p className="fs-normal mb-0">Channels connected to your account</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="charts mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Operations</h3>
           <BarChart />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="chart-container rounded-2 p-3">
              <h3 className="fs-6 mb-3">Transactions</h3>
                <LineChart />
            </div>
          </div>
        </div>
      </section>
  
      <section className="admins mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
            
              
            </div>
          </div>
         

        </div>
      </section>
  
      <section className="statis mt-4 text-center">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="box bg-primary p-3">
            
              <h3>5,154</h3>
              <p className="lead">Page views</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="box bg-danger p-3">
             
              <h3>245</h3>
              <p className="lead">User registered</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <div className="box bg-warning p-3">
             
              <h3>5,154</h3>
              <p className="lead">Active</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="box bg-success p-3">
              
              <h3>5,154</h3>
              <p className="lead">Transactions</p>
            </div>
          </div>
        </div>
      </section>
  
      
    </div>
  </section>
    </div>
  );
}


export default App;
