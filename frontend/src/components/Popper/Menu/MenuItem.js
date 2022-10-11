import React from "react";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
  const classes = cx("menu-item", {
    separate: data.separate,
  });

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
