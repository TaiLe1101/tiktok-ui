import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
            } else {
              if (onChange) {
                onChange(item);
              }
            }
          }}
        ></MenuItem>
      );
    });
  };

  const backMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  //reset to first menu
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      offset={[12, 8]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => {
        return (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header title={current.title} onBack={backMenu}></Header>
              )}
              <div className={cx('menu-body')}> {renderItems()}</div>
            </PopperWrapper>
          </div>
        );
      }}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};

export default Menu;
