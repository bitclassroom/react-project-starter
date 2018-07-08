import React from "react";
import dataObj from "../../services/dataService";
import SinglePost from "./singlePost";
import Modal from "react-modal";
import NewTextPost from "./newTextPost";
import NewVideoPost from "./newVideoPost";
import NewImagePost from "./newImagePost";
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
        this.toggleVisability = this.toggleVisability.bind(this);
        this.rightModal = this.rightModal.bind(this);
    }
    initialState() {
        return {
            modalIsOpen: false,
            pplArray: [],
            hiddenButtons: "hiddenButtons"
        };
    }

    onPostPost(a, postKind){
        dataObj.postPost(postKind, a, this.successPost, this.failPost);
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
    addPost(e) {
        console.log(e.target.name);
        this.setState({
            modalIsOpen: true,
            addPostKind: e.target.name
        });
        this.toggleVisability();

    }
    close() {
        this.setState({
            modalIsOpen: false
        });
    }
    rightModal(){
        const kind = this.state.addPostKind;
        if(kind === "text") return  <NewTextPost onSave={this.onPostPost} />;
        if(kind ==="video") return  <NewVideoPost onSave={this.onPostPost} />;
        if(kind ==="image") return  <NewImagePost onSave={this.onPostPost} />;
        
    }
    toggleVisability(){
        if(!!this.state.hiddenButtons){
            this.setState({
                hiddenButtons: ""
            });}
        else{
            this.setState({
                hiddenButtons: "hiddenButtons"
            });}
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
            <div style={{paddingTop: "60px"}}>
                
                <button type="button" onClick={this.toggleVisability} className="btn btn-primary">Add Post</button>
                <button type="button" onClick={this.addPost} name="text" className={`btn btn-success ${this.state.hiddenButtons}`}> Text </button>
                <button type="button" onClick={this.addPost} name="image" className={`btn btn-danger ${this.state.hiddenButtons}`}> Image </button>
                <button type="button" onClick={this.addPost} name="video" className={`btn btn-warning ${this.state.hiddenButtons}`}> Video </button>
                
                <div className="row">
                    {pplArray.map((post) => (

                        <SinglePost post={post} key={post.id} />
                    )
                    )}
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                >
                    
                    {this.rightModal()}
                    <button style={{ "float": "right" }} onClick={this.close}> Close </button>
                </Modal>
               
            </div>
        );
    }
}

export default FeedPage;