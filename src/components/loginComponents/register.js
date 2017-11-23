import React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";
import validateEmail from "../../services/validateEmail";
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.onClickRegister = this.onClickRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.serverErrorHandler = this.serverErrorHandler.bind(this);
    }
    initialState() {
        return {
            name: "",
            username: "",
            email: "",
            password1: "",
            password2: "",
        };
    }
    handleChange(event) {


        this.setState({
            [event.target.name]: event.target.value,
            badName: "",

            badUsername: "",

            badEmail: "",
            badPass: "",
            badSecondPass: "",
            badName: ""
        });

    }

    serverErrorHandler(e) {


        this.setState({
            badUsername: e.response.data.error.message
        });

    }
    onClickRegister(event) {
        const { username, name, email, password1, password2 } = this.state;

        event.preventDefault();

        if (name === "") { this.setState({ badName: "This field is required" }); return; }
        if (username === "") { this.setState({ badUsername: "This field is required" }); return; }

        if (!validateEmail(email)) { this.setState({ badEmail: "Email address is bad!" }); return; }
        if (password1.length < 6) { this.setState({ badPass: "Password must be at least 6 characters long" }); return; }
        if (password1 === password2) {
            let dataObj = {
                "username": username,
                "password": password1,
                "name": name,
                "email": email
            };

            this.authentication.register(dataObj, this.serverErrorHandler);
        }
        else {
            this.setState({ badSecondPass: "Passwords do not match" });
        }

    }
    render() {



        const { name, email, password1, password2, username, badEmail, badPass, badSecondPass, badUsername, badName } = this.state;


        return (
            <div className="body-class">
                <div className="outer__wrapper">
                    <div className="inner__wrapper--left">
                        <div className="h1__main-page">
                            <h1>REGISTER TO BITBOOK</h1>
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
                                        <input name="name" type="text" value={name} onChange={this.handleChange} placeholder="Name" />
                                    </div>
                                    <div style={{ "color": "red" }} >{badName}</div>
                                    <div className="field-wrap">
                                        <input name="username" type="text" value={username} onChange={this.handleChange} placeholder="Username" />
                                    </div>
                                    <div style={{ "color": "red" }}>{badUsername}</div>
                                    <div className="field-wrap">
                                        <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="E-mail" />
                                        <div style={{ "color": "red" }}> {badEmail} </div>
                                    </div>
                                    <div className="field-wrap">
                                        <input name="password1" type="password" value={password1} onChange={this.handleChange} placeholder="Password" />
                                    </div>
                                    <div style={{ "color": "red" }}> {badPass} </div>
                                    <div className="field-wrap">
                                        <input name="password2" type="password" value={password2} onChange={this.handleChange} placeholder="Repeat password" />
                                    </div>
                                    <div style={{ "color": "red" }}> {badSecondPass} </div>
                                    <button className="form-btn" onClick={this.onClickRegister} type="submit">Register</button>


                                </div>
                                <div className="field-wrap">

                                    <input name="password1" type="text" value={password1} onChange={this.handleChange} placeholder="Password" />
                                </div>
                                <div style={{ "color": "red" }}> {badPass} </div>
                                <div className="field-wrap">

                                    <input name="password2" type="text" value={password2} onChange={this.handleChange} placeholder="Repeat password" />
                                </div>
                                <div style={{ "color": "red" }}> {badSecondPass} </div>
                                <button onClick={this.onClickRegister} type="submit">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Register;