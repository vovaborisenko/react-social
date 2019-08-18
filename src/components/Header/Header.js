import React from 'react';
import s from './Header.module.css';
import Search from '../Search/Search';
import MenuIcon from '../MenuIcon/MenuIcon';

const Header = () => {
    return (
    <header className={`text-right ${s.header}`}>
        <Search/>
        <div className="menu-icon">
            <div className="dropdown">
                <span className="dropdown-toggle" role="button" id="dropdownSettings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span className="hidden-xs hidden-sm">Settings</span> <i className="fa fa-cogs" aria-hidden="true"></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownSettings">
                    <li>
                        <a href="https://socialyte.codeplus.it/settings.html" title="Settings" data-toggle="modal" data-target="#settingsmodal">
                            <div className="col-xs-4">
                                <i className="fa fa-wrench" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left">
                                <span>Settings</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://socialyte.codeplus.it/personal-profile.html#" title="Settings">
                            <div className="col-xs-4">
                                <i className="fa fa-question" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left">
                                <span>FAQ</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://socialyte.codeplus.it/personal-profile.html#" title="Settings">
                            <div className="col-xs-4">
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                            </div>
                            <div className="col-xs-8 text-left">
                                <span>Logout</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="second-icon dropdown menu-icon">
            <span className="dropdown-toggle" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className="hidden-xs hidden-sm">Notifications</span> 
                <i className="fa fa-bell-o" aria-hidden="true"></i>
                <span className="badge">2</span>
            </span>
            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNotification">
                <li className="new-not">
                    <a href="https://socialyte.codeplus.it/personal-profile.html#" title="User name comment"><img src="./user2.jpg" alt="User name" className="img-circle img-user-mini"/> User comments your post</a>
                </li>
                <li className="new-not">
                    <a href="https://socialyte.codeplus.it/personal-profile.html#" title="User name comment"><img src="./user3.jpg" alt="User name" className="img-circle img-user-mini"/> User comments your post</a>
                </li>
                <li>
                    <a href="https://socialyte.codeplus.it/personal-profile.html#" title="User name comment"><img src="./user4.jpg" alt="User name" className="img-circle img-user-mini"/> User comments your post</a>
                </li>
                <li role="separator" className="divider"></li>
                <li><a href="https://socialyte.codeplus.it/personal-profile.html#" title="All notifications">All Notifications</a></li>
            </ul>
        </div>
        <MenuIcon title="Settings" icon="cogs" path="#settings"/>
        <MenuIcon title="Notification" icon="bell-o" path="#notification" badge="2"/>
        <MenuIcon title="Profile" icon="user" path="#profile"/>
        <MenuIcon title="Wall" icon="database" path="#wall"/>
    </header>

    );
}

export default Header;