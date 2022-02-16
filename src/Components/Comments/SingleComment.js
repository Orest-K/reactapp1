import React from 'react';

export default function SingleComment ({item}) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.body}</p>
        </div>
    );}

