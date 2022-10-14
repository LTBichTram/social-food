import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import MenuItem from "./MenuItem";
import Header from "./Header";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({
  children,
  items = [],
  hideOnClick = false,
  onChangeMenu = { defaultFn },
}) => {
  const [level, setLevel] = useState([{ data: items }]);
  const current = level[level.length - 1];

  // Handle back for menu
  const handleBack = () => {
    setLevel((prev) => prev.slice(0, prev.length - 1));
  };

  // Render item for menu
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setLevel((prev) => [...prev, item.children]);
            } else {
              onChangeMenu(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      visible
      delay={[0, 500]}
      offset={[12, 5]}
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {level.length > 1 && (
              <Header onBack={handleBack} title={current.title}></Header>
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
