import React from "react";
import dataObj from "../../services/dataService";
import { Link } from "react-router-dom";
import Login from "../loginComponents/login";
import PropTypes from "prop-types";
import { redirect } from "../../services/redirect";

// MainPage = Feed Page

class OnePpl extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        
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
        
        dataObj.getAnyProfile(sessionStorage.getItem("truc"),this.getProfileSucces, this.getProfileFail);
    }
    getProfileSucces(a) {
        if(!a){return;}
        this.setState({
            name: a.name,
            picture: a.avatarUrl || "profile.png",
            about: a.about,
            aboutShort: a.aboutShort,
            commentsCount: a.commentsCount,
            postsCount: a.postsCount,
            id : a.userId
        });
        
    }
    getProfileFail(a) {
        console.log(a);
        console.log("FAIL");
    }
    
    checkID(response){
        const truc = sessionStorage.getItem("truc");
        if(truc == response.userId){
            redirect("/#/profilePage/");
            sessionStorage.removeItem("truc");
        }
        sessionStorage.removeItem("truc");
    }
    render() {
        const { name, picture, about, postsCount, commentsCount, aboutShort, id} = this.state;
        dataObj.getProfile(this.checkID);
        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="profile-container">
                            <div className="img-container">
                                <img src={picture} />
                            </div>
                            <h2>{name}</h2>
                            
                            

                            
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

export default OnePpl;