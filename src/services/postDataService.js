import FetchDataService from "../services/fetchDataService";
import { error } from "util";
import VideoDTO from "../entities/videoDTO";
import CommentDTO from "../entities/commentDTO";
import ImageDTO from "../entities/imageDTO";
import PostDTO from "../entities/postDTO";

class PostDataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    postVideo(videoUrl, videoDataHandler, errorHandler) {

        this.fetchDataService.post("VideoPosts", { videoUrl: videoUrl }, (response) => {
            videoDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }
    postImage(newImage, imageDataHandler, errorHandler) {
        this.fetchDataService.post("ImagePosts", { imageUrl: newImage }, (response) => {
            imageDataHandler(response);
        }), error => {
            errorHandler(error);
        };
    }
    postText(newText, textDataHandler, errorHandler) {
        this.fetchDataService.post("TextPosts", { text: newText }, response => {
            textDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }

    postComment(commentObj, commentDataHandler, errorHandler) {

        this.fetchDataService.post("Comments", commentObj, response => {
            commentDataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }

    getAllComments(postId, handleComments, handleError) {
        this.fetchDataService.get(`Comments?postId=${postId}`, response => {

            let listOfComments = response.data;

            listOfComments = listOfComments.map(comment => {
                let commentData = new CommentDTO(comment.id, comment.dateCreated, comment.body, comment.postId, comment.authorName, comment.authorId);
                return commentData;
            });
            handleComments(listOfComments);
        }, error => {
            handleError(error);
        });
    }
    getAllPosts(handleAllPosts, errorHandler) {
        this.fetchDataService.get("Posts", response => {
            let arrOfPosts = response.data;
            let allPosts = arrOfPosts.map(post => {
                if (post.type === "text") {
                    let postData = new PostDTO(post);
                    return postData;
                }
                if (post.type == "video") {
                    let videoData = new VideoDTO(post);
                }
                if (post.type == "image") {
                    let imageData = new ImageDTO(post);
                    return imageData;
                }
            });
            handleAllPosts(allPosts);
        }, errorMsg => errorHandler(errorMsg));
    }


    getSinglePost(postId, type, dataHandler, errorHandler) {
        if (type === "text") {
            this.fetchDataService.get(`TextPosts/${postId}`, response => {
                let singleTextPost = new PostDTO(response.data);
                dataHandler(singleTextPost);
            }, errorMsg => errorHandler(errorMsg));
        }
        if (type === "image") {
            this.fetchDataService.get(`ImagePosts/${postId}`, response => {
                let singleImage = new ImageDTO(response.data);
                usersDataHandler(singleImage);
            }, errorMsg => errorHandler(errorMsg));
        }
        if (type === "video") {
            this.fetchDataService.get(`VideoPosts/${postId}`, response => {
                let singleVideo = new VideoDTO(response.data);
                usersDataHandler(singleVideo);
            }, errorMsg => errorHandler(errorMsg));
        }

    }

    deleteSinglePost(postId, dataHandler, errorHandler) {
        this.fetchDataService.delete(`Posts/${postId}`, response => {
            dataHandler(response);
        }, error => {
            errorHandler(error);
        });
    }
}

export default PostDataService;