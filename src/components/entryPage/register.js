import React from "react";
import AuthenticationService from "../../services/authenticationService";
import RedirectionService from "../../services/redirectionService";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            surname: "",
            registerEmail: "",
            registerPass: "",
            repeatedPassword: "",
            errorMessage: "The password has to have at least 6 characters",
            isThereError: false,
            isDisabled: true,
            passMatch: true
        };

        this.redirectService = new RedirectionService();
        this.authService = new AuthenticationService();

        this.initBind();
    }

    initBind() {
        this.getFullName = this.getFullName.bind(this);
        this.getPasswordInput = this.getPasswordInput.bind(this);
        this.getEmailInput = this.getEmailInput.bind(this);
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
        this.getSurname = this.getSurname.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePass = this.validatePass.bind(this);
        this.getRepeatedPass = this.getRepeatedPass.bind(this);
        this.onClickFunction = this.onClickFunction.bind(this);
    }

    getFullName(event) {
        let fullName = event.target.value;

        this.setState({
            fullName
        });
    }

    getSurname(event) {
        let surname = event.target.value;

        this.setState({
            surname
        });
    }

    getPasswordInput(event) {
        let registerPass = event.target.value;

        this.setState({
            registerPass
        });

    }

    getEmailInput(event) {
        let registerEmail = event.target.value;

        this.setState({
            registerEmail
        });
    }

    handleRegisterRequest() {
        const mail = this.state.registerEmail;
        const fullName = this.state.fullName;
        const password = this.state.registerPass;
        const surname = this.state.surname;

        if (this.validateEmail(mail) && password.length >= 4 && fullName.length > 0 && surname.length > 0) {
            const userData = {
                username: mail,
                surname: surname,
                password: password,
                name: fullName,
                email: mail
            };

            console.log(userData);

            this.authService.register(userData);

            this.setState({
                fullName: "",
                surname: "",
                registerEmail: "",
                registerPass: ""
            });

            this.redirectService.redirect("login");
        }
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleRegisterRequest();
        }
    }

    getRepeatedPass(event) {
        let repeatedPass = event.target.value;

        this.setState({
            repeatedPassword: repeatedPass
        });

        // this.validatePass();
    }

    validatePass() {
        const firstPass = this.state.registerPass;
        const secondPass = this.state.repeatedPassword;

        console.log("first " + firstPass);
        console.log("second " + secondPass);

        if(firstPass === secondPass) {
            this.setState({
                passMatch: true
            });
        } else {
            this.setState({
                passMatch: false
            });
        }
    }

    onClickFunction(event) {
        this.getRepeatedPass(event);
        this.validatePass();
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        const clName = this.state.isDisabled ? "disabled" : "";
        const passMatch = this.state.passMatch ? "" : "Passwords don't match";

        return (
            <div>
                <form>
                    <label htmlFor="fullName"><b>Name</b></label>
                    <br />
                    <input type="text" id="fullName" onChange={this.getFullName} onKeyPress={this.handleKeyPress} value={this.state.fullName} placeholder="Name" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="surname"><b>Surname</b></label>
                    <br />
                    <input type="text" id="surname" onChange={this.getSurname} onKeyPress={this.handleKeyPress} value={this.state.surname} placeholder="Surname" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="registerEmail"><b>Email</b></label>
                    <br />
                    <input type="email" id="registerEmail" onChange={this.getEmailInput} onKeyPress={this.handleKeyPress} value={this.state.registerEmail} placeholder="Email Address" style={{ marginBottom: "5px", width: "100%" }} />
                    <br />
                    <label htmlFor="registerPass"><b>Password</b></label>
                    <br />
                    <input type="password" id="registerPass" onChange={this.getPasswordInput} onKeyPress={this.handleKeyPress} value={this.state.registerPass} placeholder="Min 6 characters" style={{ marginBottom: "15px", width: "100%" }} />
                    <br />
                    <label htmlFor="repeatedPass"><b>Repeat Password</b></label>
                    <br />
                    <input type="password" id="repeatedPass" onChange={this.onClickFunction} onKeyPress={this.onClickFunction} placeholder="Min 6 characters" style={{ marginBottom: "15px", width: "100%" }} />
                    <br />
                    <button className={`btn btn-primary ${clName}`} id="registerButton" onClick={this.onClickFunction} style={{ marginLeft: "83%", borderRadius: "5px", width: "80px" }}>Register</button>

                    <p id="error"> {this.state.isThereError ? this.state.errorMessage : ""} </p>
                    <p id="passMatch"> {passMatch} </p>
                </form>
            </div>
        );
    }
}

export default Register;