import React from 'react';
import s from './TabPanel.module.css';

const TabPanel = (props) => {
    return (
        <ul className={`nav nav-tabs ${s.nav__tabs}`} role="tablist">
            {props.children}
            
            <li className="">
                <a href="#profile" role="tab" id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="false">
                    Profile
                </a>
            </li>
            <li className="">
                <a href="#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="false">
                    Chat
                </a>
            </li>
        </ul>
    );
}

export default TabPanel;