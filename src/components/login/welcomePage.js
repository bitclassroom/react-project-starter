import React from "react";
import AuthenticationService from "../../services/authenticationService";
import { Switch, Redirect, Route } from "react-router-dom";
import LoginPage from "./loginPage";
import RegisterForm from "./registerForm";


class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.AuthenticationService = new AuthenticationService();
    }
    render() {
        if (this.AuthenticationService.isUserAuthenticated()) {
            return (
                <Switch>
                    <Redirect from="/loginPage" exact to="/" />
                    <Route path="/" component={MainPage} />
                </Switch>
            );

        }
        return (
            <div>
                <Switch>
                    <Redirect from="/" exact to='/loginPage' />
                    <Route path="/loginPage" component={LoginPage} />
                    <Route path="/registerForm" component={RegisterForm} />
                </Switch>

            </div>
        );




    }
};

export default WelcomePage;