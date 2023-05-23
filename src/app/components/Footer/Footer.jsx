import Link from 'next/link';
import styles from './Footer.module.css';
import { LocationIcon } from '../common/Icon';
import { CallIcon } from '../common/Icon';
import { EmailIcon } from '../common/Icon';
import Image from 'next/image';
const DATA = {
  LINKS: [
    {
      label: 'Privacy Policy',
      route: '/help/policy',
    },
    {
      label: 'Return Policy',
      route: '/help/return',
    },
    {
      label: 'Terms of Service',
      route: '/help/terms',
    },
    {
      label: 'Contact',
      route: '/contact',
    },
  ],

  CONTACT: {
    ubication: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    phone: '801-456-2833',
    email: 'Support@Blue-tech.com',
  },
};
export default function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.quickLinks}>
          <h2 className={styles.title}>Quick Links</h2>
          <ul className={styles.ulistLink}>
            {DATA.LINKS.map(({ route, label }) => (
              <li className={styles.listLink} key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <h2 className={styles.title}>Contact</h2>
          <ul className={styles.ulistContact}>
            <li>
              <LocationIcon className={styles.icon} />
              <p>{DATA.CONTACT.ubication}</p>
            </li>
            <li>
              <CallIcon className={styles.icon} />
              <p>{DATA.CONTACT.phone}</p>
            </li>
            <li>
              <EmailIcon className={styles.icon} />
              <p>{DATA.CONTACT.email}</p>
            </li>
          </ul>
        </div>
        <div className={styles.payMethod}>
          <h2 className={styles.title}>We Accept</h2>
          <ul className={styles.listPay}>
            <li>
              <Image
                src={'/images/pay-method/visa-card.webp'}
                alt='Visa Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/discover-card.webp'}
                alt='Discover Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/american-card.webp'}
                alt='American Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/master-card.webp'}
                alt='Master Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/jcb-card.webp'}
                alt='JCB Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/dinner-card.webp'}
                alt='Dinners Card'
                height={41}
                width={60}
              ></Image>
            </li>
            <li>
              <Image
                src={'/images/pay-method/paypal-card.webp'}
                alt='Paypal Card'
                height={41}
                width={60}
              ></Image>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
