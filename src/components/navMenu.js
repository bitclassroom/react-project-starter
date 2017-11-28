import React from "react";
import { Link } from "react-router-dom";
import FeedPage from "./feedComponents/feedPage";
import {clearID} from "../services/sessionStorageManipulation";
// import PostPage from "./postPage";
import ProfilePage from "./profilePage";


class NavMenu extends React.Component {
    constructor(props) {
        super(props);

    }
    logout() {
        clearID();
    }

    render() {

        return (
            <header>
                <nav>

                    <div className="logo-img">
                        <img src="../services/b-logo.png" height="38px" width="36px" alt="logo-image" />
                    </div>
                    <div className="navigation-menu">
                        <ul>
                            <li>
                                <Link to="/feedPage">
                                     FEED
                                </Link>
                            </li>
                            <li>
                                <Link to="/profilePage/">
                                   PROFILE
                                </Link>
                            </li>
                            <li>
                                <Link to="/peoplePage">
                                    PEOPLE
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