import { BASE_URL } from "../constants";
import { API_KEY } from "../constants";


class FetchService {
    constructor() { }

    postRequest(address, body, notifyPostRequest) {

        const reqestOptions = {
            method: "post",
            headers: this.getHeaders(),
            body: body
        };

        fetch(`${BASE_URL}/${address}`, reqestOptions)
            .then((response) => response.json())
            .then((response) => {
                notifyPostRequest(response);
            })
            .catch((error) => new Error(error));
    }

    // storeSession(sessionId) {
    //     sessionStorage.setItem("sessionId", sessionId);
    // }

    // destroySession() {
    //     sessionStorage.removeItem("sessionId");
    // }

    getHeaders() {
        let headers = {
            "Accept": "application/json , text/plain, */*",
            "Content-Type": "application/json",
            "api": API_KEY
        };

        let sID = sessionStorage.getItem("sessionId");
        if (sID) {
            headers.sessionId = sID;
            return headers;
        }

        return headers;
    }

    getRequest(address, notifyGetRequest) {
        const reqestOptions = {
            method: "get",
            headers: this.getHeaders(),
        };

        fetch(`${BASE_URL}${address}`, reqestOptions)
            .then((response) => response.json())
            .then((response) => {
                notifyGetRequest(response);
            })
            .catch((error) => new Error(error));
    }

}

export default FetchService;