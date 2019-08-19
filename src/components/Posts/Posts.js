import React from 'react';

const Posts = () => {
    return (
        <div className="tab-pane fade active in">
                <div id="posts-container" className="container-fluid container-posts">

                    <div className="card-post">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2">
                                <a href="https://socialyte.codeplus.it/personal-profile.html" title="Profile">
                                    <img src="./img/user.jpg" alt="User name" className="img-circle img-user"/>
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
                                    <img draggable="false" className="emoji" alt="❤" src="./img/2764.png"/> 156 <img draggable="false" className="emoji" alt="😃" src="./img/1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./img/1f602.png"/></li>
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
                                    <img src="./img/user.jpg" alt="My User" className="img-circle img-user"/>
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
                                <img src="./img/post.jpg" alt="image_post" className="img-post"/>
                                <div className="reaction">
                                    <img draggable="false" className="emoji" alt="❤" src="./img/2764.png"/> 1234 <img draggable="false" className="emoji" alt="😃" src="./img/1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./img/1f602.png"/></li>
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
                                    <img src="./img/user.jpg" alt="User name" className="img-circle img-user"/>
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
                                    <img draggable="false" className="emoji" alt="❤" src="./img/2764.png"/> 1234 <img draggable="false" className="emoji" alt="😃" src="./img/1f603.png"/> 54
                                </div>
                                <div className="comments">
                                    <div className="more-comments">View more comments</div>
                                    <ul>
                                        <li><b>User1</b> Lorem Ipsum Dolor si amet</li>
                                        <li><b>User2</b> Lorem Ipsum Dolor si amet <img draggable="false" className="emoji" alt="😂" src="./img/1f602.png"/></li>
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
                    <img src="./img/load.gif" alt="loader"/>
                </div>
            </div>
    );
}

export default Posts;
