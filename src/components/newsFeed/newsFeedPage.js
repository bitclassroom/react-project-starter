import React from "react";
import { dataService } from "../../service/dataService";
import PostComponent from "./postComponent";
import NewPostComponent from "./newPostComponent";

class NewsFeedPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        };

        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        dataService.getPosts((posts) => {
            console.table(posts);
            this.setState({
                posts: posts
            });
        });   
    }

    componentDidMount() {
        this.loadData();
    }

    render() {

        const posts = this.state.posts;

        return(
            <div className="container">
                {posts.map(post => {
                    return <PostComponent post = {post} key={post.id} />;
                })}
                <NewPostComponent reloadFeed={this.loadData}/>
            </div>
        );
    }
}

export default NewsFeedPage;