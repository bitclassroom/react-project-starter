import React from "react";
import dataObj from "../services/dataService";
import { Link } from "react-router-dom";
import EditProfile from "./modalEditProfile";
import PropTypes from "prop-types";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.toggleModal = this.toggleModal.bind(this);
        this.getProfileSucces = this.getProfileSucces.bind(this);
    }
    initialState() {
        return {
            isOpen: false,
            name: "Nicolas Cage",
            picture: "profile.png",
        };
    }
    componentDidMount(nextProps) {
        dataObj.getProfile(this.getProfileSucces, this.getProfileFail);
    }
    getCool(obj) {



    }
    getError(a) {
        console.log(a);
    }
    getProfileSucces(a) {
        this.setState({
            name: a.name,
            picture: a.avatarUrl || "profile.png",
            about: a.about,
            aboutShort: a.aboutShort,
            commentsCount: a.commentsCount,
            postsCount: a.postsCount,
            id: a.userId
        });

    }
    getProfileFail(a) {
        console.log(a);
        console.log("FAIL");
    }
    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        const { name, picture, about, postsCount, commentsCount, aboutShort, id } = this.state;

        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="profile-container">
                            <div className="inner__wrapper--left">
                                <div className="img-container">
                                    <img src={picture} />
                                </div>
                            </div>
                            <div className="inner__wrapper--right">
                                <h2>{name}</h2>
                                <button className="btn" onClick={this.toggleModal}>
                                    Edit profile
                                </button>
                                <EditProfile
                                    obj={this.state}
                                    show={this.state.isOpen}
                                    onClose={this.toggleModal}>

                                </EditProfile>
                                <p><mark className="mark2">About You:</mark></p>
                                <p>
                                    {about}
                                </p>
                                <p><mark className="mark2">Key Interests:</mark></p>
                                <p>
                                    {aboutShort}
                                </p>
                                <p><mark>Post count: {postsCount}</mark></p>
                                <p><mark>Comments count: {commentsCount}</mark></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ProfilePage.propTypes = {
    match: PropTypes.object
};
export default ProfilePage;