'use client';
import Link from 'next/link';
import styles from './ListNav.module.css';

export default function ListNav({ links, isOpen, closeMenu }) {
  return (
    <ul className={`${styles.listNav} ${isOpen ? styles.open : ''}`}>
      {links.map(({ route, label }) => (
        <li key={route} className={styles.navLink}>
          <Link href={route} onClick={closeMenu}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
