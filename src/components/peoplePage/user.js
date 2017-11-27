import React from "react";
import PropTypes from "prop-types";
// import { IMAGE_PLACE_HOLDER } from "../../constants";
import { Link } from "react-router-dom";


const User = (props) => {
    // const imagePlaceHolder = IMAGE_PLACE_HOLDER;
    // props.avatarUrl = imagePlaceHolder;
    return (
        <div className="col-12 user">
            <div className="row">
                <div className="col-2 offset-1">
                    <img src={props.avatarUrl} />
                </div>
                <div className="col-9">
                    <h4> {props.name}</h4>
                    <div><span>About</span>{props.about}</div>
                    <p className="btn btn-light"><Link to={`/people/${props.id}`}>Find out more</Link></p>
                </div>
            </div>
        </div>

    );


};


User.propTypes = {
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    about: PropTypes.string,
    id: PropTypes.number

};
export default User;