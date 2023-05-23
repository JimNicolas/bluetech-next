import styles from './FeaturedProduct.module.css';
import ProductItem from '../../common/ProductItem/ProductItem';
import ButtonShowMore from '../../common/ButtonShowMore/ButtonShowMore';
const products = [
  {
    route: 'products/1',
    title: 'Intel Core i9-10900K [BX8070110900K]',
    price: 300.99,
    realPrice: 340.99,
    srcImage: '/images/product-1.webp',
    imageAlt: 'Intel i9-10K',
  },
  {
    route: 'products/2',
    title: 'AMD Ryzen 9 5900X [100-100000061WOF]',
    price: 325.73,
    realPrice: 569.99,
    srcImage: '/images/product-2.webp',
    imageAlt: 'Ryzen 9-59X',
  },
  {
    route: 'products/3',
    title: 'Intel Core i7-13700KF [BX8071513700KF]',
    price: 390.99,
    realPrice: 399.99,
    srcImage: '/images/product-3.webp',
    imageAlt: 'Intel i7-137KF',
  },
  {
    route: 'products/4',
    title: 'AMD Ryzen 7 3800XT [100-100000279WOF]',
    price: 239.99,
    realPrice: 449.99,
    srcImage: '/images/product-4.webp',
    imageAlt: 'Ryzen 9-59X',
  },
];
export default function FeaturedProduct() {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.titleSection}>Featured Product</h2>
        <div className={styles.containerGrid}>
          <header className={styles.header}>
            <h3 className={styles.titleHeader}>Explore More Product</h3>
          </header>
          <div className={styles.containerProducts}>
            {products.map(
              ({ route, title, price, realPrice, srcImage, imageAlt }) => (
                <ProductItem
                  key={route}
                  route={route}
                  title={title}
                  price={price}
                  realPrice={realPrice}
                  srcImage={srcImage}
                  imageAlt={imageAlt}
                />
              )
            )}
          </div>
        </div>
        <ButtonShowMore />
      </section>
    </>
  );
}
