import React from "react";
import PropTypes from "prop-types";

import PostOnFeedPage from "./postTypeComponents/PostOnFeedPage";

import FilterList from "./FilterList";

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType: "all"
        };
        this.filterSelected = this.filterSelected.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
    }



    // getComponentByType(post, type) {

    //     if (type === "text" && (this.state.filterType == "text" || this.state.filterType == "all")) {
    //         return <PostOnFeedPage post={post} key={post.id} />;
    //     }
    //     if (type === "video" && (this.state.filterType == "video" || this.state.filterType == "all")) {
    //         return <PostOnFeedPage post={post} key={post.id} />;
    //     }
    //     if (type === "image" && (this.state.filterType == "image" || this.state.filterType == "all")) {
    //         return <PostOnFeedPage post={post} key={post.id} />;
    //     }

    //     return "";
    // }

    filterSelected(type) {
        this.setState({
            filterType: type
        });

    }
    refreshPage(){
        this.props.refreshPage();
    }
    render() {
        return (
            <div>
                <FilterList onFilterSelected={this.filterSelected} />
                {this.props.posts.map(post => <PostOnFeedPage key={post.id} post={post} refreshPage={this.refreshPage} />)}
            </div>
        );
    }
}
AllPosts.propTypes = {
    posts: PropTypes.array,
    refreshPage: PropTypes.func

};

export default AllPosts;