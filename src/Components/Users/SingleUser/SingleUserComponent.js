import {Link} from "react-router-dom";
import './userStyle.css';
import userImage from './user.png';

export default function SingleUserComponent ({item}) {
    let {id,name} = item
    return (
            <div className={'userItem'}>
                <img className={'userIco'} src={userImage}/>
                {name} - <Link to={id.toString()} state={{...item}}>details</Link>
            </div>
        );
}