import React from "react";
import classNames from "classnames/bind";
import { IoStorefrontOutline, IoStorefrontSharp } from "react-icons/io5";
import { RiCompassDiscoverFill, RiCompassDiscoverLine } from "react-icons/ri";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import styles from "./Sidebar.module.scss";
import Menu from "./Menu";
import { MenuItem } from "./Menu";
import config from "~/config";

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("sidebar")}>
      <Menu>
        <MenuItem
          to={config.routes.home}
          icon={<AiOutlineHome />}
          activeIcon={<AiFillHome />}
          title="Yummy"
        />
        <MenuItem
          to={config.routes.stores}
          icon={<IoStorefrontOutline />}
          activeIcon={<IoStorefrontSharp />}
          title="Cửa hàng"
        />
        <MenuItem
          to={config.routes.discover}
          icon={<RiCompassDiscoverLine />}
          activeIcon={<RiCompassDiscoverFill />}
          title="Khám phá"
        />
        <MenuItem
          to={config.routes.mylove}
          icon={<FaRegHeart />}
          activeIcon={<FaHeart />}
          title="Yêu thích"
        />
      </Menu>
    </div>
  );
};

export default Sidebar;
