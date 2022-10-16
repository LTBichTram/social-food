import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { useDebounce } from "~/hooks";
import * as searchServices from "~/services/searchService";
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

  const handleOnChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    console.log(searchValue);
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const fetchApi = async () => {
      const res = await searchServices.search(debounce);
      setSearchResult(res);
      setLoading(false);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  return (
    <div>
      <HeadlessTippy
        content="Tìm kiếm"
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              {searchResult.map((item) => (
                <AccountItem
                  key={item.id}
                  data={item}
                  className={cx("search-body")}
                />
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
            onChange={handleOnChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <AiFillCloseCircle />
            </button>
          )}
          {loading && <AiOutlineLoading3Quarters className={cx("loading")} />}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <BsSearch />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
