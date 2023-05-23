import Link from 'next/link';
import styles from './Header.module.css';
export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.titleHeader}>The best technology</h1>
          <h3 className={styles.subtitleHeader}>
            Elevate your technological experience with our selection of PC
            products
          </h3>
          <Link className={styles.linkHeader} href={'/products'}>
            SHOP NOW
          </Link>
        </div>
      </header>
    </>
  );
}
