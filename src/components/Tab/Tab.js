import React from 'react';
import s from './Tab.module.css';

const Tab = (props) => {
    return (
        <li className={props.active && "active"}>
            <a href={`#${props.name}`} role="tab" id={`${props.name}Tab`} data-toggle="tab" aria-controls={`#${props.name}`} aria-expanded="true">
                {props.title}
            </a>
        </li>
    );
}

export default Tab;