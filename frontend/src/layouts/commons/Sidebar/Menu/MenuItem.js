import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const MenuItem = ({ to, title, icon, activeIcon }) => {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
    >
      <div className={cx("menu-wrapper")}>
        <span className={cx("icon")}>{icon}</span>
        <span className={cx("icon-active")}>{activeIcon}</span>
        <span className={cx("title")}>{title}</span>
      </div>
    </NavLink>
  );
};

export default MenuItem;
