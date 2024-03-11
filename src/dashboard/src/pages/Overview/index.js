import React, { PureComponent, Fragment, useEffect } from 'react';
import { connect, injectIntl } from 'umi';
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
          label: "Transactions / Month",
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
@connect(({channel, network, node, user, loading }) => ({
  channel,
  node,
  user,
  network,
}))
         
class UserManagement extends PureComponent {
    
componentDidMount() {
  const { dispatch } = this.props;
  dispatch({ type: 'user/fetch' });
  dispatch({ type: 'network/listNetwork' });
  dispatch({ type: 'node/listNode' });
  dispatch({ type: 'channel/listChannel' });
}
  render() {
    
    const {
      user: { users, pagination, currentUser },
      node: { nodes },
      network: { networks },
      channel: { channels }, 
    } = this.props;
   
     
   
    console.log(this.props);
  const startDate = new Date('2024-01-01');
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  // Berechne Tage, Stunden, Minuten und Sekunden
  const days = Math.floor(differenceInTime / (1000 * 3600 * 24));
  const hours = Math.floor((differenceInTime % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((differenceInTime % (1000 * 3600)) / (1000 * 60));

  const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);


    return (
@@ -235,7 +235,7 @@ componentDidMount() {
          <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
            <div className="box bg-warning p-3">

              <h3>d{ days } h{ hours } m{ minutes }</h3>
              <h3>{ days }D { hours }H { minutes }m { seconds }s</h3>
              <p className="lead">Active since</p>
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
}
export default injectIntl(UserManagement);
