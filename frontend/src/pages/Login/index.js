import React from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx("container")}>
      <form action="" className={cx("card")}>
        <img src={images.logoS} class={cx("logoS")} alt="" />
        <h2>Đăng nhập</h2>
        <div className={cx("input-group")}>
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            placeholder=" "
            requiredb
          />
          <label for="loginUser">Email</label>
        </div>
        <div className={cx("input-group")}>
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            placeholder=" "
            required
          />
          <label for="loginPassword">Mật khẩu</label>
        </div>
        <button type="submit" value="Login" className="btn">
          Đăng nhập
        </button>
        <div className={cx("forgot-pw")}>Quên mật khẩu?</div>
      </form>
      <img src={images.login} alt="" />
    </div>
  );
};

export default Login;
