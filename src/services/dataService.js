import CommunicationService from "./communicationService";

class DataService {
    constructor(){

        this.getRequest = new CommunicationService();
    }

    getProfileData(profileDataHandler){
        this.getRequest.getRequest("profile", (data) =>{
            profileDataHandler(data);
            console.log(data);
        });
    }

}

export default DataService;