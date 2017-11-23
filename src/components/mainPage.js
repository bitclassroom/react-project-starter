import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMenu from "./navMenu";
import MainFeedPage from "./mainFeedPage";
import ProfilePage from "./profilePage";
import PostPage from "./postPage";


class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={MainFeedPage} />
                    <Route path="/mainFeedPage" component={MainFeedPage} />
                    <Route path="/profilePage" component={ProfilePage} />
                    <Route path="/postPage" component={PostPage} />
                </Switch>
            </div>
        );
    }

}
export default MainPage;