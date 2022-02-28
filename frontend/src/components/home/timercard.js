import React from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./timercard.css"
import pencilEditIcon from "../../assets/img/pencil.svg"
class TimerCard extends React.Component{
    render(){
        return (
            <div className="timer-card">
                <div className="row">
                    <div className="col justify-content-center d-flex">
                        <div className="fasting-type-display">
                            16:8
                            <img className="pencil-edit-icon" src={pencilEditIcon} />
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col justify-content-center d-flex timer-circle">
                    <CountdownCircleTimer isPlaying duration={7} strokeWidth={15} size={240} colors={['#F2B3A1']}>
                        {({ remainingTime }) => <div className="timer-center-text"><p><span className="timer-card-heading">Fasting Time</span><br /><span className="timer-text">{remainingTime*100}</span></p></div>}
                    </CountdownCircleTimer>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <p className="timer-card-heading">STARTED</p>
                    </div>
                    <div className="col">
                        <p className="timer-card-heading">FAST ENDING</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerCard