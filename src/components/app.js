import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
                    <MainPage  />
                </div>
            );
        }
        else {
            return (
               
                <Switch>
                    <Redirect exact from="/" to="/login" /> 
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={LoginPage} />
                    
                </Switch>
            );
        }




    }
}

export default App;
