import React, {Component} from 'react';
import SingleUserComponent from "../SingleUser/SingleUserComponent";
import UserService from "../../../services/UserService";

class AllUsersComponent extends Component {
    userService = new UserService()

    state = {users: [], chosenUser: null};

    async componentDidMount() {
        await this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(user => <SingleUserComponent item={user} key={user.id}/>)
                }

            </div>
        );
    }


}

export default AllUsersComponent;