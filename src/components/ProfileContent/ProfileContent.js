import React from 'react';
import s from './ProfileContent.module.css';
import Posts from '../Posts/Posts';
import Profile from '../Profile/Profile';
import Banner from '../Banner/Banner';
import TabPanel from '../TabPanel/TabPanel';
import Chat from '../Chat/Chat';
import {Route, BrowserRouter } from 'react-router-dom';

const ProfileContent = (props) => {
    return (
        <BrowserRouter>
            <div className={`${s.content__posts} ${s.profile__content}`}>
                <Banner img="./img/banner.jpg" />
                <TabPanel />
                <div className="tab-content">
                    <Route path="/" exact component={Posts} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/chat" component={Chat} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default ProfileContent;
