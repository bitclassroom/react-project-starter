import { BASE_URL, API_KEY } from "../constants";
import CommunicationService from "./communicationService";


class AuthenticationService {
    constructor() {

        this.commService = new CommunicationService();
    }

    login(userData){
        this.commService.postRequest("login", userData, (data) =>{
            console.log(data);
        });
    }
}

export default AuthenticationService;