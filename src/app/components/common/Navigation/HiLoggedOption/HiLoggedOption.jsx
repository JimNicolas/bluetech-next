'use client';
import Link from 'next/link';
import styles from './HiLoggedOption.module.css';
import { DownIcon } from '../../Icon';
import { useState } from 'react';
export default function HiLoggedOption() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleButtonMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <ul
        className={`${styles.container} ${
          isOpenMenu ? styles.open : styles.close
        }`}
      >
        <li className={styles.name}>
          <span className={styles.title}>Hi, Nico</span>
          <button className={styles.showMore} onClick={handleButtonMenu}>
            <DownIcon className={styles.svg} />
          </button>
        </li>
        <li>
          <Link href={'/account'}>Account</Link>
        </li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </>
  );
}
