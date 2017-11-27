import React from "react";
import PropTypes from "prop-types";

class PeoplePreview extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <div style={{
                "display": "inline-block",
                "width" : 100,
                "height" : 100
            }}>
                
                <span>{this.props.person.name}</span>
                <img src={this.props.person.avatarUrl} style={{
                    "width" : "50%",
                    "height" : "50%"
                }}/>
            </div>
            
        );
    }
}
PeoplePreview.propTypes = {
    person: PropTypes.object,
    key: PropTypes.number,
    id: PropTypes.number
};

export default PeoplePreview;