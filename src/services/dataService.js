import FetchDataService from "./fetchDataService";
import Profile from "../entities/profileDTO";

class DataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    getProfile(profileDataHandler) {

        this.fetchDataService.get("profile", (response) => {
            // console.log(response);
            const name = response.data.name;
            const avatarUrl = response.data.avatarUrl;
            const postsCount = response.data.postsCount;
            const commentsCount = response.data.commentsCount;
            const about = response.data.about;
            const aboutShort = response.data.aboutShort;
            const email = response.data.email;
            const userId = response.data.userId;
            
            

            const profile = new Profile(name, avatarUrl, about, aboutShort, email, postsCount, commentsCount,userId);

            profileDataHandler(profile);
        });
    };
    getUsers(usersDataHandler){
        this.fetchDataService.get("users", response=>{
            let listOfUsers = response.data;
            usersDataHandler(listOfUsers);
        });
    }

    getUserProfile(userId, usersDataHandler){
        this.fetchDataService.get(`users/${userId}`, response=>{
            usersDataHandler(response);
        });
    }

    updateProfile(profileData, profileDataHandler) {
        this.fetchDataService.put("Profiles", profileData, (response) => {
            profileDataHandler(response);
        });
    }
}

export default DataService; 