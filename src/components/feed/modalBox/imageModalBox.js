import React from "react";
import PropTypes from "prop-types";


class AddImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ""
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveClicked = this.handleSaveClicked.bind(this);

    }

    handleClick() {
        this.props.closeModal();
    }

    handleChange(event) {
        this.setState({
            imageUrl: event.target.value
        });
    }

    handleSaveClicked() {
        let imageUrl = this.state.imageUrl;
        this.props.handleImageUrl(imageUrl);
    }

    render() {

        return (
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.handleClick}>
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <h4 className="modal-title">Add image</h4>
                </div>
                <div className="modal-body modalBox">
                    <h3>New image</h3>
                    <textarea value={this.state.imageUrl} onChange={this.handleChange}></textarea>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.handleClick}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button>
                </div>
            </div>

        );
    }
}
AddImage.propTypes = {
    closeModal: PropTypes.func,
    handleImageUrl: PropTypes.func

};
export default AddImage;