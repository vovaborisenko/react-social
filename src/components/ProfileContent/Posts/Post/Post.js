import React from 'react';
import Comment from './Comment/Comment';

const Post = (props) => {
    return (
        <div className="card-post">
            <div className="row">
                <div className="col-xs-3 col-sm-2">
                    <a href={props.userLink} title="Profile">
                        <img src={props.userAvatar} alt={props.userName} className="img-circle img-user"/>
                    </a>
                </div>
                <div className="col-xs-9 col-sm-10 info-user">
                    <h3><a href={props.userLink} title="Profile">{props.userName}</a></h3>
                    <p><i>{props.time}</i></p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 data-post">
                    <p>{props.postText}</p>
                    {props.postImg && <img src={props.postImg} alt="image_post" className="img-post"/>}
                    {
                        props.postVideo
                            && <video controls="">
                                    <source src={props.postVideo} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                    }
                    <div className="reaction">
                        ❤ {props.countLikes} 😃 {props.countSmiles}
                    </div>
                    <div className="comments">
                        <div className="more-comments">View more comments</div>
                        <ul>
                            <Comment user="User1" text="Lorem Ipsum Dolor si amet" />
                            <Comment user="User2" text="Lorem Ipsum Dolor si amet 😂" />
                        </ul>
                        <form>
                            <input type="text" className="form-control" placeholder="Add a comment"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;