import React from 'react';
import s from './Tab.module.css';
import {NavLink} from 'react-router-dom';

const Tab = (props) => {
    return (
        <li>
            <NavLink to={`/${props.name}`} exact activeClassName={s.active}>
                {props.title}
            </NavLink>
        </li>
    );
}

export default Tab;