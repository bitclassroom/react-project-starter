import React from "react";
import Modal from "react-modal";
import DataService from "../../services/dataService";

class EditProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.dataService = new DataService();
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });


    }
    handleSaveClicked() {
        this.dataService.updateProfile(updateProfile, (response) => {

        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Edit profile</button>
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.showModal}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title">Edit profile</h4>
                        </div>
                        <div className="modal-body modalBox">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />

                            <label htmlFor="about">About</label>
                            <input type="text" id="about" />

                            <label htmlFor="short">Short about</label>
                            <input id="short" />

                            <label htmlFor="avatar">Avatar url</label>
                            <textarea id="avatar" placeholder="Image src..."></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.handleCloseModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button>
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default EditProfile;
