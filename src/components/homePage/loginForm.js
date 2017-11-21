import React from "react";
import {Link} from "react-router-dom";




class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
        console.log(event.target.value);
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        console.log(event.target.value);
    }

    handleLogin(event) {
        let data = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(data);
        // this.props.onLogin(data);
    }

    render() {
        return (
            <div className="loginFormDiv">
                <form className="homePageForm">
                    Email<input type="email" onChange={this.handleEmailChange} /><br />
                    Password<input type="password" onChange={this.handlePasswordChange} /><br />
                    <input type="button" onClick={this.handleLogin} value="Login" />
                </form>
                <p><Link to="/registerPage">Register here</Link></p>
              
            </div>
        );
    }
}

export default LoginForm;
