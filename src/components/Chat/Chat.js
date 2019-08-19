import React from 'react';

const Chat = () => {
    return (
        <div className="tab-pane fade active in">
                <div className="container-fluid container-posts">
                    <div className="card-post">
                        <div className="scrollbar-container">
                            <div className="row row-user-list">
                                <div className="col-sm-2 col-xs-3">
                                    <img src="./img/user2.jpg" alt="User name" className="img-circle img-user"/>
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
                                    <img src="./img/user3.jpg" alt="User name" className="img-circle img-user"/>
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
                                    <img src="./img/user4.jpg" alt="User name" className="img-circle img-user"/>
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
                                    <img src="./img/user5.jpg" alt="User name" className="img-circle img-user"/>
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
    );
}

export default Chat;
