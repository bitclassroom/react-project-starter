import { BASE_URL, API_KEY, SESSION_ID } from "../constants";
import axios from "axios";

class CommunicationService {
    constructor() { }

    // createHeaders() {

    //     const requestHeaders = {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "Key": API_KEY
    //     };

    //     const sessionId = sessionStorage.getItem({ SESSION_ID });


    //     if (sessionId) {
    //         const requestHeaders = {
    //             "Content-type": "application/json; charset=UTF-8",
    //             "Key": API_KEY,
    //             "SessionID": sessionId
    //         };
    //         return requestHeaders;
    //     }

    //     return requestHeaders;
    // }

    getRequest(url, getDataHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;


        fetch(requestUrl, {
            method: "get",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Key": API_KEY,
            }
        })
            .then(response => response.json())
            .then(response => getDataHandler(response))
            .catch((error) => errorHandler(error));
    }

    postRequest(url, postData, postDataHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;


        axios.post(requestUrl, postData, {
            headers: {
                // "Content-type": "application/json; charset=UTF-8",
                "Key": API_KEY
            }
        })
            .then(response => response.json())
            .then(response => postDataHandler(response))
            .catch((error) => errorHandler(error));

    }

}

export default CommunicationService;
