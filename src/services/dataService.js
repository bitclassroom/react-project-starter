import comObj from "./communicationService";
import ProfileDTO  from "./profileDTO";
class DataService {
    constructor(){
        
    }
    
    getProfile(callback, failCallback){
        comObj.get("profile", a=> callback(new ProfileDTO(a)), a=> failCallback(a));
    }
}

const dataObj = new DataService();

export default dataObj;