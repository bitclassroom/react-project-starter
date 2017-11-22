import CommunicationService from "./communicationService";
import RedirectionService from "./redirectionService";


class AuthenticationService {
    constructor() {

        this.redirect = new RedirectionService();
        this.commService = new CommunicationService();

        this.bindInit();
    }

    bindInit() {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.storeSession = this.storeSession.bind(this);
        this.isUserAuthenticated = this.isUserAuthenticated.bind(this);
    }

    login(userData) {
        this.commService.postRequest("login", userData, (data) => {
            console.log(data);
            this.storeSession(data.data.sessionId);
            this.isUserAuthenticated();
        });
    }

    register(userData) {
        this.commService.postRequest("register", userData, (data) => {
            console.log(data);
        });
    }

    storeSession(sessionId) {
        sessionStorage.setItem("sessionId", sessionId);
    }

    logout() {
        sessionStorage.removeItem("sessionId");
    }

    isUserAuthenticated() {
        const ID = sessionStorage.getItem("sessionId");
        if (ID) {
            this.redirect("main");
        } else {
            this.redirect("");
        }
    }
}

export default AuthenticationService;