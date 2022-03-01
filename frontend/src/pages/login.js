import React from "react"
import {Row, Col, Card} from "react-bootstrap"
import {userLogin} from "../services/user"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
            password : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.login = this.login.bind(this)
    }

    handleInputChange(e){
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        })
    }

    login(){
        userLogin({ data : { email : this.state.email, password : this.state.password }}).then(res => {
            localStorage.setItem("name", res.data.name)
            localStorage.setItem("email", res.data.email)
            localStorage.setItem("token", res.data.token)
            window.location="/home"
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
                                    <button onClick={() => this.login()} className="my-btn">Login</button>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login