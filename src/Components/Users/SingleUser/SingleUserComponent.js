import {Link} from "react-router-dom";
import './userStyle.css';
import userImage from './user.png';

export default function SingleUserComponent ({item}) {
    let {id,name,website} = item
    return (
            <div className={'userItem'}>
                <img className={'userIco'} src={userImage}/>
                <h4>{name}</h4>
                <p>{website}</p>
                <Link to={id.toString()} state={{...item}}>details</Link>
            </div>
        );
}