import React, { Component } from "react";
import DataService from "../../services/dataService";

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
    textAlign: "center"
};

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            avatar: "",
            about: "",
            aboutShort: "",
            comments: 0,
            posts: ""
        };

        this.getData = new DataService();
    }

    componentDidMount() {
        this.getData.getProfileData((data) => {
            console.log(data);
            this.setState({
                name: data.data.name,
                avatar: data.data.avatarUrl,
                about: data.data.about,
                aboutShort: data.data.aboutShort,
                posts: data.data.postsCount,
                comments: data.data.commentsCount
            });
        });
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

            </div>
        );
    }
}

export default UserProfile;