import React from 'react';
import Post from './Post/Post';
import Loading from '../../Loading/Loading';

const Posts = () => {
    return (
        <div>
            <div className="container-fluid container-posts">
                <Post userName="VB"
                    userLink="#"
                    userAvatar="./img/user.jpg"
                    time="2h"
                    postText="Lorem Ipsum Dolor si amet"
                />
                <Post userName="VB"
                    userLink="#"
                    userAvatar="./img/user.jpg"
                    time="2h"
                    postText="Lorem Ipsum Dolor si amet"
                    postImg="./img/post.jpg"
                />
                <Post userName="VB"
                    userLink="#"
                    userAvatar="./img/user.jpg"
                    time="2h"
                    postText="Lorem Ipsum Dolor si amet"
                    postVideo="./img/post-video.mp4"
                />
            </div>
            <Loading />
        </div>
    );
}

export default Posts;
