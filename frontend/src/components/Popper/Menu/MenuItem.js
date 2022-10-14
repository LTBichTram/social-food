import React from "react";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
  return (
    <>
      {data.separate ? <div className={cx("separate")}></div> : <></>}
      <Button
        className={cx("menu-item")}
        leftIcon={
          data.type === undefined ? (
            <span className={cx("icon-menu")}>{data.icon}</span>
          ) : (
            data.icon
          )
        }
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </>
  );
};

export default MenuItem;
