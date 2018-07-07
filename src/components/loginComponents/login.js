import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.changeState = this.changeState.bind(this);
    }
    initialState() {
        return {
            email: "",
            password: ""
        };
    }

    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }
    render() {
        console.log(this.state);
       
        return (
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

                                    <input name="email" type="text" value={this.state.email} placeholder="E-mail" onChange={this.changeState}   />
                                </div>
                                <div className="field-wrap">

                                    <input name="password" type="text" value={this.state.password} placeholder="Password" onChange={this.changeState} />
                                </div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}




export default Login;