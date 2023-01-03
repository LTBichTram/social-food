import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkImage, imageUpload } from "../../../utils/imageUpload";
import "./index.css";
const FormAddGroup = ({ onClose }) => {
  const initState = {
    groupName: "",
    detail: "",
    privacy: "public",
    avatarUrl: undefined,
  };
  const [groupData, setGroupData] = useState(initState);
  const [avatar, setAvatar] = useState("");
  const { groupName, detail, privacy, avatarUrl } = groupData;

  const { theme } = useSelector((state) => state);

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/groups/create",
      {
        name: groupName,
        avatar: avatarUrl
          ? avatarUrl
          : "https://res.cloudinary.com/hoquanglinh/image/upload/v1668926456/zbalcpggyn1r8ljjzcti.jpg",
        desc: detail,
        privacy: privacy,
      }
    );
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    const media = await imageUpload([file]);
    setGroupData({ ...groupData, avatarUrl: media[0].url });
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setGroupData({ ...groupData, [name]: value });
  };
  return (
    <div className="add_group_modal">
      <div className="add_group">
        <form
          className="add_group_form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div onClick={() => onClose()} className="btn_close">
            <i class="bx bx-x"></i>
          </div>

          <div className="info_avatar">
            <img
              src={
                avatar
                  ? URL.createObjectURL(avatar)
                  : "https://res.cloudinary.com/hoquanglinh/image/upload/v1668926456/zbalcpggyn1r8ljjzcti.jpg"
              }
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

          <button
            onClick={handleSubmit}
            className="btn btn-info w-100"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddGroup;
