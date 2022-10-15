import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { BsFillPatchCheckFill } from "react-icons/bs";

import styles from "./AccountItem.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <Image alt={data.full_name} src={data.avatar} />
      </div>
      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && <BsFillPatchCheckFill className={cx("check")} />}
        </div>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
