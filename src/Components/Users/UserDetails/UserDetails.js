import {useLocation} from "react-router-dom";

export default function UserDetails() {
    let location = useLocation()
    let {state:user} = location
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>Company - "{user.company.name}"</p>
        </div>
    )
}