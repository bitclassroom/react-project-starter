import React from "react";

import AuthenticationService from "../../services/authenticationService";
import ErrorHandlerService from "../../services/errorHandlerService";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            email: "",
            repeatPassword: "",
            errorMsg: ""
        };
        this.authenticationService = new AuthenticationService();
        this.errorHandlerService = new ErrorHandlerService();
        this.bindFunction();
    }

    bindFunction() {
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }
    onRegisterClick() {
        const data = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email,
            repeatPassword: this.state.repeatPassword
        };

        const msg = this.errorHandlerService.validateRegisterForm(data);
        this.setState({ errorMsg: msg });

        if (msg) {
            return;
        } else {
            this.authenticationService.register(data, (error) => {
                this.setState({ errorMsg: error });
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Username</label><br />
                            <input id="input_text" type="text" data-length="25" name="username"
                                value={this.state.username} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Password</label><br />
                            <input id="input_text" type="password" data-length="25" name="password"
                                value={this.state.password} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Name</label><br />
                            <input id="input_text" type="text" data-length="25" name="name"
                                value={this.state.name} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Email</label><br />
                            <input id="input_text" type="email" data-length="25" name="email"
                                value={this.state.email} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Repeat password</label><br />
                            <input id="input_text" type="password" data-length="25" name="repeatPassword"
                                value={this.state.repeatPassword} onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.onRegisterClick}>
                        Register Now
                    </button>
                    <div>{this.state.errorMsg}</div>
                </div>
            </div >
        );

    }
}

export default RegisterForm; 