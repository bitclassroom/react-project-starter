import React from "react";
import PropTypes from "prop-types";

class NewImagePost extends React.Component {
    constructor(props) {
        super(props);
        this.state={inputField:""};
        this.onInputChange = this.onInputChange.bind(this);
        this.createButtonClicked = this.createButtonClicked.bind(this);
    }
    onInputChange(event){
        
        this.setState({
            inputField: event.target.value
        });
        
    }

    createButtonClicked() {
        this.props.onSave({ImageUrl: this.state.inputField}, "ImagePosts");
    }
   
    
    render() {
        const Fragment = React.Fragment;

        return (
            <Fragment>
                <h1 style={{ "color": "black" }}>New Text Post</h1>
                <h6>Image URL</h6>
                
                <input onChange={this.onInputChange} placeholder="Add Post" />
                <button onClick={this.createButtonClicked}>Post</button>
            </Fragment>

        );
    }
}
NewImagePost.propTypes = {
    onSave: PropTypes.func
};
export default NewImagePost;