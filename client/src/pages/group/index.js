import React, { useState } from "react";
import FormAddGroup from "./form-add-group";
import FriendGroups from "./friend-group";
import MyGroups from "./my-group";

const Group = () => {
  const [showFormAddGroup, setShowFormAddGroup] = useState(false);
  const handleShowFormAddGroup = () => {
    setShowFormAddGroup(true);
  };
  return (
    <React.Fragment>
      {showFormAddGroup && (
        <FormAddGroup onClose={() => setShowFormAddGroup(false)}></FormAddGroup>
      )}
      <button onClick={handleShowFormAddGroup} className="btn btn-outline-info">
        Tạo nhóm
      </button>
      <FriendGroups></FriendGroups>
      <MyGroups></MyGroups>
    </React.Fragment>
  );
};

export default Group;
