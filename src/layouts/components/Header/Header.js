import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faUser,
  faTicket,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/component/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/component/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';
import config from '~/configs';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@quynh',
    },
    {
      icon: <FontAwesomeIcon icon={faTicket} />,
      title: 'Get coins',
      to: '/get-coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link className={cx('logo-link')} to={config.routes.home}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Search></Search>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Button
                rounded
                className={cx('outline')}
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                to="/upload"
              >
                Upload
              </Button>
              <Tippy delay={[0, 200]} content="Message video">
                <button className={cx('action-btn')}>
                  <MessageIcon></MessageIcon>
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Inbox">
                <button className={cx('action-btn')}>
                  <InboxIcon></InboxIcon>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                rounded
                className={cx('outline')}
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.18169-9/13096282_115586658847599_318640396520884246_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YtOngG3xjtQAX-QVRLN&tn=QZPNSKVadYcP5F0A&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_vajPAVeRCj1wPvSb-sQVh4U_l-oslAxuLwcVp5L8xqA&oe=630DC3E9"
                alt="Nguyen Van A"
                className={cx('user-avatar')}
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
