import React from "react";
import { Link } from "react-router-dom";

import FetchDataService from "../../services/fetchDataService";
import AuthenticationService from "../../services/authenticationService";
import RedirectionService from "../../services/redirectService";
import ErrorHandlerService from "../../services/errorHandlerService";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMsg: ""
        };
        this.importClasses();
        this.bindFunction();
    }

    importClasses() {
        this.dataService = new FetchDataService();
        this.errorHandlerService = new ErrorHandlerService();
        this.authenticationService = new AuthenticationService();
        this.redirectionService = new RedirectionService();
    }

    bindFunction() {
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });

    }

    handleClick() {

        const data = {
            username: this.state.username,
            password: this.state.password
        };

        const msg = this.errorHandlerService.validateLogInForm(data);
        this.setState({ errorMsg: msg });

        if (msg) {
            return;
        } else {
            this.authenticationService.logIn(data, (success) => {
                this.redirectionService.redirect("/");

            }, (errorMsg) => {
                this.setState({ errorMsg: errorMsg });
            });
        }
    }

    render() {
        return (
            <div className="row">

                <div className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Username </label> <br />
                            <input id="input_text" type="text" data-length="25" name="username"
                                value={this.state.username} onChange={this.handleChange}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Password </label><br />
                            <input id="input_text" type="text" data-length="25" name="password"
                                value={this.state.password} onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.handleClick}>
                        Login
                    </button>< br />
                    <div>{this.state.errorMsg}</div>
                </div>
            </div>
        );

    }
}

export default LoginForm; 