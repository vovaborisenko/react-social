import React from "react";

const UserData = props => {
  return (
    <li>
      <b>{props.state.data}:</b> {props.state.value}
    </li>
  );
};

export default UserData;
