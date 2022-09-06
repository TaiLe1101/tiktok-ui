import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import Image from '~/component/Image';

import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src="" alt=""></Image>
        <Button primary className={cx('btn')}>
          Follow
        </Button>
      </header>
      <main className={cx('body')}>
        <h3 className={cx('nickname')}>
          <strong>LeTrannnnnTanTaiii</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />{' '}
        </h3>
        <Link to="/@letrantantai" className={cx('name')}>
          Lê Trần Tấn Tài
        </Link>
      </main>
      <footer className={cx('footer')}>
        <div className={cx('wrapper-text')}>
          <p className={cx('amount')}>18.4M</p>
          <p className={cx('acction')}>Follower</p>
        </div>

        <div className={cx('wrapper-text')}>
          <p className={cx('amount')}>18M</p>
          <p className={cx('acction')}>Like</p>
        </div>
      </footer>
    </div>
  );
}

export default AccountPreview;
