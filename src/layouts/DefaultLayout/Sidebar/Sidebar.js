import classNames from 'classnames/bind';

import config from '~/configs';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
  HomeIconRegular,
  GroupUserIconRegular,
  LiveIconRegular,
  HomeIconSolid,
  GroupUserIconSolid,
  LiveIconSolid,
} from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIconRegular />}
          activeIcon={<HomeIconSolid />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<GroupUserIconRegular />}
          activeIcon={<GroupUserIconSolid />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIconRegular />}
          activeIcon={<LiveIconSolid />}
        />
      </Menu>
    </div>
  );
}

export default Sidebar;
