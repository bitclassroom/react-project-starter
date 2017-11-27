import React from "react";
import DataService from "../../services/dataService";
import User from "./user";
import Search from "./../common/searchInput";

class People extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.dataService = new DataService();
        this.searchUserByName = this.searchUserByName.bind(this);
    }
    componentDidMount() {
        this.dataService.getUsers((users) => {
            this.setState({
                users: users
            });
        });
    }

    
    searchUserByName(nameOfUser) {
        let filterUsers = [];
        if (nameOfUser === "") {
            return;
        } else {
            this.state.users.forEach(element => {
                if (element.name.includes(nameOfUser)) {
                    filterUsers.push(element);
                }
            });

            this.setState({ users: filterUsers });

        }
    }
    render() {
        let userList = this.state.users;
        return (
            <div className="container">
                <div className="row">
                    <Search useSearchString={this.searchUserByName} />
                    {userList.map((element) => <User name={element.name} avatarUrl={element.avatarUrl} about={element.about} key={element.id} id={ element.id}/>)}
                </div>
            </div>     

        );
    }
}

export default People;