import React from "react";
import dataObj from "../../services/dataService";
import PeoplePreview from "./peoplePreview";
import {Link} from "react-router-dom";
class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats(){
        this.success = this.success.bind(this);
    }
    initialState(){
        return {
            pplArray: []
        };
    }
    success(a){
        this.setState({
            pplArray : a
        });
    }
    fail(a){
        console.log(a);
    }
    componentDidMount(){
        dataObj.getPeople(this.success, this.fail);
    }
    render() {
        const {pplArray} = this.state;
        return(
            <div>
                <input placeholder="Search User" className="form-control"/>
                {pplArray.map((prs) => (
                
                    <Link to= {`/profilePagee/:${prs.id}`} onClick={()=>{sessionStorage.setItem("truc", prs.id);}} key={prs.id}>
                        <PeoplePreview person={prs}  />);
                    </Link>
                )
                )}            
            </div>
        );
    }

}

export default PeoplePage;