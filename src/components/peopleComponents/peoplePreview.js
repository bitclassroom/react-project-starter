import React from "react";
import PropTypes from "prop-types";

class PeoplePreview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="peoplePageElementWrapper">
                <span>{this.props.person.name}</span>
                <img src={this.props.person.avatarUrl} style={{
                }} />
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