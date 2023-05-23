import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './ProductItem.module.css';
import Button from '../Button/Button';
export default function ProductItem({
  route,
  srcImage,
  imageAlt,
  title,
  price,
  realPrice,
}) {
  return (
    <>
      <article className={styles.container}>
        <Link href={route}>
          <Image
            src={srcImage}
            layout='responsive'
            width={280}
            height={280}
            alt={imageAlt}
          />
          <h4 className={styles.name}>{title}</h4>
        </Link>
        <div className={styles.containerShop}>
          <p className={styles.priceOffer}>${price}</p>
          <p className={styles.priceReal}>${realPrice}</p>
        </div>
        <Button text={'ADD CART'} />
      </article>
    </>
  );
}
