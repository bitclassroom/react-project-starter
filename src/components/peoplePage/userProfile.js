import React from "react";
import DataService from "../../services/dataService";
import { IMAGE_PLACE_HOLDER } from "../../constants";
import Profile from "../../entities/profileDTO";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


class UserProfile extends React.Component {

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
            id: "",
            profile: null
        };

        this.dataService = new DataService();
        this.showUserData = this.showUserData.bind(this);
    }

    componentDidMount() {
        let peopleId = this.props.match.params.id;
        this.showUserData(peopleId);
    }

    showUserData(peopleId){
        this.dataService.getUserProfile(peopleId, (response)=>{
            // console.log(response.data);
            let user = response.data;
            this.setState({
                name: user.name,
                avatarUrl: user.avatarUrl,
                commentsCount:  user.commentsCount,
                postsCount:  user.postsCount,
                about:  user.about,
                aboutShort:  user.aboutShort,
                id: user.id
            });
        });

    }

    render() {
     

        return (
            <div className="container">
                <div className="row profilePage">
                    <div className='col-5'>
                        <img src={this.state.avatarUrl} width="100%" id="slika" />
                        
                        <p><Link to="#"><button type="button" className="btn btn-primary"> Comments count: {this.state.commentsCount}</button></Link></p>
                        <p><Link to="#"> <button type="button" className="btn btn-secondary"> Posts count:{this.state.postsCount}</button></Link></p>
                    </div>
                    <div className='col-7'>
                        <h3>{this.state.name}</h3>
                        <p className='shortAbout'>{this.state.shortAbout}</p>
                        <p>{this.state.about}</p>

                    </div>
                </div >
            </div >
        );
    }
}
UserProfile.propTypes = {
    match: PropTypes.object
    
};
export default UserProfile; 