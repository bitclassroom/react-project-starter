import React from "react";
import Welcome from "./welcome";
import Login from "./login";
import Register from "./register";

import { Switch, Route, Redirect } from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row container ">
                <Welcome />
                <Switch>
                    <Redirect  exact from='/' to="/login" />
                    <Route  path='/login' component={Login} />
                    <Route  path='/register' component={Register} />
                </Switch>
            </div>

        );
    }
}

export default LoginPage;
