'use client';
import Link from 'next/link';
import styles from './InLoggedOption.module.css';
import { DownIcon } from '../../Icon';
import { useState } from 'react';
import { logoutFetch } from '@/app/api/bluetechApi';
import { useSelector } from 'react-redux';
import { deleteCookie } from '@/app/utils/Cookies';
import { useRouter } from 'next/navigation';
export default function InLoggedOption() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleButtonMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    const container = document.querySelector(`.${styles.container}`);
    let heightElement;
    if (isOpenMenu) {
      heightElement = 4;
    } else {
      heightElement = container.children.length * 4;
    }
    container.style.height = heightElement + 'rem';
  };
  const router = useRouter();
  const logoutHandle = async () => {
    const { result } = await logoutFetch(`${process.env.API_URL}/logout`);
    if (result) {
      await deleteCookie();
    }
    router.push('/');
  };
  const username = useSelector((state) => state.userLoggedReducer.username);
  return (
    <>
      <div className={styles.componentContainer}>
        <ul className={styles.container}>
          <li className={styles.name}>
            <span className={`${styles.title} ${styles.listButton}`}>
              Hi, {username}
            </span>
            <button className={styles.showMore} onClick={handleButtonMenu}>
              <DownIcon className={styles.svg} />
            </button>
          </li>
          <li className={styles.listButton}>
            <Link
              className={`${styles.enlace} ${styles.textButton}`}
              href={'/account'}
            >
              Account
            </Link>
          </li>
          <li className={styles.listButton}>
            <button
              className={`${styles.logOutButton} ${styles.textButton}`}
              onClick={logoutHandle}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
