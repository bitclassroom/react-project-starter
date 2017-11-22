import React from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationService";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.authentication = new AuthenticationService();
        this.state = this.initialState();
        this.onClickRegister = this.onClickRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    initialState() {
        return {
            name: "",
            email: "",
            password: ""

        };
    }
    handleChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        });
        
    }
    onClickRegister(event){
        event.preventDefault();
        let dataObj = {
            username: this.state.name,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email

        };

        this.authentication.register(dataObj);
    }
    render() {
       
        const { name, email, password } = this.state;

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
                                   
                                    <input name="name" type="text" value={name} onChange={this.handleChange} placeholder="Name"  />
                                </div>
                                <div className="field-wrap">
                                   

                                    <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="E-mail"/>
                                </div>
                                <div className="field-wrap">
                                    
                                    <input name="password" type="text" value={password} onChange={this.handleChange} placeholder="Password"/>
                                </div>
                                <button onClick={this.onClickRegister}type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}




export default Register;