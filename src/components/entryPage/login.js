import React from "react";
import { Link } from "react-router-dom";

import AuthenticationService from "../../services/authenticationService";
import MainFeed from "../mainFeed/mainFeed";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailInput: "",
            passInput: "",
            errorMessage: "The password has to have at least 6 characters",
            isThereError: false,
            isDisabled: true
        };

        this.authService = new AuthenticationService();

        this.bindInit();
    }

    bindInit() {
        this.getEmailInput = this.getEmailInput.bind(this);
        this.getPassInput = this.getPassInput.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    getEmailInput(event) {
        const emailInput = event.target.value;

        this.setState({
            emailInput
        });
    }


    getPassInput(event) {
        const passInput = event.target.value;

        this.setState({
            passInput
        });

        if (passInput.length < 4) {
            this.setState({
                isThereError: true,
                isDisabled: true
            });
        } else {
            this.setState({
                isThereError: false,
                isDisabled: false
            });
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    handleLoginRequest() {
        const emailInput = this.state.emailInput;
        const passInput = this.state.passInput;
        if (this.validateEmail(emailInput) && passInput.length >= 4) {

            const userData = {
                username: emailInput,
                password: passInput
            };
            console.log(userData);

            this.authService.login(userData);

            this.setState({
                emailInput: "",
                passInput: ""
            });
        }
        else
            return;
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleLoginRequest();
        }
    }

    render() {
        const clName = this.state.isDisabled ? "disabled" : "";

        return (
            <div ref="loginDiv">
                <form>
                    <label htmlFor="loginEmail"><b>Email</b></label>
                    <br />
                    <input type="email" id="loginEmail" onChange={this.getEmailInput} onKeyPress={this.handleKeyPress} value={this.state.emailInput} placeholder="Email" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="loginPass"><b>Password</b></label>
                    <br />
                    <input type="password" id="loginPass" onChange={this.getPassInput} onKeyPress={this.handleKeyPress} value={this.state.passInput} placeholder="Password" style={{ marginBottom: "15px", width: "100%" }} />
                    <br />
                    <button className={`btn btn-primary ${clName}`} id="loginButton" onClick={this.handleLoginRequest} style={{ marginLeft: "83%", borderRadius: "5px", width: "80px", position: "relative", top: "130px" }}>Login</button>
                    <p id="error"> {this.state.isThereError ? this.state.errorMessage : ""} </p>
                </form>
            </div>
        );
    }
}

export default Login;