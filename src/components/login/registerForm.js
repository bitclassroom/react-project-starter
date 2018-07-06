import React from "react";
import AuthenticationService from "../../services/authenticationService";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            name: "",
            email: ""
        };
        this.authenticationService = new AuthenticationService();

        this.emailEntry = this.emailEntry.bind(this);
        this.passwordEntry = this.passwordEntry.bind(this);
        this.usernameEntry = this.usernameEntry.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);
        this.nameEntry = this.nameEntry.bind(this);
    }
    emailEntry(event) {
        const value = event.target.value;
        this.setState({
            email: value
        });

    };

    passwordEntry(event) {
        const value = event.target.value;
        this.setState({
            password: value
        });
    };
    usernameEntry(event) {
        const value = event.target.value;
        this.setState({
            username: value
        });
    };

    nameEntry(event) {
        const value = event.target.value;
        this.setState({
            name: value
        });
    };



    onRegisterClick() {
        const data = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        };
        this.authenticationService.register(data);

    }


    render() {
        return (
            <div className="row">
                <form className="col s12" id="form">
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Username</label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.username} onChange={this.usernameEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Password</label><br />
                            <input id="input_text" type="password" data-length="25"
                                value={this.state.password} onChange={this.passwordEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Name</label><br />
                            <input id="input_text" type="text" data-length="25"
                                value={this.state.name} onChange={this.nameEntry}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <label> Email</label><br />
                            <input id="input_text" type="email" data-length="25"
                                value={this.state.email} onChange={this.emailEntry}
                            />
                        </div>
                    </div>



                    <button className="btn btn-secondary btn-lg" type="submit" name="action" id="login" onClick={this.onRegisterClick}>
                        Register Now
                    </button>
                </form>
            </div >
        );

    }
}

export default RegisterForm; 