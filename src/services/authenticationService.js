import comObj from "./communicationService";
import { redirect } from "../components/redirect";
class AuthenticationService {
    constructor() {

        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.successLogin = this.successLogin.bind(this);
        this.succesRegister = this.successRegister.bind(this);
    }
    successLogin(a) {
        comObj.setID(a.sessionId);
        console.log(a);
        redirect("/");
    }
    failLogin(a) {
        console.log("Sranje si!");
        console.log(a);
    }
    login(dataObj) {
        if (comObj.getID()) { alert("Vec postoji ulogovan korisnik"); return; }
        comObj.post("login", dataObj, this.successLogin, this.failLogin);

    }
    successRegister(a) {
        redirect("/");

    }
    failRegister(error) {
        console.log(error.response.data.error.message);

    }
    register(dataObj, callbackFail) {
        comObj.post("register", dataObj, this.succesRegister, callbackFail);
    }
    logout() {
        comObj.clearID();
        redirect("/");
    }
    isAuthenticated() {
        return !!sessionStorage.getItem("sessionID");
    }

}
export default AuthenticationService;