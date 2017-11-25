import React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";
import { redirect } from "../redirect";
import {setID} from "../../services/sessionStorageManipulation";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
        this.state = this.initialState();
        this.bindThisAndThats();
    }      
        
    bindThisAndThats(){
        this.changeState = this.changeState.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.failLogin = this.failLogin.bind(this);
    }
    initialState() {
        return {
            username: "",
            password: ""
        };
    }

    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value,
            badUsernameOrPassword: ""
        });
    }
    
    successLogin(a) {
        setID (a.sessionId);
        redirect("/");
    }
    failLogin(e) {
        this.setState({
            badUsernameOrPassword: e.response.data.error.message
        });
    }

    onClickLogin(event) {
        const {username, password} = this.state;
        event.preventDefault();
        if( username === "" || password === ""){
            this.setState({
                badUsernameOrPassword: "These fields must not be empty"
            });
            return;
        }
        let dataObj = {
            "username": username,
            "password": password
        };
        this.authentication.login(dataObj, this.successLogin, this.failLogin);
    }
    // onKeyDown(event) {
    //     event.preventDefault();
    //     if (event.keyCode = "13") {
            
    //         let dataObj = {
    //             username: this.state.username,
    //             password: this.state.password

    //         };

    //         this.authentication.login(dataObj);
    //     }

    // }

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
                            Beogradski institut za tehnologiju – BIT je škola za programiranje osnovana u Beogradu, s ciljem da svoje polaznike uči praktičnim i primenljivim znanjima u IT industriji. Tehnički deo programa je FrontEnd Stack, najčešće tražen od strane poslodavaca. Pored tehničkog obrazovanja, u BITu se uči i kako funkcioniše IT industrija i kako pronaći svoje mesto u njoj.
                            </p>
                        </div>
                    </div>
                    <div className="inner__wrapper--right">
                        <div className="navigation">
                            <div>
                                <ul className="tab-group">
                                    <li className="tab active"><Link to="/login">Login</Link></li>
                                    <li className="tab active2"><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                            <form className="form">
                                <div className="top-row">
                                    <div className="field-wrap">

                                        <input name="username" className="form-control" required type="text" value={this.state.username} placeholder="Username" onChange={this.changeState} />
                                    </div>
                                    <div style={{ "color": "red" }}>{this.state.badUsernameOrPassword}</div>

                                    <div className="field-wrap">

                                        <input type="password" name="password" className="form-control" required value={this.state.password} placeholder="Password" onChange={this.changeState} />
                                    </div>
                                    <button className="form-btn" onClick={this.onClickLogin} type="submit">Login</button>
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