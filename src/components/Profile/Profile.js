import React from 'react';

const Profile = () => {
    return (
        <div className="tab-pane fade active in">
                <div className="container-fluid container-posts">
                    <div className="card-post">
                        <ul className="profile-data">
                            <li><b>Username:</b> User</li>
                            <li><b>Age:</b> 26</li>
                            <li><b>Hobbies:</b> trecking and cooking</li>
                            <li><b>Studies:</b> University of World</li>
                            <li><b>Job:</b> Full stack Developer</li>
                            <li><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                        <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="edit profile"><i className="fa fa-pencil" aria-hidden="true"></i> Edit profile</a></p>
                    </div>
                </div>
            </div>
    );
}

export default Profile;
