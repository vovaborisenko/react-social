import React from 'react';

const Comment = (props) => {
    return (
        <li><b>{props.user}</b> {props.text}</li>
    );
}

export default Comment;