
class Profile {
    constructor(name, avatarUrl, postsCount, commentsCount) {
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._postsCount = postsCount;
        this._commentsCount = commentsCount;
    }

    get name() {
        return this._name;
    }
    get avatarUrl() {
        return this._avatarUrl;
    }
    get postsCount() {
        return this._postsCount;
    }
    get commentsCount() {
        return this._commentsCount;
    }

    set name(newName) {
        this._name = newName;
    }
    set avatarUrl(newAvatarUrl) {
        this._avatarUrl = newAvatarUrl;
    }
    set postsCount(newPostsCount) {
        this._postsCount = newPostsCount;
    }
    set commentsCount(newCommentsCount) {
        this._commentsCount = newCommentsCount;
    }
}

export default Profile;




