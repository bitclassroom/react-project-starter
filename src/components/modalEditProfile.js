import React from "react";
import PropTypes from "prop-types";

class EditProfile extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        } else {
            const backdropStyle = {
                position: "fixed",
                top: 100,
                bottom: 0,
                left: 100,
                width:100,
                height: 100,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                padding: 50
            };
            const modalStyle = {
                backgroundColor: "#fff",
                borderRadius: 5,
                maxWidth: 500,
                minHeight: 300,
                margin: "0 auto",
                padding: 30
            };
            return (
                <div className="backdrop" style={modalStyle}>
                   
                        
                    

                    <div className="footer">
                        <button onClick={this.props.onClose}>
                        Close
                        </button>
                    </div>
                    
                </div>
            );
        }
    }
          
}
EditProfile.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};
  
export default EditProfile;