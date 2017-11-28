import React from "react";
import dataObj from "../services/dataService";
import { Link } from "react-router-dom";
import EditProfile from "./modalEditProfile";
import PropTypes from "prop-types";
import Modal from "react-modal";
// MainPage = Feed Page

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
                            <div className="img-container">
                                <img src={picture} />
                            </div>
                            <h2>{name}</h2>
                            <button onClick={this.toggleModal}>
                                Edit profile
                            </button>
                            <EditProfile
                                obj={this.state}
                                show={this.state.isOpen}
                                onClose={this.toggleModal}>

                            </EditProfile>
                            <p>About You:</p>
                            <p>
                                {about}
                            </p>
                            <p>Key Interests:</p>
                            <p>
                                {aboutShort}
                            </p>
                            <span>Post count: {postsCount} </span>
                            <span>Comments count: {commentsCount} </span>
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