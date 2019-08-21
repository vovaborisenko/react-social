import React from 'react';

const UserData = (props) => {
    return (
        <li>
            <b>{props.data}:</b> {props.value}
        </li>
    );
}

export default UserData;