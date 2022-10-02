import React from "react";
import classNames from "classnames/bind";
import { BsFillPatchCheckFill } from "react-icons/bs";

import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <li className={cx("wrapper")}>
      <a className={cx("account-item")}>
        <div className={cx("avatar")}>
          <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/226416125_142344528030270_679036138719712789_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=gwLyliW-D_gAX8aVaBV&tn=_vHnJ0jU80hdjBvA&_nc_ht=scontent.fsgn2-8.fna&oh=00_AT8WBfYeJmkTWmDI2WB1i9bEb_jKWPMK8nmxMwDLoiQPRg&oe=633D1ED4" />
        </div>
        <div className={cx("info")}>
          <div className={cx("name")}>
            <span>Hồ Quang Linh</span>
            <BsFillPatchCheckFill className={cx("check")} />
          </div>
          <span className={cx("username")}>quanglinhbt</span>
        </div>
      </a>
    </li>
  );
};

export default AccountItem;
