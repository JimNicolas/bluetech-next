import styles from './page.module.css';
import Header from './components/Index/Header/Header';
import ServiceInfo from './components/Index/ServiceInfo/ServiceInfo';
import FeaturedProduct from './components/Index/FeaturedProduct/FeaturedProduct';
import ArticleSection from './components/Index/ArticleSection/ArticleSection';
import TrendingProduct from './components/Index/TrendingProducts/TrendingProducts';
import SubscribeNewsletter from './components/Index/SubscribeNewsletter/SubscribeNewsletter';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ServiceInfo />
        <FeaturedProduct />
        <ArticleSection
          title={'GeForce RTX 4080'}
          paragraph={
            'The NVIDIA® GeForce RTX™ 4080 delivers the ultra performance and features that enthusiast gamers and creators demand.'
          }
          srcImage={'/images/article.webp'}
        />
        <TrendingProduct />
        <SubscribeNewsletter />
      </main>
    </>
  );
}
