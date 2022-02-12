import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class SingleUserComponent extends Component {

    render() {
        let {item} = this.props
        return (
            <p>
                {item.name} - <Link to={`/users/${item.id}`}>details</Link>
            </p>
        );
    }
}

export default SingleUserComponent;