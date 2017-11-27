import React from "react";
import PropTypes from "prop-types";
import dataObj from "../services/dataService";
import ProfileDTO from "../services/profileDTO";
import validateEmail from "../services/validateEmail";
import { redirect } from "../services/redirect";

class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state=this.props;
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.changeState = this.changeState.bind(this);
        this.getProfileSucces = this.getProfileSucces.bind(this);
        this.validate = this.validate.bind(this);
        this.updateFail = this.updateFail.bind(this);
    }
    componentDidMount(){
        dataObj.getProfile(this.getProfileSucces, this.getProfileFail);
    }
    getProfileSucces(a) {
       
        this.setState(
            this.createTransferObject(a));

    }
    onDoubleClick(){
        this.setState({
            avatarUrl:""
        });
    }
    getProfileFail(a) {
        console.log(a);
        console.log("FAIL");
    }
    updateSuccess(){
        window.location.reload();
    }
    updateFail(e){
        
        alert(e.response.data.message +"   Please try again.");
        
    }
    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMsg: ""
            
        });
    }
    createTransferObject(obj){
        return {
            name : obj.name,
            about: obj.about,
            aboutShort : obj.aboutShort,
            avatarUrl : obj.avatarUrl || "Please put some pucture, we love that.",
            email: obj.email
        };
    }
    validate(x){
        const { username, name, email, password, about, aboutShort } = this.state;
        if (name === "") { this.setState({ badName: "Name field is required" }); return false; }
        if (!validateEmail(email)) { this.setState({ badEmail: "Email address is bad!" }); return false; }
        if(about===""){ this.setState({badAbout: "About You field is required"}); return false;}
        if(aboutShort===""){this.setState({badAboutShort:"Key Preference field is required"});return false;}
        return true;
    }
    
    render() {
        if (!this.props.show) {
            return "";
        } else {
            const backdropStyle = {
                position: "fixed",
                width:400,
                height: 800,
                top: "50%",
                left: "50%",
                marginLeft : -400,
                marginTop  : -50,
                backgroundColor: "rgba(0,0,0,0.3)",
        
            };
            const modalStyle = {
                backgroundColor: "#fff",
                borderRadius: 5,
                maxWidth: 500,
                minHeight: 300,
                padding: 30
            };
            return (
                <div className="backdrop" style={backdropStyle}>
                    <form>
                        <label  className="form-control">  Name:</label>
                        <input  onChange={this.changeState} name="name" value={this.state.name} className="form-control"/>
                        <label  className="form-control">  E-mail:</label>
                        <input  onChange={this.changeState} name="email" value={this.state.email} className="form-control"/>
                        <label  className="form-control">  Picture URL:</label>
                        <input onChange={this.changeState} onDoubleClick={this.onDoubleClick} name="avatarUrl" value={this.state.avatarUrl} className="form-control"/>
                        <label  className="form-control">  About You</label>
                        <input onChange={this.changeState} name="about" value={this.state.about} className="form-control"/>
                        <label  className="form-control">  Key Interests</label>
                        <input onChange={this.changeState} name="aboutShort" value={this.state.aboutShort} className="form-control"/>
                    </form>
                    

                    <div className="footer">
                        <button onClick={
                            this.props.onClose
                        }>
                        Hide Dialog
                        </button>
                        <button onClick={()=>{
                            let x = this.createTransferObject(this.state);
                            if(!this.validate(x)){
                                this.setState({
                                    errorMsg: "All fields must be properly filled"
                                });
                                return;
                            }
                            this.props.onClose();
                            
                            dataObj.editProfile( x, this.updateSuccess, this.updateFail );

                        }}>
                        Done Editing
                        </button>
                        <button onClick={()=>{dataObj.getProfile(this.getProfileSucces, this.getProfileFail);}}>
                        Reset Changes
                        </button>
                        <div>{this.state.errorMsg}</div>
                    </div>
                    
                </div>
            );
        }
    }
          
}
EditProfile.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    name: PropTypes.string,
    obj: PropTypes.object
};
  
export default EditProfile;