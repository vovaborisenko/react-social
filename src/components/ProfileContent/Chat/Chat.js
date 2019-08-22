import React from "react";
import Dialog from "./Dialog/Dialog";

const Chat = props => {
  return (
    <div className="container-fluid container-posts">
      <div className="card-post">
        <div className="scrollbar-container">
          {props.state.map(dialog => (
            <Dialog
              name={dialog.name}
              avatar={dialog.avatar}
              time={dialog.time}
              message={dialog.message}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
