import React from 'react';
import s from './ProfileContent.module.css';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';
import Banner from './Banner/Banner';
import TabPanel from './TabPanel/TabPanel';
import Chat from './Chat/Chat';
import {Route} from 'react-router-dom';

const ProfileContent = (props) => {
    return (
        
            <div className={`${s.content__posts} ${s.profile__content}`}>
                <Banner img={props.state.banner.img} />
                <TabPanel state={props.state.tabs} />
                <div className="tab-content">
                    <Route path="/" exact component={Posts} />
                    <Route path="/wall" component={Posts} />
                    <Route path="/profile" render={() => <Profile state={props.state.userdata}/>} />
                    <Route path="/chat" component={Chat} />
                </div>
            </div>
        
    );
}

export default ProfileContent;
