import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import SingleComment from "./SingleComment";

class AllComments extends Component {
    commentService = new CommentsService()
    state = {comments:[]}
    async componentDidMount() {
        await this.commentService.getAllComments().then(value => this.setState({comments: value}))
    }

    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map(value => <SingleComment item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;