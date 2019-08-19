import React from 'react';
import s from './TabPanel.module.css';
import Tab from '../Tab/Tab';

const TabPanel = (props) => {
    return (
        <ul className={s.nav__tabs}>
            <Tab name="" title="Last Posts" />
            <Tab name="profile" title="Profile" />
            <Tab name="chat" title="Chat" />
        </ul>
    );
}

export default TabPanel;