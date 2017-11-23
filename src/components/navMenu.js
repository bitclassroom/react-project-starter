import React from "react";
import { Link } from "react-router-dom";
import MainFeedPage from "./mainFeedPage";
import comObj from "../services/communicationService";
// import PostPage from "./postPage";
import ProfilePage from "./profilePage";


class NavMenu extends React.Component {
    constructor(props) {
        super(props);

    }
    logout() {
        comObj.clearID();
       
    }

    render() {

        return (
            <header>
                <nav>

                    <div className="logo-img">
                        <img src="../services/logo-img.png" height="40px" width="38px" alt="logo-image" />
                    </div>
                    <div className="navigation-menu">
                        <ul>
                            <li>
                                <Link to="/mainFeedPage">
                                     FEED
                                </Link>
                            </li>
                            <li>
                                <Link to="/profilePage">
                                   PROFILE
                                </Link>
                            </li>
                            <li>
                                <Link to="/postPage">
                                    POSTS
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" onClick={this.logout} ><i className="fa fa-sign-out" aria-hidden="true"></i> LOGOUT</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }

}
export default NavMenu;