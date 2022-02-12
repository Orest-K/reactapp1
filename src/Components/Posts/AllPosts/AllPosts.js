import React, {Component} from 'react';
import SiglePost from "../SinglPost/SiglePost";
import {PostServis} from "../../../services/PostServis";

class AllPosts extends Component {
    postServis = new PostServis()

    state = {posts: [], chosenPost: null};

    onChosePost = (id) =>{
        this.postServis.getPostById(id).then(value => this.setState({chosenPost: value}))
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                {
                    posts.map(post => <SiglePost item={post} key={post.id} chose={this.onChosePost}/>)
                }
                {
                    chosenPost && <h1>{chosenPost.id}-{chosenPost.body}</h1>
                }
            </div>
        );
    }

    componentDidMount() {
       this.postServis.getAllPosts().then(value => this.setState({posts:value}))
    }
}

export default AllPosts;