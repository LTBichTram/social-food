import React from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], hideOnClick = false }) => {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      // visible
      delay={[0, 500]}
      offset={[12, 5]}
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>{renderItems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
