import React from "react";
import LogOutButton from "../common/logOutButton";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Bitbook</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/profile">Profile<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
                <LogOutButton />
            </div>
        </div>




    );
};

export default Header;