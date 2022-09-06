import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import Image from '../Image';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview></AccountPreview>
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
        offset={[-20, 0]}
      >
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1650716165964802.jpeg?x-expires=1661101200&x-signature=J6OFwwyo82Yv12mC8f%2F0u27lMp0%3D"
          />
          <div className={cx('item-info')}>
            <p className={cx('username')}>
              <strong>chipu1999</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Chi Pu nè</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
