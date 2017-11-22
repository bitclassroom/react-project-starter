import React from "react";

import AuthenticationService from "../services/authenticationService";
import Dashboard from "./dashboard";
import LoginPage from "./loginComponents/loginPage";
import MainPage from "./mainPage";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.authenticationService = new AuthenticationService();
    }



    render() {
        if (this.authenticationService.isAuthenticated()) {
            return (
                <div>
                    <MainPage />
                </div>
            );
        }
        else {
            return (
                <div>
                    <LoginPage />
                </div>
            );
        }




    }
}

export default App;
