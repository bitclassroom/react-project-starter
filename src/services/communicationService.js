import { FETCH_ADDRESS } from "../constants";
import { API_KEY } from "../constants";
import axios from "axios";

class ApiCommunication {
    constructor() {

    }
    get(address, callbackSuccess, callbackFail) {

        axios.get(FETCH_ADDRESS + address, this.createRequest())
            .then((response) => {
                response.json()
                    .then((response) => {
                        callbackSuccess(response);
                    }).catch((reason) => {
                        callbackFail(reason);
                    });
            });
    }
    post(address, dataObj, callbackSuccess, callbackFail) {
        axios.post(FETCH_ADDRESS + address, this.createRequest(dataObj))
            .then((response) => response.json())
            .then((response) => {
                callbackSuccess(response);

            }).catch((reason) => {
                callbackFail(reason);
            });

    }
    getSessionID() {
        return sessionStorage.getItem("sessionID");

    }
    createRequest(dataObj = null) {
        const sesID = this.getSessionID();
        if (sesID) {
            return {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "key": API_KEY,
                    "sessionID": sesID
                },
                data: dataObj
            };
        }else{
            return {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "key": API_KEY                    
                },
                data: dataObj
            };
        }
    }
}
export default ApiCommunication;