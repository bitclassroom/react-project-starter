import comObj from "./communicationService";
import ProfileDTO from "./profileDTO";
class DataService {
    constructor() {

    }
    getPeople(callback, failCallback){
        comObj.get("users", a => callback(a.data), a => callback(a));
    }
    getAnyProfile(id, callback, failCallback){
        comObj.get(`users/${id}`, a => callback(a.data), a => callback(a));
    }
    getProfile(callback, failCallback) {
        comObj.get("profile", a => callback(new ProfileDTO(a.data)), a => failCallback(a));
    }
    editProfile(dataObj, callbackSucces, callbackFail) {
        console.log(dataObj);
        comObj.put("Profiles", dataObj, callbackSucces, callbackFail);
            

    }
}

const dataObj = new DataService();

export default dataObj;