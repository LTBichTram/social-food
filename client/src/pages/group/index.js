import React from "react";
import FriendGroups from "./friend-group";
import MyGroups from "./my-group";

const Group = () => {
  return (
    <React.Fragment>
      <FriendGroups></FriendGroups>
      <MyGroups></MyGroups>
    </React.Fragment>
  );
};

export default Group;
