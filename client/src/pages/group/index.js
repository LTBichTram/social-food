import React, { useState } from "react";
import FormAddGroup from "./form-add-group";
import FriendGroups from "./friend-group";
import MyGroups from "./my-group";
import "./index.css";
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
      <div className="form-action">
        <button
          onClick={handleShowFormAddGroup}
          className="btn btn-outline-info"
        >
          Tạo nhóm
        </button>
      </div>
      <FriendGroups></FriendGroups>
      <MyGroups></MyGroups>
    </React.Fragment>
  );
};

export default Group;
