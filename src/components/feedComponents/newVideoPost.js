import React from "react";
import PropTypes from "prop-types";
const getVideoId = require("get-video-id");

class NewVideoPost extends React.Component {
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
        const vidObj = getVideoId(this.state.inputField);
        if(vidObj){
            if(vidObj.service=== "youtube"){
                this.props.onSave({videoUrl: vidObj.id}, "VideoPosts");
            }else{alert("mora YT");}
        }else{alert("greska");}
        
    }
   
    
    render() {
        const Fragment = React.Fragment;

        return (
            <Fragment>
                <h1 style={{ "color": "black" }}>New Text Post</h1>
                <h6>Video Url</h6>
                
                <input onChange={this.onInputChange} placeholder="Add Post" />
                <button onClick={this.createButtonClicked}>Post</button>
            </Fragment>

        );
    }
}
NewVideoPost.propTypes = {
    onSave: PropTypes.func
};
export default NewVideoPost;