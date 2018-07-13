import React from "react";
import Header from "./header";
import Footer from "./footer";
import ProfilePage from "../profile/profilePage";
import { Switch, Route } from "react-router-dom";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route path="/profile" component={ProfilePage} />
                </Switch>
                
                <Footer />
            </div>
        );
    }
};

export default MainPage;