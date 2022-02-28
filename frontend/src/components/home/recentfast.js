import React from "react"
import {Card} from "react-bootstrap"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./recentfast.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

class RecentFast extends React.Component{
    render(){
        const options = {
            responsive: true,
            scales: {
                y: {
                    grid: {
                        display: false
                    }
                },
            }
        };

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

        const data = {
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: [1,2,3,4,6,5,4],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderRadius: Number.MAX_VALUE,
                barThickness : 10
              },
            ],
            
          };
        return (
            <div className="recent-fast-card">
                <Card body>
                    <p className="recent-fast-title mb-0">Recent fasts</p>
                    <p className="recent-fast-title1 mb-0">Average 15h</p>
                    <Bar options={options} data={data} />
                </Card>
            </div>
        )
    }
}

export default RecentFast