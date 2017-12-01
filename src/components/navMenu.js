import React from "react";
import { Link } from "react-router-dom";
import FeedPage from "./feedComponents/feedPage";
import { clearID } from "../services/sessionStorageManipulation";
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
            <header className="header">
                <div className="outer__wrapper--menu">
                    <a href="" className="logo"><img src="../components/b-logo.png" height="40px" width="40px" alt="logo-image" /></a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
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
            </header>
        );
    }

}
export default NavMenu;