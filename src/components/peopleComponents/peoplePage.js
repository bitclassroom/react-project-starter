import React from "react";
import dataObj from "../../services/dataService";
import PeoplePreview from "./peoplePreview";
import { Link } from "react-router-dom";
class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }

    handleChange(event){
        var niz = this.state.pplArray;
        var niz1 = this.state.pplArray2;
        niz= niz1.filter(this.filterPpl, event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
            pplArray:niz
        });
       

    }
    filterPpl(prs){
        if(prs.name.toLowerCase().includes(this.toLowerCase())) return prs;
    }

    bindThisAndThats(){
        this.success = this.success.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    initialState() {
        return {
            searchText: "",
            pplArray: [],
            pplArray2: []
        };
    }
    success(a) {
        this.setState({
            pplArray : a,
            pplArray2 : a
        });
    }
    fail(a) {
        console.log(a);
    }
    componentDidMount() {
        dataObj.getPeople(this.success, this.fail);
    }
    render() {
        const { pplArray } = this.state;
        
        return (
            <div className="profile">
                <div className="outer__wrapper--peoplePreview">
                    <div>
                        <input placeholder="Search User" name="searchText" onChange={this.handleChange} value={this.state.searchText} className="form-control"/>
                        <div className="people__avatars">
                            {pplArray.map((prs) => (

                                <Link to={`/profilePagee/:${prs.id}`} onClick={() => sessionStorage.setItem("truc", prs.id)} key={prs.id}>
                                    <PeoplePreview person={prs} />
                                </Link>
                            )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PeoplePage;