import { FETCH_ADDRESS } from "../constants";
import { API_KEY } from "../constants";
import axios from "axios";

class CommunicationService {
    constructor() {
        this.key = "sessionID";
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
    }
    get(address, callbackSuccess, callbackFail) {
        axios({
            method: "get",
            url: FETCH_ADDRESS + address,
            headers: this.createRequest()
        }).then((response) => {
            callbackSuccess(response.data);
        }).catch((reason) => {
            callbackFail(reason);
        });
    }
    post(address, dataObj, callbackSuccess, callbackFail) {
        axios({
            method: "post",
            url: FETCH_ADDRESS + address,
            data: dataObj,
            headers: this.createRequest()
        }).then((response) => {
            callbackSuccess(response.data);

        }).catch((reason) => {
            callbackFail(reason);
        });
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
    createRequest() {
        const sesID = this.getID();
        if (sesID) {
            return {

                "Accept": "application/json",
                "Content-Type": "application/json",
                "key": API_KEY,
                "sessionID": sesID

            };
        } else {
            return {

                "Accept": "application/json",
                "Content-Type": "application/json",
                "key": API_KEY

            };
        }
    }
}
const comObj = new CommunicationService();
export default comObj;