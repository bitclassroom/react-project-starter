import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import EntryPage from "./entryPage/entryPage";
import MainFeed from "./mainFeed/mainFeed";

import AuthenticationService from "../services/authenticationService";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.auth = new AuthenticationService();
    }

    render() {
        if (!this.auth.isUserAuthenticated()) {
            return (
                <div className="container">
                    <Switch>
                        <Redirect exact from='/' to='/login' />
                        <Route path='/login' component={EntryPage} />
                        <Route path='/register' component={EntryPage} />
                    </Switch>
                </div>
            );
        }

        return (
            <MainFeed  />
        );
    }
}

export default App;
