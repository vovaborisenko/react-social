import React from 'react';
import s from './ProfileContent.module.css';
import Banner from './../Banner/Banner';

const ProfileContent = () => {
    return (
        <div className={`${s.content__posts} ${s.profile__content}`}>
        <Banner img="./img/banner.jpg"/>
        {/* <!-- Tab Panel --> */}
        <ul className="nav nav-tabs" role="tablist">
            <li className="active">
                <a href="https://socialyte.codeplus.it/personal-profile.html#posts" role="tab" id="postsTab" data-toggle="tab" aria-controls="posts" aria-expanded="true">
                    Last posts
                </a>
            </li>
            <li className="">
                <a href="https://socialyte.codeplus.it/personal-profile.html#profile" role="tab" id="profileTab" data-toggle="tab" aria-controls="profile" aria-expanded="false">
                    Profile
                </a>
            </li>
            <li className="">
                <a href="https://socialyte.codeplus.it/personal-profile.html#chat" role="tab" id="chatTab" data-toggle="tab" aria-controls="chat" aria-expanded="false">
                    Chat
                </a>
            </li>
        </ul>

        {/* <!--Start Tab Content--> */}
        <div className="tab-content">

            {/* <!-- Tab Posts --> */}
            <div className="tab-pane fade active in" role="tabpanel" id="posts" aria-labelledby="postsTab">
                <div id="posts-container" className="container-fluid container-posts">

                    <div className="card-post">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2">
                                <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">
                                    <img src="./user.jpg" alt="User name" className="img-circle img-user"/>
                                </a>
                            </div>
                            <div className="col-xs-9 col-sm-10 info-user">
                                <h3><a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">My User</a></h3>
                                <p><i>2h</i></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 data-post">
                                <p>Lorem Ipsum Dolor si amet</p>
                                <div className="reaction">
                                    <img draggable="false" className="emoji" alt="❤" src="./2764.png"/> 156 <img draggable="false" className="emoji" alt="😃" src="./1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./1f602.png"/></li>
                                    </ul>
                                    <form>
                                        <input type="text" className="form-control" placeholder="Add a comment"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-post">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2">
                                <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">
                                    <img src="./user.jpg" alt="My User" className="img-circle img-user"/>
                                </a>
                            </div>
                            <div className="col-xs-9 col-sm-10 info-user">
                                <h3><a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">My User</a></h3>
                                <p><i>2h</i></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-sm-8 col-sm-offset-2 data-post">
                                <p>Lorem Ipsum Dolor si amet</p>
                                <img src="./post.jpg" alt="image_post" className="img-post"/>
                                <div className="reaction">
                                    <img draggable="false" className="emoji" alt="❤" src="./2764.png"/> 1234 <img draggable="false" className="emoji" alt="😃" src="./1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./1f602.png"/></li>
                                    </ul>
                                    <form>
                                        <input type="text" className="form-control" placeholder="Add a comment"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-post">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2">
                                <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">
                                    <img src="./user.jpg" alt="User name" className="img-circle img-user"/>
                                </a>
                            </div>
                            <div className="col-xs-9 col-sm-10 info-user">
                                <h3><a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">My User</a></h3>
                                <p><i>2h</i></p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 data-post">
                                <p>Lorem Ipsum Dolor si amet</p>
                                <video controls="">
                                  <source src="img/post-video.mp4" type="video/mp4"/>
                                  Your browser does not support the video tag.
                                </video>
                                <div className="reaction">
                                    <img draggable="false" className="emoji" alt="❤" src="./2764.png"/> 1234 <img draggable="false" className="emoji" alt="😃" src="./1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./1f602.png"/></li>
                                    </ul>
                                    <form>
                                        <input type="text" className="form-control" placeholder="Add a comment"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="loading">
                    <img src="./load.gif" alt="loader"/>
                </div>
            </div>
            {/* <!-- end Tab Posts --> */}

            {/* <!--Start Tab Profile--> */}
            <div className="tab-pane fade" role="tabpanel" id="profile" aria-labelledby="profileTab">
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
            {/* <!-- end tab Profile --> */}

            {/* <!-- Start Tab chat--> */}
            <div className="tab-pane fade" role="tabpanel" id="chat" aria-labelledby="chatTab">
                <div className="container-fluid container-posts">
                    <div className="card-post">
                        <div className="scrollbar-container">
                            <div className="row row-user-list">
                                <div className="col-sm-2 col-xs-3">
                                    <img src="./user2.jpg" alt="User name" className="img-circle img-user"/>
                                </div>
                                <div className="col-sm-7 col-xs-9">
                                    <p><b>User Name</b> <span className="badge">1</span></p>
                                    <p className="chat-time">An hour ago</p>
                                    <p>Lorem ipsum</p>
                                </div>
                                <div className="col-sm-3 hidden-xs">
                                    <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="Replay"><span className="badge badge-replay">Replay &gt;</span></a></p>
                                </div>
                            </div>
                            <div className="row row-user-list">
                                <div className="col-sm-2 col-xs-3">
                                    <img src="./user3.jpg" alt="User name" className="img-circle img-user"/>
                                </div>
                                <div className="col-sm-7 col-xs-9">
                                    <p><b>User Name</b></p>
                                    <p className="chat-time">Yesterday</p>
                                    <p>Lorem ipsum</p>
                                </div>
                                <div className="col-sm-3 hidden-xs">
                                    <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                                </div>
                            </div>
                            <div className="row row-user-list">
                                <div className="col-sm-2 col-xs-3">
                                    <img src="./user4.jpg" alt="User name" className="img-circle img-user"/>
                                </div>
                                <div className="col-sm-7 col-xs-9">
                                    <p><b>User Name</b></p>
                                    <p className="chat-time">2 days ago</p>
                                    <p>Lorem ipsum</p>
                                </div>
                                <div className="col-sm-3 hidden-xs">
                                    <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                                </div>
                            </div>
                            <div className="row row-user-list">
                                <div className="col-sm-2 col-xs-3">
                                    <img src="./user5.jpg" alt="User name" className="img-circle img-user"/>
                                </div>
                                <div className="col-sm-7 col-xs-9">
                                    <p><b>User Name</b></p>
                                    <p className="chat-time">2 days ago</p>
                                    <p>Lorem ipsum</p>
                                </div>
                                <div className="col-sm-3 hidden-xs">
                                    <p><a href="https://socialyte.codeplus.it/personal-profile.html" title="Start chat"><span className="badge badge-message">Start chat &gt;</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Tab chat--> */}

        </div>
        {/* <!-- Close Tab Content--> */}

    </div>
    );
}

export default ProfileContent;