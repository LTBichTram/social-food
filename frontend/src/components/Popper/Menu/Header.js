import React from "react";
import classNames from "classnames/bind";
import { MdOutlineArrowBack } from "react-icons/md";

import styles from "./Menu.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

const Header = ({ title, onBack = () => {} }) => {
  return (
    <header className={cx("header")}>
      <Button onClick={onBack} className={cx("back-btn")}>
        <MdOutlineArrowBack />
      </Button>
      <span className={cx("header-title")}>{title}</span>
    </header>
  );
};

export default Header;
