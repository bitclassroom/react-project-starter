import React from "react";

import FetchDataService from "../../services/fetchDataService";
import AuthenticationService from "../../services/authenticationService";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.dataService = new FetchDataService();
        this.authenticationService = new AuthenticationService();

        this.usernameEntry = this.usernameEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickLogOut = this.handleClickLogOut.bind(this);
        
    }
    usernameEntry(event) {
        const usernameValue = event.target.value;
        this.setState({
            username: usernameValue
        });

    };

    passwordEntry(event) {
        const passwordValue = event.target.value;
        this.setState({
            password: passwordValue
        });
    };

    handleClick(){
        const data = {
            username: this.state.username,
            password: this.state.password
        };

        this.authenticationService.logIn(data);
        // this.dataService.post("/login",data, (response)=>{console.log(response);});
        
        
    }
    handleClickLogOut(){
        this.authenticationService.logOut();
    }


    render() {
        return (
            <div className="row">
            
                <form className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Username </label> <br /> 
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.username} onChange={this.usernameEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label className="login-form"> Password </label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.password} onChange={this.passwordEntry}
                            />
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick= {this.handleClick}>
                    Login
                    </button>< br />
                    <button className="btn btn-secondary btn-lg" type="button" name="action" id="login" onClick= {this.handleClickLogOut}>
                    LogOut
                    </button>
                </form>
            </div>
        );

    }
}

export default LoginForm; 