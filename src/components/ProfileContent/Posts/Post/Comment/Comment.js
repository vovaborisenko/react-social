import React from "react";

const Comment = props => {
  return (
    <li>
      <b>{props.state.username}</b> {props.state.text}
    </li>
  );
};

export default Comment;
