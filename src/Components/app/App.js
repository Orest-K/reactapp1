import React, {Component} from 'react';
import AllUsersComponent from "../Users/AllUsers/AllUsersComponent";
import AllPosts from "../Posts/AllPosts/AllPosts";


class App extends Component {
    render() {
        return (
            <div>
                <AllUsersComponent/>
                <AllPosts/>
            </div>
        );
    }
}

export default App;