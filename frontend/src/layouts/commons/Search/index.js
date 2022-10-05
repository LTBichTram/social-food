import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useDebounce } from "~/hooks";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
  const inputRef = useRef();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounce = useDebounce(searchValue, 500);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    console.log(searchValue);
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounce
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  return (
    <HeadlessTippy
      content="Tìm kiếm"
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} />
            ))}
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
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <AiFillCloseCircle />
          </button>
        )}
        {loading && <AiOutlineLoading3Quarters className={cx("loading")} />}
        <button className={cx("search-btn")}>
          <BsSearch />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
