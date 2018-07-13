import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import EditProfile from "./editProfile";
import ReactModal from "react-modal";

class ProfilePage extends React.Component {
    
    constructor(props) {
        super(props);
        this.imagePlaceHolder = IMAGE_PLACE_HOLDER;
        this.state = {
            name: "",
            avatarUrl: this.imagePlaceHolder,
            commentsCount: "",
            postsCount: ""
        };
        this.dataService = new DataService();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

        this.dataService.getProfile((profile) => {

            this.setState({
                name: profile.name.charAt(0).toUpperCase() + profile.name.slice(1),
                avatarUrl: profile.avatarUrl,
                commentsCount: profile.commentsCount,
                postsCount: profile.postsCount
            });
        });
    }

    handleClick() {
       
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">

                                <div className="col-lg-4 offset-4" id="leprofile">
                                    <img src={this.state.avatarUrl} width="100px" id="slika" />
                                    <h3>{this.state.name}</h3>
                                    <p><span id="comment">Comments count:</span>{this.state.commentsCount}</p>
                                    <p><span id="post">Posts count:</span>{this.state.postsCount}</p>
                                    <EditProfile/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage; 