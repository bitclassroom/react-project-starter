import { BASE_URL, API_KEY } from "../constants";
import axios from "axios";

class CommunicationService {
    constructor() {
        this.createHeaders = this.createHeaders.bind(this);
    }

    createHeaders() {
        let sessionId = sessionStorage.getItem("sessionId");

        if (sessionId) {
            return {
                "Key": API_KEY,
                "sessionId": sessionId
            };
        }

        return {
            "Key": API_KEY
        };
    }

    postRequest(address, body, notifyPostRequest, handleError) {

        const requestURL = `${BASE_URL}/${address}`;

        axios.post(requestURL, body, {
            headers: this.createHeaders()
        })
            .then(response => {
                notifyPostRequest(response);
            })
            .catch(error => {
                handleError(error);
            });
    }

    getRequest(address, notifyGetRequest, handleError) {
        const requestURL = `${BASE_URL}/${address}`;

        axios.get(requestURL, {
            headers: this.createHeaders()
        })
            .then(response => {
                notifyGetRequest(response);
            })
            .catch(error => {
                handleError(error);
            });
    }

    putRequest(address, data, notifyGetRequest, handleError) {
        const requestURL = `${BASE_URL}/${address}`;

        axios.put(requestURL, data, {
            headers: this.createHeaders()
        })
            .then(response => {
                notifyGetRequest(response);
            })
            .catch(error => {
                handleError(error);
            });
    }

}

export default CommunicationService;