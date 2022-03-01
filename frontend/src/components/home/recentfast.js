import React from "react"
import dayjs from "dayjs"
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
// Services
import {getFastingRecent} from "../../services/fasting"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

class RecentFast extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        getFastingRecent().then(res => {
            this.setState({ data : res.data })
        })
    }
    
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

        const labels = this.state.data.map(row => dayjs(row.started_at).format("MMM DD"))
        const label = this.state.data.length ? `${dayjs(this.state.data[this.state.data.length -1].started_at).format("MMM DD")} - ${dayjs(this.state.data[0].started_at).format("MMM DD")}` : "No data"
        const data = {
            labels,
            datasets: [
              {
                label,
                data: this.state.data.map(row => row.duration),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderRadius: Number.MAX_VALUE,
                barThickness : 10
              },
            ],
            
          };

        const averageFastingTime = () => {
            const duration_arr = this.state.data.map(row => row.duration)
            return duration_arr.reduce((a,b) => a + b, 0)/duration_arr.length
        }
        return (
            <div className="recent-fast-card">
                <Card body>
                    <p className="recent-fast-title mb-0">Recent fasts</p>
                    <p className="recent-fast-title1 mb-0">Average {averageFastingTime()}h</p>
                    <Bar options={options} data={data} />
                </Card>
            </div>
        )
    }
}

export default RecentFast