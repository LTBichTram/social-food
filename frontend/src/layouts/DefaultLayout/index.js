import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/commons/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        {console.log("kkkk")}
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
