import React, {Component} from 'react';
import SiglePost from "../SinglPost/SiglePost";

class AllPosts extends Component {
    state = {posts: [], chosenPost: null};

    onChosePost = (id) =>{
        let {posts} = this.state;
        let find = posts.find(value => value.id === id);
        this.setState({chosenPost: find})
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
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts =>{
                this.setState({posts})
            })
    }
}

export default AllPosts;