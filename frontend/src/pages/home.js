import React from "react"
import TimerCard from "../components/home/timercard"
import RecentFast from "../components/home/recentfast"
import FastSummary from "../components/home/fastsummary"
class Home extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <TimerCard />
                    </div>
                    <div className="col-8">
                        <RecentFast />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FastSummary />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home