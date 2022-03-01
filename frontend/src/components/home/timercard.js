import React from "react"
import dayjs from "dayjs"
import {Row, Col} from "react-bootstrap"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./timercard.css"
import pencilEditIcon from "../../assets/img/pencil.svg"
// Services
import {getAllFastingTypes, addFastingData} from "../../services/fasting"

const formatDate = (datetime) => {
    return dayjs(datetime).format("DD MMM, hh:mm A")
}

const convertHMS = function(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}

class TimerCard extends React.Component{
    constructor(){
        super()
        this.state = {
            started : null,
            ended : null,
            is_fasting_type_editing : true,
            fasting_types : [],
            current_fasting_type : null,
            fasting_hours : 0,
            is_timer_running : false
        }
        this.startTimer = this.startTimer.bind(this)
        this.endTimer = this.endTimer.bind(this)
        this.editFastingType = this.editFastingType.bind(this)
        this.handleFastingTypeChange = this.handleFastingTypeChange.bind(this)
        this.getFastDuration = this.getFastDuration.bind(this)
    }

    componentDidMount(){
        getAllFastingTypes().then(res => {
            this.setState(prevState =>{
                return {
                    ...prevState,
                    fasting_types : res.data
                }
            })
        })
    }

    editFastingType(){
        this.setState(prevState => {
            return {
                ...prevState, 
                is_fasting_type_editing : true,
            }
        })
    }

    handleFastingTypeChange(e){
        const fasting_type_id = e.target.value
        const fasting_type = this.state.fasting_types.find(ft => ft.id == fasting_type_id)
        this.setState(prevState => {
            return {
                ...prevState, 
                is_fasting_type_editing : false,
                current_fasting_type : fasting_type,
                fasting_hours : fasting_type.name.split(":")[0]
            }
        })
    }

    startTimer(){
        if(!this.state.current_fasting_type){
            return
        }

        const started = dayjs()
        const current_fasting_type = this.state.current_fasting_type
        const fasting_hours = current_fasting_type.name.split(":")[0]
        const ended = started.add(fasting_hours, 'hour')
        this.setState(prevState => {
            return {
                ...prevState, started, ended, is_timer_running : true
            }
        })
    }

    endTimer(){
        const ended = dayjs()
        this.setState(prevState => {
            return {
                ...prevState, ended, is_timer_running : false
            }
        })

        // Sending to server
        addFastingData({ data : {
            started_at : this.state.started,
            ended_at : ended,
            type : this.state.current_fasting_type.id,
        }})
    }

    getFastDuration(){
        if(this.state.is_timer_running){
            return dayjs(this.state.ended).diff(dayjs(this.state.started))/1000
        }
        return 0
    }
    render(){
        return (
            <div className="timer-card">
                <div className="row">
                    <div className="col justify-content-center d-flex">
                        <div className="fasting-type-display">
                            {
                                this.state.is_fasting_type_editing ? 
                                <select value={this.state.current_fasting_type ? this.state.current_fasting_type.value : undefined} onChange={(e) => this.handleFastingTypeChange(e)}>
                                    <option value={undefined}>Select</option>
                                    {this.state.fasting_types.map(ft => {
                                        return <option value={ft.id} key={ft.id}>{ft.name}</option>
                                    })}
                                </select>
                                : this.state.current_fasting_type.name
                            }
                            {
                                !this.state.is_fasting_type_editing ? 
                                <img onClick={() => this.editFastingType()} className="pencil-edit-icon" src={pencilEditIcon} />
                                : null
                            }
                            
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col justify-content-center d-flex timer-circle">
                    <CountdownCircleTimer isPlaying duration={this.getFastDuration()} strokeWidth={15} size={240} colors={['#F2B3A1']}>
                        {({ remainingTime }) => <div className="timer-center-text"><p><span className="timer-card-heading">Fasting Time</span><br /><span className="timer-text">{convertHMS((this.state.fasting_hours*3600) - remainingTime)}</span></p></div>}
                    </CountdownCircleTimer>
                    </div>
                </div>

                <Row>
                    <Col>
                    {
                        !this.state.is_timer_running ? 
                        <button onClick={() => this.startTimer()} className="my-btn">Start</button> : 
                        <button onClick={() => this.endTimer()} className="my-btn">End</button>
                    }
                    </Col>
                </Row>
                    
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className="timer-card-heading">STARTED</p>
                                { this.state.started ? 
                                <p className="timer-card-value">
                                    <span style={{"float":"left"}}>{formatDate(this.state.started)}</span>
                                    <img style={{"float":"right"}} onClick={() => this.editFastingType()} className="pencil-edit-icon" src={pencilEditIcon} />
                                </p>
                                : null}
                                
                            </div>
                            <div className="col">
                                <p className="timer-card-heading">FAST ENDING</p>
                                { this.state.ended ? 
                                <p className="timer-card-value">{formatDate(this.state.ended)}</p>
                                : null}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default TimerCard