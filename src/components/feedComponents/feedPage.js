import React from "react";
import dataObj from "../../services/dataService";
import SinglePost from "./singlePost";
import Modal from "react-modal";
class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.success = this.success.bind(this);
        this.addPost = this.addPost.bind(this);
        this.close = this.close.bind(this);
    }
    initialState() {
        return {
            modalIsOpen: false,
            pplArray: []
        };
    }
    success(a) {
        console.log(a);
        this.setState({
            pplArray: a
        });
    }
    componentDidMount() {
        dataObj.getAllPosts(this.success, this.success);
    }
    addPost(){
        this.setState({
            modalIsOpen:true
        });
        console.loc("yes");
    }
    close(){
        this.setState({
            modalIsOpen:false
        });
    }
    render() {
        const customStyle={
            overlay : {
                position          : "fixed",
                top               : 0,
                left              : 0,
                right             : 0,
                bottom            : 0,
                backgroundColor   : "rgba(255, 255, 255, 0.75)"
            },
            content : {
                position                   : "absolute",
                top                        : "40px",
                left                       : "40px",
                right                      : "40px",
                bottom                     : "40px",
                border                     : "1px solid #ccc",
                background                 : "#fff",
                overflow                   : "auto",
                WebkitOverflowScrolling    : "touch",
                borderRadius               : "4px",
                outline                    : "none",
                padding                    : "20px"
           
            }
        };
        const { pplArray } = this.state;
        return (
            <div>

                {pplArray.map((post) => (

                    <SinglePost post={post} key={post.id}/>
                )
                )}
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={afterOpenFn}
                    // onRequestClose={requestCloseFn}
                    // closeTimeoutMS={n}
                    // style={customStyle}
                    contentLabel="Modal"
                >
                    <button style={{"float":"right"}} onClick={this.close}> Close </button>
                    <input placeholder="Add Post" />
                    <button>Post</button>
                </Modal>
                <button onClick={ this.addPost }> Add Post </button>
            </div>
        );
    }
}

export default FeedPage;