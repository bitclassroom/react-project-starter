import React, { Component } from "react";
import DataService from "../../services/dataService";

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };

        this.getData = new DataService();
    }

    componentDidMount() {
        this.getData.getProfileData((data) => {
            console.log(data);
            this.setState({
                name: data.data.name
            });
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                PROFILES
            </div>
        );
    }
}

export default UserProfile;