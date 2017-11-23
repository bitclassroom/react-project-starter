import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import DataService from "../../services/dataService";
import RedirectionService from "../../services/redirectionService";

const imgStyle = {
    height: "300px",
    border: "1px solid black",
    borderRadius: "150px",
    margin: "0 auto",
    marginTop: "30px"
};

const profileStyle = {
    float: "none",
    margin: "0 auto",
    maxWidth: "500px",
    border: "1px solid black",
    textAlign: "center",
    position: "relative"
};

const nameStyle = {
    textAlign: "center",
    color: "red"
};

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            modalIsOpen: false,
            avatar: "",
            about: "",
            aboutShort: "",
            comments: 0,
            posts: "",
            newName: "",
            newAbout: ""
        };

        this.getData = new DataService();
        this.redirect = new RedirectionService();

        this.initBind();
    }

    initBind() {
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.collectNewAbout = this.collectNewAbout.bind(this);
        this.collectNewName = this.collectNewName.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
    }

    componentDidMount() {
        this.getData.getProfileData((profile) => {
            this.setState({
                name: profile.name,
                avatar: profile.avatarUrl,
                about: profile.about,
                aboutShort: profile.aboutShort,
                posts: profile.postsCount,
                comments: profile.commentsCount
            });
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    collectNewName(e){
        const newName = e.target.value;

        this.setState({
            newName
        });
    }

    collectNewAbout(e){
        const newAbout = e.target.value;

        this.setState({
            newAbout
        });
    }

    updateProfile(){
        const newProfileData = {
            newName: this.state.newName,
            newAbout: this.state.newAbout
        };
        this.getData.updateProfileData(newProfileData, this.errorHandler);

    }

    errorHandler(error){
        alert("ERROR");
    }

    render() {
        return (
            <div style={profileStyle}>
                <div className="row">
                    <img src={this.state.avatar} style={imgStyle} />
                </div>

                <div className="" style={nameStyle}>
                    <h2>{this.state.name}</h2>
                </div>

                <div>
                    <p>{this.state.aboutShort}</p>
                    <p>{this.state.about}</p>
                </div>

                <div className="">
                    <button>Posts: {this.state.posts}</button>
                    <button>Comments:  {this.state.comments}</button>
                </div>

                <br />

                <input type="button" id="editProfileData" onClick={this.openModal} value="Edit Profile" />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <h2>Update Profile</h2>
                    <form>
                        <div>
                            <p>Name </p>
                            <input type="text" value={this.state.newName} onChange ={this.collectNewName} placeholder="Please enter a new name"/>
                        </div>
                        <textarea value={this.state.newAbout} onChange={this.collectNewAbout} placeholder="Please tell us something about yourself" rows="5"></textarea>
                        <input type="button" value="Update" onClick={this.updateProfile} />
                        <input type="button" value="Close" onClick={this.closeModal} />
                    </form>
                </Modal>
            </div>
        );
    }
}

export default UserProfile;