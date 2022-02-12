import React, {Component} from 'react';

class SiglePost extends Component {
    render() {
        let {item, chose} = this.props;
        return (
            <span>
                {item.id}-{item.title}-
                <button onClick={() => chose(item.id)}>chose</button>
            </span>
        );
    }
}

export default SiglePost;