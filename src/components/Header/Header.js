import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
    <header className={`text-right ${s.header}`}>
        <form className="text-left search" method="GET">
            <input name="q" type="text" placeholder="Search.."/>
        </form>
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
        <span className="hidden-xs hidden-sm">Notifications</span> <i className="fa fa-bell-o" aria-hidden="true"></i> <span className="badge">2</span>
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
        <div className="second-icon menu-icon">
            <span><a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile"><span className="hidden-xs hidden-sm">Profile</span> <i className="fa fa-user" aria-hidden="true"></i></a>
            </span>
        </div>
        <div className="second-icon menu-icon">
            <span><a href="https://socialyte.codeplus.it/wall.html" title="Wall"><span className="hidden-xs hidden-sm">Wall</span> <i className="fa fa-database" aria-hidden="true"></i></a>
            </span>
        </div>
    </header>

    );
}

export default Header;