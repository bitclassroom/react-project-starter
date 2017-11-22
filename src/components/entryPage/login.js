import React from "react";
import AuthenticationService from "../../services/authenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            emailInput: "",
            passInput: "",
            isFormValid: false
        };

        this.authService = new AuthenticationService();

        this.bindInit();
    }

    bindInit() {
        this.getEmailInput = this.getEmailInput.bind(this);
        this.getPassInput = this.getPassInput.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
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
    }

    handleLoginRequest() {
        const emailInput = this.state.emailInput;
        console.log(emailInput);
        const passInput = this.state.passInput;
        console.log(passInput);

        const userData = {
            username: emailInput,
            password: passInput
        };
        console.log(userData);

        this.authService.login(userData);

        // if(!emailInput || !passInput) {
        //     let invalidInput = this.refs.inputDiv.getDOMNode();
        //     // invalidInput.innerHTML = "Unable to login. Invalid credentials";
        // }
    }

    render() {
        return (
            <div ref="loginDiv">
                <label htmlFor="loginEmail"><b>Email</b></label>
                <br/>
                <input type="email" id="loginEmail" onChange={this.getEmailInput} placeholder="Email" style={{marginBottom: "5px", width: "100%"}} />
                <br/>
                <label htmlFor="loginPass"><b>Password</b></label>
                <br/>
                <input type="password" id="loginPass" onChange={this.getPassInput} placeholder="Password" style={{marginBottom: "15px", width: "100%"}} />
                <br/>
                <input type="button" id="loginButton" value="Login" onClick={this.handleLoginRequest} style={{marginLeft: "83%", borderRadius: "5px", width: "80px", position: "relative", top: "70px"}} />
            </div>
        );
    }
}

export default Login;