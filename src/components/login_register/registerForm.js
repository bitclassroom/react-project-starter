import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../service/authService";

class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: ""
        };
        this.initBind();
        this.authService = new AuthService();
    }

    initBind() {
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    registerHandler() {
        const data = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        };
        // if (data.name == "" || data.username == "" || data.password == "" || data.email == "") {
        //     alert("Please fill out all fields!");
        // } else {
        this.authService.register(data);
        // }
    }

    render() {
        return (
            <div className="bitform col s6">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s6"><Link to={"/login"}>Login</Link></li>
                        <li className="tab col s6"><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
                <div className="col s12">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" onChange={this.handleNameChange} placeholder="Enter first name and last name..." />
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" onChange={this.handleUsernameChange} placeholder="Enter username..." />
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" onChange={this.handleEmailChange} placeholder="Enter Email..." />
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" onChange={this.handlePasswordChange} placeholder="Enter Password..." />
                        <button className="waves-effect waves-light btn" onClick={this.registerHandler}>Register</button>

                    </form>

                </div>

            </div>
        );
    }
}

export default RegisterForm;