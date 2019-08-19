import React from 'react';
import s from './Header.module.css';
import Search from '../Search/Search';
import MenuIcon from '../MenuIcon/MenuIcon';

const Header = () => {
    return (
    <header className={`text-right ${s.header}`}>
        <Search/>
        <MenuIcon title="Settings" icon="cogs" path="#settings"/>
        <MenuIcon title="Notification" icon="bell-o" path="#notification" badge="2"/>
        <MenuIcon title="Profile" icon="user" path="#profile"/>
        <MenuIcon title="Wall" icon="database" path="#wall"/>
    </header>

    );
}

export default Header;