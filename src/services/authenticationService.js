import CommunicationService from "./communicationService";
import { redirect } from "../components/redirect";
class AuthenticationService {
    constructor() {
        this.comObj = new CommunicationService();
        this.bindThisAndThats();
    }
    bindThisAndThats(){
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.successLogin = this.successLogin.bind(this);
        this.succesRegister = this.successRegister.bind(this);
    }
    successLogin(a) {
        this.comObj.setID(a.sessionId);
        redirect("/");
    }
    failLogin(a) {
        console.log("Sranje si!");
        console.log(a);
    }
    login(dataObj) {
        if (this.comObj.getID()) { alert("Vec postoji ulogovan korisnik"); return; }
        this.comObj.post("login", dataObj, this.successLogin, this.failLogin);
        
    }
    successRegister(a){
        redirect("/");
        
    }
    failRegister(error){
        console.log(error.response.data.error.message);
        
    }
    register(dataObj, callbackFail) {
        this.comObj.post("register", dataObj, this.succesRegister, callbackFail);
    }
    logout() {
        this.comObj.clearID();
        redirect("/");
    }
    isAuthenticated() {
        return !!sessionStorage.getItem("sessionID");
    }

}
export default AuthenticationService;