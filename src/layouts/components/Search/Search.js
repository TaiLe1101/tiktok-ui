import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/component/AccountItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);

      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debouncedValue]);

  //Handle Event
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([]);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleInputValue = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  return (
    //Using a wrapper <div> or <span> tag around the
    // reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        render={(attrs) => {
          return (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                {searchResult.map((result) => {
                  return <AccountItem key={result.id} data={result} />;
                })}
              </PopperWrapper>
            </div>
          );
        }}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            type="text"
            placeholder="Search account and videos"
            spellCheck={false}
            onChange={handleInputValue}
            onFocus={() => setShowResult(true)}
          />
          {searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          )}

          <button
            className={cx('search-btn')}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
