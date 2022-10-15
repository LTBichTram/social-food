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
  className,
  ...passProps
}) => {
  const props = {
    onClick,
    ...passProps,
  };

  let Comp = "button";
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  // Deelete event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof (props[key] === "function")) {
        delete props[key];
      }
    });
  }

  const classes = cx("wrapper", {
    [className]: className,
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
