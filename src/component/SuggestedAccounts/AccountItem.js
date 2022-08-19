import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1650716165964802.jpeg?x-expires=1661101200&x-signature=J6OFwwyo82Yv12mC8f%2F0u27lMp0%3D"
      />
      <div className={cx('item-info')}>
        <p className={cx('username')}>
          <strong>chipu1999</strong>
          <FontAwesomeIcon icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Chi Pu nè</p>
      </div>
    </div>
  );
}

export default AccountItem;
