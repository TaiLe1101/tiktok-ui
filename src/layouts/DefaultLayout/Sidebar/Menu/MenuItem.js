import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.mudole.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      className={(nav) => cx('menu-item', { active: nav.isActive })}
      to={to}
    >
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default Menu;
