import comObj from "./communicationService";
import ProfileDTO from "./profileDTO";
class DataService {
    constructor() {

    }
    postTextPost(obj, callbackSuccess, callbackFail){
        comObj.post("TextPosts", obj, a => callbackSuccess(a), a => callbackFail(a));
    }

    getAllPosts(callback, failcallback){
        comObj.get("Posts", a => callback(a.data), a => failCallback(a));
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
    editProfile(dataObj, callbackSuccess, callbackFail) {
        console.log(dataObj);
        comObj.put("Profiles", dataObj, callbackSuccess, callbackFail);
            

    }
}

const dataObj = new DataService();

export default dataObj;