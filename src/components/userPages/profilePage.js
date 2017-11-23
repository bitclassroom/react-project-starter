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
            posts: ""
        };

        this.getData = new DataService();
        this.redirect = new RedirectionService();

        this.initBind();
    }

    initBind() {
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    afterOpenModal() {
        this.subtitle.style.color = "#f00";
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
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
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default UserProfile;