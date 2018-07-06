import FetchDataService from "./fetchDataService";
import RedirectionService from "./redirectService";

class AuthenticationService {
    constructor() {
        this.serviceData = new FetchDataService();
        this.redirectService = new RedirectionService();
    }


    logIn(user) {
        let userLoginUrl = "/login";
        this.serviceData.post(userLoginUrl, user, (response) => {
            console.log(response);
            sessionStorage.setItem("sessionId", response.data.sessionId);

        });
    }

    logOut() {
        sessionStorage.removeItem("sessionId");
        this.redirectService.redirect("/");
    }

    isUserAuthenticated() {
        return !!localStorage.getItem("sessionId");
    }
    register(user) {
        let userRegisterUrl = "/register";
        this.serviceData.post(userRegisterUrl, user, (response) => {
            console.log(response);
            this.redirectService.redirect("/");
        }, (error) => {
            return error;
        });
    }
}

export default AuthenticationService;