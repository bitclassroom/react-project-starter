import React from "react";
import dataObj from "../../services/dataService";
import SinglePost from "./singlePost";
class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.bindThisAndThats();
    }
    bindThisAndThats() {
        this.success = this.success.bind(this);
    }
    initialState() {
        return {
            pplArray: []
        };
    }
    success(a) {
        console.log(a);
        this.setState({
            pplArray: a
        });
    }
    componentDidMount() {
        dataObj.getAllPosts(this.success, this.success);
    }

    render() {
        const { pplArray } = this.state;
        return (
            <div>

                {pplArray.map((post) => (

                    <SinglePost post={post} key={post.id}/>
                )
                )}
            </div>
        );
    }
}

export default FeedPage;