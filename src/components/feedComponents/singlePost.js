import React from "react";
import PropTypes from "prop-types";

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div style={{
                "width": 300,
                "height": 150
            }}>

                <p>{this.props.post.text}</p>
                <span style={{
                    "float": "left"
                }}> {this.props.post.type}</span>
                <span style={{
                    "float": "right"
                }}>{this.props.post.id}</span>
            </div>

        );
    }
}
SinglePost.propTypes = {
    post: PropTypes.object,
    text: PropTypes.string,
    id: PropTypes.number

};

export default SinglePost;