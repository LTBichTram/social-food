import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkImage, imageUpload } from "../../../utils/imageUpload";
const FormAddGroup = ({ setOnEdit }) => {
  const initState = {
    groupName: "",
    detail: "",
    privacy: "public",
  };
  const [groupData, setGroupData] = useState(initState);
  const [avatar, setAvatar] = useState("");
  const { groupName, detail, privacy } = groupData;

  const { auth, theme } = useSelector((state) => state);

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setGroupData({ ...groupData, [name]: value });
  };
  return (
    <div className="edit_profile">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(groupData);
        }}
      >
        <div className="info_avatar">
          <img
            src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
            alt="avatar"
            style={{ filter: theme ? "invert(1)" : "invert(0)" }}
          />
          <span>
            <i className="fas fa-camera" />
            <p>Change</p>
            <input
              onChange={handleUploadImage}
              type="file"
              name="file"
              id="file_up"
              accept="image/*"
            />
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="fullname">Tên nhóm</label>
          <div className="position-relative">
            <input
              name="groupName"
              value={groupName}
              onChange={onChangeInput}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="story">Chi tiết</label>
          <textarea
            value={detail}
            name="detail"
            onChange={onChangeInput}
            cols="30"
            rows="3"
            className="form-control"
          />
        </div>

        <label htmlFor="gender">Chính sách</label>
        <div className="input-group-prepend px-0 mb-4">
          <select
            name="privacy"
            id="privacy"
            value={privacy}
            onChange={onChangeInput}
            className="custom-select "
          >
            <option value="public">
              Công khai (Bất kì ai cũng có thể thấy)
            </option>
            <option value="private">
              Riêng tư (Chỉ bạn bè của bạn mới xem được)
            </option>
          </select>
        </div>

        <button className="btn btn-info w-100" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default FormAddGroup;
