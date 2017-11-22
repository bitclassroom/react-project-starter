import CommunicationService from "./communicationService";

class AuthenticationService {
    constructor() {
        this.comObj = new CommunicationService();
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
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
    logout(){

    }
    isAuthenticated(){
        
    }

}
export default AuthenticationService;