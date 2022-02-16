import SingleUserComponent from "../SingleUser/SingleUserComponent";
import {getAllUsers} from "../../../services/user.service";
import {useEffect, useState} from "react";
import './allUsers.css'

export default function AllUsersComponent() {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(value => setUsers(value.data));
    }, [])
    return (
        <div>
            <div className={'usersBlock'}>
            {
                users.map(user => <SingleUserComponent item={user} key={user.id}/>)
            }
            </div>
            <hr/>
        </div>
    );
}
