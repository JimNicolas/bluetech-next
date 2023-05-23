import { CallIcon, SecureIcon, TruckIcon } from '../../common/Icon';
import styles from './ServiceInfo.module.css';
export default function ServiceInfo() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.elementContainer}>
          <div className={styles.containerIcon}>
            <TruckIcon className={styles.icon} />
          </div>
          <h3>Free Delivery</h3>
          <p>For all orders above $35</p>
        </div>
        <div className={styles.elementContainer}>
          <div className={styles.containerIcon}>
            <SecureIcon className={styles.icon} />
          </div>
          <h3>Secure Payment</h3>
          <p>100% Secure payment methods</p>
        </div>
        <div className={styles.elementContainer}>
          <div className={styles.containerIcon}>
            <CallIcon className={styles.icon} />
          </div>
          <h3>24/7 Support</h3>
          <p>We have dedicated Support</p>
        </div>
      </section>
    </>
  );
}
