import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import DataService from "../../services/dataService";
import RedirectionService from "../../services/redirectionService";

const imgStyle = {
    borderRadius: "50px",
    width: "60%",
    margin: "10px auto",
    padding: "10px",
    border: "1px solid rgba(178,215,251,0.2)",
    boxShadow: "-12px 11px 34px -1px rgba(44,62,80,0.34)"


};

const cardStyle = {
    width: "70%px",
    padding: "20px",
    margin: "60px 0",
    textAlign: "center",
    borderRadius: "10px 130px 10px 130px",
    backgroundColor: "rgba(116, 162, 208, 0.2)",
    boxShadow: "-12px 11px 34px -1px rgba(44,62,80,0.34)"
};

const loginStyle = {
    transitionProperty: "width",
    transitionDuration: "0.5s",
    transitionTimingFunction: "linear"
};

const modalStyle = {
    content: {
        height: "90%", 
        overlfow: "scroll",
        backgroundImage: "url(https://wallpaperlayer.com/img/2015/6/gaussian-blur-wallpaper-3225-3429-hd-wallpapers.jpg)"
    }
   
};

const modalCardStyle = {
    backgroundColor: "rgba(116, 162, 208, 0.3)",
    padding: "60px 30px 30px 30px",
    margin: "40px 0",
    borderRadius: "10px 10px 10px 10px",
    positon: "relative"
};

const updateButtonStyle = {
    transition: "width 0.5s",
    transitionTimingFunction: "linear"
};

const nameStyle = {
    textAlign: "center",
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
            email: "",
            posts: "",
            newName: "",
            newAbout: "",
            newAboutShort: "",
            newEmail: "",
            newAvatarUrl: "",
            error: "",
            isThereError: false
        };

        this.getData = new DataService();
        this.redirect = new RedirectionService();

        this.initBind();
    }

    initBind() {
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.collectNewAbout = this.collectNewAbout.bind(this);
        this.collectNewName = this.collectNewName.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.collectNewAboutShort = this.collectNewAboutShort.bind(this);
        this.collectNewEmail = this.collectNewEmail.bind(this);
        this.collectNewAvatarUrl = this.collectNewAvatarUrl.bind(this);
    }

    componentDidMount() {
        this.getData.getProfileData((profile) => {
            this.setState({
                name: profile.name,
                avatar: profile.avatarUrl,
                about: profile.about,
                aboutShort: profile.aboutShort,
                posts: profile.postsCount,
                comments: profile.commentsCount,
                email: profile.email
            });
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    collectNewName(e) {
        const newName = e.target.value;

        this.setState({
            newName
        });
    }

    collectNewAbout(e) {
        const newAbout = e.target.value;

        this.setState({
            newAbout
        });
    }

    collectNewEmail(e) {
        const newEmail = e.target.value;

        this.setState({
            newEmail
        });
    }

    collectNewAboutShort(e) {
        const newAboutShort = e.target.value;

        this.setState({
            newAboutShort
        });
    }

    collectNewAvatarUrl(e) {
        const newAvatarUrl = e.target.value;

        this.setState({
            newAvatarUrl
        });
    }

    updateProfile() {
        let newName;
        let newAbout;
        let newAvatarUrl;
        let newAboutShort;
        let newEmail;

        this.state.newName ? newName = this.state.newName : newName = this.state.name;
        this.state.newAbout ? newAbout = this.state.newAbout : newAbout = this.state.about;
        this.state.newAvatarUrl ? newAvatarUrl = this.state.newAvatarUrl : newAvatarUrl = this.state.avatar;
        this.state.newAboutShort ? newAboutShort = this.state.newAboutShort : newAboutShort = this.state.aboutShort;
        this.state.newEmail ? newEmail = this.state.newEmail : newEmail = this.state.email;

        const newProfileData = {
            name: newName,
            about: newAbout,
            aboutShort: newAboutShort,
            avatarUrl: newAvatarUrl,
            email: newEmail
        };

        this.getData.updateProfileData(newProfileData, (error) => {
            console.log(error);
            this.setState({
                isThereError: true,
                error: error.response.status
            });
        });

    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className=" mx-auto">

                        <div className="card " style={cardStyle}>

                            <img src={this.state.avatar} className="card-img-top" style={imgStyle} />
                            <div className="card-block">
                                <h2 className="card-title profileName ">{this.state.name}</h2>
                                <input type="button" id="editProfileData" onClick={this.openModal} value="Edit Profile" className="btn btn-info btn-lg loginProfileButton " style={loginStyle} />
                                <p className="card-text">{this.state.aboutShort}</p>
                                <p className="card-text">{this.state.about}</p>
                                <button className="btn btn-success btn-lg profileButton">Posts: {this.state.posts}</button>
                                <button className="btn btn-success btn-lg profileButton">Comments:  {this.state.comments}</button>

                            </div>

                        </div>

                    </div>


                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                
                    style={modalStyle}
                >   
                    
                    <nav className="navbar navbar-expand-lg navbar-light modalNavColor">
                        <h2 className="updateProfileHeading">Update Profile</h2>
                    </nav>

                    <div className="row">
                        <div className="col-2">
                        </div>
                        <div className="col" style={modalCardStyle} >

                            <form>
                                <div>
                                    <input type="text" value={this.state.newName} onChange={this.collectNewName} placeholder="Please enter a new name" className="updateProfileForm form-control form-control-lg" />
                                    <input type="email" value={this.state.newEmail} onChange={this.collectNewEmail} placeholder={`Current email: ${this.state.email}`} className="updateProfileForm form-control form-control-lg" />
                                    <input type="text" value={this.state.newAboutShort} onChange={this.collectNewAboutShort} placeholder="Please enter a short description" className="updateProfileForm form-control form-control-lg" />
                                    <input type="text" value={this.state.newAvatarUrl} onChange={this.collectNewAvatarUrl} placeholder="Please enter new avatar url" className="updateProfileForm form-control form-control-lg" />
                                </div>
                                <textarea value={this.state.newAbout} onChange={this.collectNewAbout} placeholder="Please tell us something about yourself" rows="5" className="updateProfileForm form-control"></textarea>
                                <input type="button" value="Update" onClick={this.updateProfile} className="updateProfileUpdateButton btn btn-info btn-lg" style={updateButtonStyle} />
                                <input type="button" value="Close" onClick={this.closeModal} className="updateProfileCloseButton btn btn-success btn-lg" style={updateButtonStyle} />
                                <p>{this.state.isThereError ? this.state.error : ""}</p>
                            </form>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default UserProfile;