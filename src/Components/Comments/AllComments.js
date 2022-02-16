import React, {useEffect, useState} from 'react';
import SingleComment from "./SingleComment";
import {allComments} from "../../services/comments.service";


export default function AllComments () {

    let [comments, setComment] = useState([])
    useEffect(() =>{
        allComments().then(value => setComment(value.data))
    },[])

    return (
        <div>
            {
                comments.map(value => <SingleComment item={value} key={value.id}/>)
            }
        </div>
    );
}