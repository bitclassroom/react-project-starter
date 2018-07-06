import React from "react";
import Header from "./header";
import AuthenticationService from "../../services/authenticationService";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.AuthenticationService = new AuthenticationService();

    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
};

export default MainPage;