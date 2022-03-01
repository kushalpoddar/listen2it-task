import React from "react"
import {Row, Col, Card} from "react-bootstrap"
import "./fastsummary.css"
// Services
import {getFastingSummary} from "../../services/fasting"

class RecentFast extends React.Component{
    constructor(){
        super()
        this.state = {
            summary : []
        }
    }

    componentDidMount(){
        getFastingSummary().then(res => {
            this.setState(prevState => { return { ...prevState, summary : res.data }})
        })
    }

    render(){
        return (
            <div className="fast-summary-card">
                <Card body>
                    
                    <Row>
                        { this.state.summary.map((row, row_i) => {
                            return (
                                <Col key={`SUMMARY_TITLE_${row_i}`}>
                                    <p className="fast-summary-title">{row.title}</p>
                                    <p className="fast-summary-value">{row.value}</p>
                                </Col>
                            )
                        })}
                        
                    </Row>
                    
                </Card>
            </div>
        )
    }
}

export default RecentFast