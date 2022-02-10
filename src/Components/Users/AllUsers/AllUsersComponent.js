import React, {Component} from 'react';
import SingleUserComponent from "../SingleUser/SingleUserComponent";
import {UserService} from "../../../services/UserService";

class AllUsersComponent extends Component {

    userService = new UserService()


    state = {users: [], chosenUser: null};

    onChoseUser = (id) => {
       this.userService.getUsersById(id).then(value => this.setState({chosenUser: value}))
    }

    render() {
        let {users, chosenUser} = this.state;
        return (
            <div>
                {
                    users.map(user => <SingleUserComponent item={user} key={user.id} chose={this.onChoseUser}/>)
                }
                {
                    chosenUser && <h2>{chosenUser.id}-{chosenUser.name}</h2>
                }

            </div>
        );
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }
}

export default AllUsersComponent;