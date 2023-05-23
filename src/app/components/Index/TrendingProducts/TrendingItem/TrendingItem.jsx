import Link from 'next/link';
import styles from './TrendingItem.module.css';
import Image from 'next/image';
export default function TrendingItem({
  route,
  srcImg,
  title,
  description,
  alt,
}) {
  return (
    <>
      <article className={styles.container}>
        <Link href={route} className={styles.enlace}>
          <Image
            className={styles.image}
            src={srcImg}
            alt={alt}
            width={240}
            height={220}
            style={{ objectFit: 'containt' }}
          />
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p>{description}</p>
      </article>
    </>
  );
}
