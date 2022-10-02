import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2]);
    }, 0);
  }, []);

  return (
    <HeadlessTippy
      content="Tìm kiếm"
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          placeholder="Tìm kiếm"
          spellCheck={false}
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            console.log("tram");
            setShowResult(true);
          }}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <AiFillCloseCircle />
          </button>
        )}
        {/* <AiOutlineLoading3Quarters className={cx("loading")} /> */}
        <button className={cx("search-btn")}>
          <BsSearch />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
