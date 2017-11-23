import React from "react";
import Login from "./login";
import Register from "./register";
import MainPage from "../mainPage";
import { Switch, Route } from "react-router-dom";
import App from "../app";
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default LoginPage;