import styles from './TrendingProducts.module.css';
import TrendingItem from './TrendingItem/TrendingItem';
import ButtonShowMore from '../../common/ButtonShowMore/ButtonShowMore';
const Item = [
  {
    id: 1,
    route: 'products/5',
    srcImg: '/images/trending-1.webp',
    title: 'MX MASTER 3S',
    description:
      'Meet MX Master 3S – an iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass134 mm minimum glass thickness. sensor.',
  },
  {
    id: 2,
    route: 'products/5',
    srcImg: '/images/trending-2.webp',
    title: 'MSI GeForce RTX 4080 16GB SUPRIM X',
    description:
      'MSI GeForce RTX 4080 16GB SUPRIM X Gaming Graphics Card - 16GB GDDR6X, 2640 MHz, PCI Express Gen 4, 256-bit, 3x DP v 1.4a, HDMI 2.1a (Supports 4K & 8K HDR)',
  },
  {
    id: 3,
    route: 'products/6',
    srcImg: '/images/trending-3.webp',
    title: 'AMD Ryzen 5 5600X',
    description:
      'Be unstoppable with the unprecedented speed of the world’s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you’re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you’re always in the lead.',
  },
];
export default function TrendingProduct() {
  return (
    <>
      <section className={styles.container} id='trending'>
        <h2 className={styles.title}>Trending Product</h2>
        <div className={styles.containerProducts}>
          {Item.map((item) => (
            <TrendingItem key={item.id} {...item} alt={item.title} />
          ))}
        </div>
        <ButtonShowMore />
      </section>
    </>
  );
}
