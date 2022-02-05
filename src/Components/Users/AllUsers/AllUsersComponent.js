import React, {Component} from 'react';
import SingleUserComponent from "../SingleUser/SingleUserComponent";

class AllUsersComponent extends Component {
    state = {users: [], chosenUser: null};

    onChoseUser = (id) => {
        let {users} = this.state;
        let find = users.find(value => value.id === id);
        this.setState({chosenUser: find});
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
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users})
            });
    }
}

export default AllUsersComponent;