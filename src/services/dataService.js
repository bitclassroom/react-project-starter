import comObj from "./communicationService";
import ProfileDTO from "./profileDTO";
class DataService {
    constructor() {

    }

    getProfile(callback, failCallback) {
        comObj.get("profile", a => callback(new ProfileDTO(a)), a => failCallback(a));
    }
    editProfile(dataObj, callbackSucces, callbackFail) {
        console.log(dataObj);
        comObj.put("Profiles", dataObj, callbackSucces, callbackFail);
            

    }
}

const dataObj = new DataService();

export default dataObj;