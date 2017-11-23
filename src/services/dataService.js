import FetchDataService from "./fetchDataService";
import Profile from "./profile";

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

            const profile = new Profile(name, avatarUrl, postsCount, commentsCount);

            profileDataHandler(profile);
        });
    };
}

export default DataService;