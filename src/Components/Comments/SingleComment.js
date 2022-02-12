import React, {Component} from 'react';

class SingleComment extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                <h2>{item.name}</h2>
                <p>{item.body}</p>
            </div>
        );
    }
}

export default SingleComment;