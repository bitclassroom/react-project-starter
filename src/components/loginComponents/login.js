import React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
        this.state = this.initialState();
        this.changeState = this.changeState.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
    }
    initialState() {
        return {
            username: "",
            password: ""
        };
    }

    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    onClickLogin(event) {

        event.preventDefault();
        let dataObj = {
            username: this.state.username,
            password: this.state.password

        };

        this.authentication.login(dataObj);
    }

    render() {


        return (
            <div className="body-class">
                <div className="outer__wrapper">
                    <div className="inner__wrapper--left">
                        <div className="h1__main-page">
                            <h1>WELCOME TO BITBOOK</h1>
                        </div>
                        <div className="p__main-page">
                            <p>
                                Random text Random text. Random text Random text. Random text Random text
                            Random text Random text. Random text Random text. Random text Random text
                            Random text Random text. Random text Random text. Random text Random text
                            Random text Random text. Random text Random text. Random text Random text
                            </p>
                        </div>
                    </div>
                    <div className="inner__wrapper--right">
                        <div className="col-12 navigation">
                            <div>
                                <ul className="tab-group">
                                    <li className="tab active"><Link to="/login">Login</Link></li>
                                    <li className="tab active"><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                            <form className="form">
                                <div className="top-row">
                                    <div className="field-wrap">

                                        <input name="username" type="text" value={this.state.username} placeholder="Username" onChange={this.changeState} />
                                    </div>
                                    <div className="field-wrap">

                                        <input name="password" type="text" value={this.state.password} placeholder="Password" onChange={this.changeState} />
                                    </div>
                                    <button onClick={this.onClickLogin} type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Login;