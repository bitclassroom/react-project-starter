import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            registerEmail: "",
            registerPass: ""
        };

        this.initBind();
    }

    initBind() {
        this.getFullName = this.getFullName.bind(this);
        this.getPasswordInput = this.getPasswordInput.bind(this);
        this.getEmailInput = this.getEmailInput.bind(this);
    }

    getFullName(event) {
        let fullName = event.target.value;

        this.setState({
            fullName
        });
        console.log(this.state.fullName);
    }

    getPasswordInput(event) {
        let registerPass = event.target.value;

        this.setState({
            registerPass
        });
    }

    getEmailInput(event) {
        let registerEmail = event.target.value;

        this.setState({
            registerEmail
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="fullName"><b>Name</b></label>
                <br />
                <input type="text" id="fullName" onChange={this.getFullName} value={this.state.fullName} placeholder="Full Name" style={{marginBottom: "5px", width: "100%"}} />
                <br />
                <label htmlFor="registerEmail"><b>Email</b></label>
                <br />
                <input type="email" id="registerEmail" onChange={this.getEmailInput} placeholder="Email Address" style={{marginBottom: "5px", width: "100%"}} />
                <br />
                <label htmlFor="registerPass"><b>Password</b></label>
                <br />
                <input type="password" id="registerPass" onChange={this.getPasswordInput} placeholder="Min 6 characters" style={{marginBottom: "15px", width: "100%"}}  />
                <br />
                <input type="button" id="registerButton" value="Register" style={{marginLeft: "83%", borderRadius: "5px", width: "80px"}} />
            </div>
        );
    }
}

export default Register;