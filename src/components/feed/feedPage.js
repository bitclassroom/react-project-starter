import React from "react";
import Modal from "react-modal";

import PostDataService from "../../services/postDataService";
import RedirectionService from "../../services/redirectService";

import AddBtn from "./addBtn";
import AddPost from "./modalBox/postModalBox";
import AddVideo from "./modalBox/videoModalBox";
import AddImage from "./modalBox/imageModalBox";
import AllPosts from "./AllPosts";
import FilterList from "./FilterList";
import Pagination from "./Pagination";

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            showModal: false,
            errorMsgServer: "",
            selectedType: ""
        };

        this.postDataService = new PostDataService();
        this.redirectionService = new RedirectionService();


        this.addVideoOnFeedPage = this.addVideoOnFeedPage.bind(this);
        this.getModalBoxComponent = this.getModalBoxComponent.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.addImageOnFeedPage = this.addImageOnFeedPage.bind(this);
        this.addTextPostOnFeedPage = this.addTextPostOnFeedPage.bind(this);
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.postDataService.getAllPosts((posts) => {
            this.setState({ allPosts: posts });
        }, error => this.setState({ errorMsgServer: error }));
    }

    addVideoOnFeedPage(newVideo) {
        this.postDataService.postVideo(newVideo, (response) => {
            this.handleCloseModal();
        }, error => {
            console.log(error);
        });

    }
    addImageOnFeedPage(newImage) {
        this.postDataService.postImage(newImage, (response) => {
            this.handleCloseModal();
        }, error => {
            console.log(error);
        });
    }

    addTextPostOnFeedPage(newText) {
        this.postDataService.postText(newText, (response) => {
            this.handleCloseModal();
        }, error => {
            console.log(error);
        });
    }

    handleCloseModal() {
        this.loadData();
        this.setState({ showModal: false });
    }

    handleOpenModal(type) {
        this.setState({
            showModal: true,
            selectedType: type
        });
    }

    getModalBoxComponent() {
        if (this.state.selectedType === "image") {
            return <AddImage closeModal={this.handleCloseModal} handleImageUrl={this.addImageOnFeedPage} />;
        }

        if (this.state.selectedType === "post") {
            return <AddPost closeModal={this.handleCloseModal} handleTextBlog={this.addTextPostOnFeedPage} />;
        }

        return <AddVideo closeModal={this.handleCloseModal} showVideoPost={this.addVideoOnFeedPage} />;

    }
    render() {
        return (<div className='container'>
            <div className="row">
                <AddBtn handleOpen={this.handleOpenModal} />
                <Pagination />
            </div>
            <Modal
                className="Modal__Bootstrap modal-dialog"
                isOpen={this.state.showModal}
            >
                {this.getModalBoxComponent()}

            </Modal>

            <AllPosts posts={this.state.allPosts} refreshPage={this.loadData} />
            <div>{this.state.errorMsgServer}</div>

        </div>);
    }
}

export default FeedPage;