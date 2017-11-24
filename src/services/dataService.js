import FetchDataService from "./fetchDataService";
import Profile from "./profileDTO";

class DataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    getProfile(profileDataHandler) {

        this.fetchDataService.get("profile", (response) => {
            console.log(response);
            const name = response.data.name;
            const avatarUrl = response.data.avatarUrl;
            const postsCount = response.data.postsCount;
            const commentsCount = response.data.commentsCount;
            const about = response.data.about;
            const aboutShort = response.data.aboutShort;
            const email = response.data.email;
            

            const profile = new Profile(name, avatarUrl, about, aboutShort, email, postsCount, commentsCount);

            profileDataHandler(profile);
        });
    };

    updateProfile(profileData, profileDataHandler) {

        this.fetchDataService.put("Profiles", profileData, (response) => {
            profileDataHandler(response);
        });
    }
}

export default DataService; 