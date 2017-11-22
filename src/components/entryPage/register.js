import React from "react";

import AuthenticationService from "../../services/authenticationService";
import ValidationService from "../../services/validationService";
import RedirectionService from "../../services/redirectionService";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameString: "",
            emailString: "",
            passwordString: "",
            usernameString: "",
            confirmedPassword: ""
        };

        this.bindInit();

        this.redirection = new RedirectionService();
        this.authentication = new AuthenticationService();
        this.validation = new ValidationService();
    }

    bindInit() {
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.allRegisterData = this.allRegisterData.bind(this);
        this.passwordConfirmedHandler = this.passwordConfirmedHandler.bind(this);
    }

    nameChangeHandler(event) {
        const usernameString = event.target.value;

        this.setState({
            usernameString
        });
    }
    usernameChangeHandler(event) {
        const nameString = event.target.value;

        this.setState({
            nameString
        });
    }
    emailChangeHandler(event) {
        const emailString = event.target.value;

        this.setState({
            emailString
        });
    }
    passwordChangeHandler(event) {
        const passwordString = event.target.value;

        this.setState({
            passwordString
        });
    }
    passwordConfirmedHandler(event) {
        const confirmedPassword = event.target.value;

        this.setState({
            confirmedPassword
        });
    }

    allRegisterData() {
        let userData = {
            name: this.state.nameString,
            password: this.state.passwordString,
            confirmedPassword: this.state.confirmedPassword,
            email: this.state.emailString,
            username: this.state.usernameString,
        };

        let validateChecker = this.validation.ultimateValidation(userData);
        if (validateChecker) {
            this.authentication.register(userData);
        }
        this.redirection.redirect("login");
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fullName"><b>Name</b></label>
                    <br />
                    <input type="text" id="fullName" onChange={this.nameChangeHandler} value={event.target.value} placeholder="Name" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="surname"><b>Surname</b></label>
                    <br />
                    <input type="text" id="surname" onChange={this.usernameChangeHandler} value={event.target.value} placeholder="Surname" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="registerEmail"><b>Email</b></label>
                    <br />
                    <input type="email" id="registerEmail" onChange={this.emailChangeHandler} value={event.target.value} placeholder="Email Address" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="registerPass"><b>Password</b></label>
                    <br />
                    <input type="password" id="registerPass" onChange={this.passwordChangeHandler} value={event.target.value} placeholder="Min 6 characters" style={{ marginBottom: "15px", width: "100%" }} />
                    <br />
                    <label htmlFor="repeatedPass"><b>Repeat Password</b></label>
                    <br />
                    <input type="password" id="repeatedPass" onChange={this.passwordConfirmedHandler} value={event.target.value} placeholder="Min 6 characters" style={{ marginBottom: "15px", width: "100%" }} />
                    <br />
                    <button className="btn btn-primary" id="registerButton" onClick={this.allRegisterData} style={{ marginLeft: "83%", borderRadius: "5px", width: "80px" }}>Register</button>
                </form>
            </div>
        );
    }
}

export default Register;