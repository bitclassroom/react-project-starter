import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const a = this.props.post.type;
        if(a === "text"){
            return (
                <div className="col-md-8 col-lg-8 bg-success" style={{
                    height: "25vh",
                    float: "none",
                    margin: "20px auto"}}>

                    <p>{this.props.post.text}</p>
                    <span style={{
                        "float": "left"
                    }}> {this.props.post.type}</span>
                    <span style={{
                        "float": "right"
                    }}>{this.props.post.commentsNum}</span>
                </div>

            );}
        if(a=== "image"){
            return (
                <div className="col-md-8 col-lg-8 bg-danger" style={{
                    minHeight: "45vh",
                    float: "none",
                    padding: "2%",
                    margin: "20px auto"}}>

                    <img src={this.props.post.imageUrl} style={{
                        display:"block",
                        width:"90%"
                    }}/>
                    <span style={{
                        "float": "left"
                    }}> {this.props.post.type}</span>
                    <span style={{
                        "float": "right"
                    }}>{this.props.post.commentsNum}</span>
                </div>

            );
        }
        if(a=== "video"){
            console.log(this.props.post);
            return (
                <div className="col-md-8 col-lg-8 bg-warning" style={{
                    height: "65vh",
                    float: "none",
                    padding: "2%",
                    margin: "20px auto"}}>

                    <Iframe url={`http://www.youtube.com/embed/${this.props.post.videoUrl}`}
                        
                    
                        id="myId"
                        display="block"
                        position="relative"
                        allowFullScreen/>
                    <span style={{
                        "float": "left"
                    }}> {this.props.post.type}</span>
                    <span style={{
                        "float": "right"
                    }}>{this.props.post.commentsNum}</span>
                </div>

            );
        }
    }
}
SinglePost.propTypes = {
    post: PropTypes.object,
    text: PropTypes.string,
    id: PropTypes.number

};

export default SinglePost;