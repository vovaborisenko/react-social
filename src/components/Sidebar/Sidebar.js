import React from 'react';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">
                <img src="./img/user.jpg" alt="User name" className="img-circle img-user"/>
            </a>
            <h2 className="text-center hidden-xs">
                <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">My User</a>
            </h2>
            <p className="text-center user-description hidden-xs">
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
            </p>
        </div>
    );
}

export default Sidebar;