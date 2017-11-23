

class ProfileDTO{
    constructor(input){
        this._name = input.name;
        this._aboutShort = input.aboutShort;
        this._about = input.about;
        this._avatarUrl = input.avatarUrl;
        this._postsCount = input.postsCount;
        this._commentsCount = input.commentsCount;
    }
    get name() {
        return this._name;
    }
    set name(a){
        this._name = a;
    }
    get aboutShort() {
        return this._aboutShort;
    }
    set aboutShort(a) {
        this._aboutShort = a;
    }
    get about() {
        return this._about;
    }
    set about(a) {
        this._about = a;
    }
    get avatarUrl() {
        return this._avatarUrl;

    }
    set avatarUrl(a){
        this._avatarUrl = a;
    }
    get postsCount() {
        return this._postsCount;
    }
    set postsCount(a) {
        this._postsCount =a;
    }
    get commentsCount() {
        return this._commentsCount ;}
    set commentsCount(a) {
        this._commentsCount = a;
    }    
} 
export default ProfileDTO;