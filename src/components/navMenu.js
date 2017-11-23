import React from "react";

class NavMenu extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#" src="">HOME</a>
                        </li>
                        <li>
                            <a href="#" src="">PROFILE</a>

                        </li>
                        <li>
                            <a href="#" src="">POSTS</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

}
export default NavMenu;