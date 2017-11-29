import React from "react";
import dataObj from "../../services/dataService";
import SinglePost from "./singlePost";
import Modal from "react-modal";
import NewTextPost from "./newTextPost";
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
        this.onPostPost = this.onPostPost.bind(this);
        this.successPost = this.successPost.bind(this);
    }
    initialState() {
        return {
            modalIsOpen: false,
            pplArray: []
        };
    }

    onPostPost(a){
        dataObj.postTextPost(a, this.successPost, this.failPost);
        this.close();
    }

    successPost(){ dataObj.getAllPosts(this.success, this.success);}
    failPost(a){console.log(a);}

    success(a) {
        console.log(a);
        this.setState({
            pplArray: a
        });
    }
    componentDidMount() {
        dataObj.getAllPosts(this.success, this.success);
    }
    addPost() {
        this.setState({
            modalIsOpen: true
        });

    }
    close() {
        this.setState({
            modalIsOpen: false
        });
    }
    render() {
        const customStyle = {
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.75)"
            },
            content: {
                position: "absolute",
                top: "140px",
                left: "140px",
                right: "140px",
                bottom: "140px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px"

            }
        };
        const { pplArray } = this.state;
        return (
            <div>

                {pplArray.map((post) => (

                    <SinglePost post={post} key={post.id} />
                )
                )}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={afterOpenFn}
                    // onRequestClose={requestCloseFn}
                    // closeTimeoutMS={n}
                    //style={customStyle}
                    contentLabel="Modal"
                >
                    <NewTextPost onSave={this.onPostPost} />
                    <button style={{ "float": "right" }} onClick={this.close}> Close </button>
                </Modal>
                <button onClick={this.addPost}> Add Post </button>
            </div>
        );
    }
}

export default FeedPage;