import React from 'react';
import s from './Profile.module.css';
import UserData from './UserData/UserData';

const Profile = (props) => {
    return (
        <div className="container-fluid container-posts">
            <div className="card-post">
                <ul className={s.data__list}>
                    {props.state.map((userdata) =>
                        <UserData data={userdata.data} value={userdata.value} />)}
                </ul>
                <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="edit profile"><i className="fa fa-pencil" aria-hidden="true"></i> Edit profile</a></p>
            </div>
        </div>
    );
}

export default Profile;
