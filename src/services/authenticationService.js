import comObj from "./communicationService";
import { redirect } from "./redirect";
class AuthenticationService {
    constructor() {

        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
       
    }
    login(dataObj, callbackSucces, callbackFail) {
        if (comObj.getID()) { alert("Vec postoji ulogovan korisnik"); return; }
        comObj.post("login", dataObj, callbackSucces, callbackFail);

    }
    register(dataObj, callbackSucces, callbackFail) {
        comObj.post("register", dataObj, callbackSucces, callbackFail);
    }
    logout() {
        comObj.clearID();
        redirect("/");
    }
    isAuthenticated() {
        return !!sessionStorage.getItem("sessionID");
    }
    getID() {
        return sessionStorage.getItem(this.key);

    }
    setID(item){
        sessionStorage.setItem(this.key, item);
    }
    clearID(){
        sessionStorage.clear();
    }

}
export default AuthenticationService;