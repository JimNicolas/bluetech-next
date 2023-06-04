'use client';
import Link from 'next/link';
import styles from './InLoggedOption.module.css';
import { DownIcon } from '../../Icon';
import { useState } from 'react';
import { logoutFetch } from '@/app/api/bluetechApi';
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
  return (
    <>
      <div className={styles.componentContainer}>
        <ul className={styles.container}>
          <li className={styles.name}>
            <span className={`${styles.title} ${styles.listButton}`}>
              Hi, Nico
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
              onClick={() => logoutFetch(`${process.env.API_URL}`)}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
