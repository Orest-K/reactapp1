import React, {Component} from 'react';

class SingleUserComponent extends Component {

    render() {
        let {item,chose} = this.props
        return (
            <p>
                {item.id} - {item.name}-
                <button onClick={() => chose(item.id)}>chose</button>
            </p>
        );
    }
}

export default SingleUserComponent;