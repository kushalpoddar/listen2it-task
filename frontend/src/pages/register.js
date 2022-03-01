import React from "react"
import {Row, Col, Card} from "react-bootstrap"
import {userRegister} from "../services/user"

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            email : "",
            password : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.register = this.register.bind(this)
    }

    handleInputChange(e){
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        })
    }

    register(){
        userRegister({ data : { name : this.state.name, email : this.state.email, password : this.state.password }}).then(res => {
            alert("User registered successfully")
            window.location = "/login"
        }).catch(err => {
            alert(err.response.data)
        })
    }

    render(){
        return (
            <div className="container">
                <div style={{"minHeight" : "100vh"}} className="row d-flex align-items-center justify-content-center">
                    <div className="col-4 login-card">
                        <Card body>
                            <Row>
                                <Col>
                                    <p className="input-label">Name</p>
                                    <input className="input" name="name" onChange={(e) => this.handleInputChange(e)} placeholder="Name" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="input-label">Email</p>
                                    <input className="input" name="email" onChange={(e) => this.handleInputChange(e)} placeholder="Email" type="text" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="input-label">Password</p>
                                    <input className="input" name="password" onChange={(e) => this.handleInputChange(e)} placeholder="Password" type="password" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button onClick={() => this.register()} className="my-btn">Register</button>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default Register