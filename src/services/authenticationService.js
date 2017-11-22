import CommunicationService from "./communicationService";
import { redirect } from "../components/redirect";
class AuthenticationService {
    constructor() {
        this.comObj = new CommunicationService();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.success = this.success.bind(this);
    }
    success(a) {
        this.comObj.setID(a.sessionId);
        console.log(a);
    }
    fail(a) {
        console.log("Sranje si!");
        console.log(a);
    }
    login(dataObj) {
        if (this.comObj.getID()) { alert("Vec postoji ulogovan korisnik"); return; }
        this.comObj.post("login", dataObj, this.success, this.fail);
        
    }
    register(dataObj) {
        this.comObj.post("register", dataObj, this.success, this.fail);
    }
    logout() {
        this.comObj.clearID();
        redirect("/");
    }
    isAuthenticated() {
        if (this.comObj.getID()) {
            return true;
        } else {
            return false;
        }
    }

}
export default AuthenticationService;