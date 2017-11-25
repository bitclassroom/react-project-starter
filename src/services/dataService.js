import comObj from "./communicationService";
import ProfileDTO from "./profileDTO";
class DataService {
    constructor() {

    }

    getProfile(callback, failCallback) {
        comObj.get("profile", a => callback(new ProfileDTO(a)), a => failCallback(a));
    }
    editProfile(dataObj, callbackSucces, callbackFail) {
        comObj.put("Profiles", dataObj, a => this.getProfile(callbackSucces, callbackFail),
            callbackFail);

    }
}

const dataObj = new DataService();

export default dataObj;