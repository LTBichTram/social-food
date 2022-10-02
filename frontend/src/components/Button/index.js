import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  primary = false,
  disabled = false,
  small = false,
  large = false,
  onClick,
  leftIcon,
  rightIcon,
  children,
  ...passProps
}) => {
  let Comp = "button";
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const props = {
    onClick,
    ...passProps,
  };

  //   Deelete event listener when btn is disabled
  if (disabled) {
    Object.keys(props).map((key) => {
      if (key.startsWith("on") && typeof (props[key] === "function")) {
        delete props[key];
      }
    });
  }

  const classes = cx("wrapper", {
    [classNames]: classNames,
    primary,
    disabled,
    small,
    large,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
