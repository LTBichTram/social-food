import { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { CgProfile } from "react-icons/cg";
import { MdLanguage, MdOutlineHelpOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

import routesConfig from "~/config/routes";
import { MessageIcon, NotifyIcon, UploadIcon } from "~/assets/icons";
import images from "~/assets/images";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from "./Header.module.scss";
import Search from "../Search";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    title: "Trang cá nhân",
    icon: <CgProfile />,
  },
  {
    title: "Tiếng việt",
    icon: <MdLanguage />,
    children: {
      title: "Language",
      data: [
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Vietnamese",
          code: "vi",
          type: "language",
        },
      ],
    },
  },
  {
    title: "Cài đặt",
    icon: <FiSettings />,
  },
  {
    title: "Phản hồi và trợ giúp",
    icon: <MdOutlineHelpOutline />,
  },
  {
    title: "Đăng xuất",
    icon: <AiOutlineLogout />,
    separate: true,
  },
];

const handleMenuChange = (menuItems) => {
  switch (menuItems.type) {
    case "language":
      break;
    default:
  }
};

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <div className={cx("header")}>
      <Link to={routesConfig.home}>
        <Image src={images.logoS} alt="logo" className={cx("logo")} />
      </Link>

      <Search />

      <div className={cx("actions")}>
        <Tippy content="Tải lên" delay={[0, 50]} placement="bottom">
          <Button className={cx("action-btn")}>
            <UploadIcon />
          </Button>
        </Tippy>
        <Tippy content="Tin nhắn" delay={[0, 50]} placement="bottom">
          <Button className={cx("action-btn")}>
            <MessageIcon />
            <span className={cx("badge")}>2</span>
          </Button>
        </Tippy>
        <Tippy content="Thông báo" delay={[0, 50]} placement="bottom">
          <Button className={cx("action-btn")}>
            <NotifyIcon />
            <span className={cx("badge")}>6</span>
          </Button>
        </Tippy>
        <Menu
          isShowMenu={isShowMenu}
          isShow
          items={MENU_ITEMS}
          onChangeMenu={handleMenuChange}
        >
          <Image
            onClick={handleShowMenu}
            className={cx("user-avatar")}
            src={images.profile}
          />
        </Menu>
        {/* <Button>Sign up</Button>
        <Button
          primary
          // small
          // disabled
          rightIcon={<AiOutlineLogin />}
          onClick={() => alert("hiiii")}
        >
          Login
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
