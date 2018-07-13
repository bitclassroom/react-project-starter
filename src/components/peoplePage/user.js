import React from "react";
import PropTypes from "prop-types";
import { IMAGE_PLACEHOLDER } from "../../constants";
import { Link } from "react-router-dom";


const User = (props) => {
    const imagePlaceholder = IMAGE_PLACEHOLDER;

    const showUserImage = () => {

        if (!props.user.avatarUrl) {
            return <img src={imagePlaceholder} />;
        }
        return <img src={props.user.avatarUrl} />;

    };

    return (
        <div className="col-12 user">
            <div className="row">
                <div className="col-2 offset-1">
                    {showUserImage()}
                    {/* <img src={props.user.avatarUrl} /> */}
                </div>
                <div className="col-6">
                    <h4> {props.user.name}</h4>
                    <div>{props.user.aboutShort}</div>
                    <p className="btn btn-light"><Link to={`/people/${props.user.id}`}>Find out more</Link></p>
                </div>
                <div className='col-3 '>
                    Last post at: {new Date(props.user.lastPostDate).toLocaleTimeString()}
                </div>
            </div>
        </div>

    );


};


User.propTypes = {
    user: PropTypes.object,


};
export default User;