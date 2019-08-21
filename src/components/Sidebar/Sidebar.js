import React from 'react';
import s from './Sidebar.module.css';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <Link to={props.state.link} title="Profile">
                <img src={props.state.img} alt={props.state.name} className={s.avatar}/>
            </Link>
            <h2 className="text-center hidden-xs">
                <Link to={props.state.link} title="Profile">{props.state.name}</Link>
            </h2>
            <p className="text-center user-description hidden-xs">
                <i>{props.state.text}</i>
            </p>
        </div>
    );
}

export default Sidebar;