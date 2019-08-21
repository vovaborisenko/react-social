import React from 'react';
import s from './MenuIcon.module.css';
import {NavLink} from 'react-router-dom';

const MenuIcon = (props) => {
    return (
        <div className={s.menu__icon}>
            <span>
                <NavLink to={`/${props.path}`} title={props.title}>
                    <span className="hidden-xs hidden-sm">{props.title}</span>
                    <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
                    {props.badge && <span className={s.badge}>{props.badge}</span>}
                </NavLink>
            </span>
        </div>
    );
};

export default MenuIcon;