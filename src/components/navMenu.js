import React from "react";
import { Link } from "react-router-dom";
import MainFeedPage from "./mainFeedPage";
// import PostPage from "./postPage";
import ProfilePage from "./profilePage";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);

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
                                    <a href="#" src=""><i className="fa fa-home" aria-hidden="true"></i> FEED</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profilePage">
                                    <a href="#" src="">PROFILE</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/postPage">
                                    <a href="#" src="">POSTS</a>
                                </Link>
                            </li>
                            <li>
                                <a href="#" src=""><i className="fa fa-sign-out" aria-hidden="true"></i> LOGOUT</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }

}
export default NavMenu;