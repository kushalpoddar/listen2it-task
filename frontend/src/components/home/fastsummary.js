import React from "react"
import {Row, Col, Card} from "react-bootstrap"
import "./fastsummary.css"

class RecentFast extends React.Component{
    constructor(){
        super()
        this.state = {
            summary : [{
                title : "Total Fasts",
                value : "14"
            },{
                title : "7-fast avg",
                value : "16h"
            },{
                title : "Longest Fast",
                value : "18.1h"
            },{
                title : "Longest Streak",
                value : "14"
            },{
                title : "Current Streak",
                value : "14"
            }]
        }
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