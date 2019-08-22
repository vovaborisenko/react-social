import React from "react";
import Post from "./Post/Post";
import Loading from "../../Loading/Loading";

const Posts = props => {
  return (
    <div>
      <div className="container-fluid container-posts">
        {props.state.map(post => (
          <Post state={post} />
        ))}
      </div>
      <Loading />
    </div>
  );
};

export default Posts;
