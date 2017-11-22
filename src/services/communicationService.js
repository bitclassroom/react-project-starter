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

    postRequest(address, body, notifyPostRequest) {

        const requestURL = `${BASE_URL}/${address}`;

        axios.post(requestURL, body, {
            headers: this.createHeaders()
        })
            .then(response => {
                notifyPostRequest(response);
            })
            .catch(error => {
                console.log("OVO JE EROR" + error.message + error.status );
            });
    }

    getRequest(address, notifyGetRequest) {
        const requestURL = `${BASE_URL}/${address}`;

        axios.get(requestURL, {
            headers: this.createHeaders()
        })
            .then(response => {
                notifyGetRequest(response);
            })
            .catch(error => {
                new Error(error);
            });
    }

}

export default CommunicationService;