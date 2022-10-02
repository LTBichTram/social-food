import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { MessageIcon, NotifyIcon, UploadIcon } from "~/assets/icons";
import images from "~/assets/images";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from "./Header.module.scss";
import Search from "../Search";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <img src={images.logoS} alt="logo" className={cx("logo")} />

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
        <Tippy content="Tài khoản" delay={[0, 50]} placement="bottom">
          <Button className={cx("action-btn")}>
            <Image
              className={cx("user-avatar")}
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/280599572_331052409159480_1604299161921771527_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7QbJ3Tf0BqEAX9HJWpw&tn=_vHnJ0jU80hdjBvA&_nc_ht=scontent.fsgn2-7.fna&oh=00_AT9W5HwPzhjck2XpGmsgXXa4ILMBUz6tUh-86xVq5vTa7A&oe=633E4D59"
            />
          </Button>
        </Tippy>
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
