import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import EditProfile from "./editProfile";
import ReactModal from "react-modal";
import Profile from "../../entities/profileDTO";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.imagePlaceHolder = IMAGE_PLACE_HOLDER;

        this.state = {
            name: "",
            avatarUrl: "",
            commentsCount: "",
            postsCount: "",
            about: "",
            aboutShort: "",
            profile: null
        };

        this.dataService = new DataService();

        this.afterUpdate = this.afterUpdate.bind(this);
    }

    componentDidMount() {

        this.dataService.getProfile((profile) => {
            this.setState({
                profile: profile
            });
        });
    }

    afterUpdate() {
        this.componentDidMount();
    }

    render() {
        if (!this.state.profile) {
            return <h1>loading</h1>;
        }

        return (
            <div className="container">
                <div className="row profilePage">
                    <div className='col-sm-12 col-lg-5'>
                        <img src={this.state.profile.avatarUrl} width="100%" id="slika" />
                        
                        <p><Link to="#"><button type="button" className="btn btn-primary "> Comments count:<span className="badge"> {this.state.profile.commentsCount}</span></button></Link></p>
                        <p><Link to="#"> <button type="button" className="btn btn-secondary"> Posts count:{this.state.profile.postsCount}</button></Link></p>

                        <EditProfile profileObject={this.state.profile} profileUpdated={this.afterUpdate} />
                    </div>
                    <div className='col-sm-12 col-lg-7'>
                        <h3>{this.state.profile.name}</h3>
                        <p className='shortAbout'>{this.state.profile.aboutShort}</p>
                        <p>{this.state.profile.about}</p>
                    </div>
                </div >
            </div >
        );
    }
}

export default ProfilePage; 