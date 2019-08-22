import React from "react";
import Comment from "./Comment/Comment";

const Post = props => {
  return (
    <div className="card-post">
      <div className="row">
        <div className="col-xs-3 col-sm-2">
          <a href={props.state.user.link} title="Profile">
            <img
              src={props.state.user.img}
              alt={props.state.user.name}
              className="img-circle img-user"
            />
          </a>
        </div>
        <div className="col-xs-9 col-sm-10 info-user">
          <h3>
            <a href={props.state.user.link} title="Profile">
              {props.state.user.name}
            </a>
          </h3>
          <p>
            <i>{props.state.post.time}</i>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2 data-post">
          <p>{props.state.post.text}</p>
          {props.state.post.img && (
            <img
              src={props.state.post.img}
              alt="image_post"
              className="img-post"
            />
          )}
          {props.state.post.video && (
            <video controls="">
              <source src={props.state.post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="reaction">
            ❤ {props.state.reaction.likes} 😃 {props.state.reaction.smiles}
          </div>
          <div className="comments">
            <div className="more-comments">View more comments</div>
            <ul>
              {props.state.comments.map(comment => (
                <Comment state={comment} />
              ))}
            </ul>
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Add a comment"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
