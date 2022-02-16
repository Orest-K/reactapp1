import SiglePost from "../SinglPost/SiglePost";
import {useEffect, useState} from "react";
import {getAllPosts} from "../../../services/post.servis";


export default function AllPosts () {

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getAllPosts().then(value => setPosts(value.data))
    },[])

    return (
        <div>
            {
            posts.map(post => <SiglePost item={post} key={post.id}/>)
            }
        </div>
    );
}

