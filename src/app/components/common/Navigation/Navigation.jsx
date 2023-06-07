'use client';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { SearchIcon, FavoriteIcon, CartIcon, ToggleIcon } from '../Icon';
import ListNav from './ListNav/ListNav';
import ButtonSign from './ButtonSign/ButtonSign.jsx';
import InLoggedOption from './InLoggedOption/InLoggedOption';
import { useEffect, useState } from 'react';
import ObtenerUsuario from '@/app/utils/Cookies';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, login } from '@/redux/slices/userLoggedSlices';

const DATA_LINK = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Products',
    route: '/products',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
  {
    label: 'About',
    route: '/about',
  },
];
const nameLogo = 'BlueTech';

export default function Navigation() {
  const dispatch = useDispatch();
  const [onClick, setOnClick] = useState(false);

  const toggle = () => {
    setOnClick(!onClick);
  };
  const hiddenMenu = () => {
    if (onClick) {
      setOnClick(!onClick);
    }
  };
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  const isLogged = useSelector((state) => state.userLoggedReducer.isLogged);
  return (
    <nav className={styles.navigation}>
      {/* Toggle */}
      <button className={styles.toggle} onClick={toggle}>
        <ToggleIcon />
      </button>

      {/* Logo */}
      <Link className={styles.logo} href={'/'} onClick={hiddenMenu}>
        {nameLogo}
      </Link>

      {/* Enlaces */}
      <ListNav links={DATA_LINK} isOpen={onClick} closeMenu={toggle}></ListNav>

      <div className={styles.containerIcon}>
        <Link href='/search' onClick={hiddenMenu}>
          <SearchIcon className={styles.icon} />
        </Link>
        <Link href='/favorite' onClick={hiddenMenu}>
          <FavoriteIcon className={styles.icon} />
        </Link>
        <Link href='/cart' onClick={hiddenMenu}>
          <CartIcon className={styles.icon} />
        </Link>
      </div>
      {isLogged ? (
        <InLoggedOption />
      ) : (
        <ButtonSign
          backgroundColor={'#00FFFF'}
          color={'#071E3D'}
          link={'/signIn'}
          text={'SIGN IN'}
          onClick={hiddenMenu}
        ></ButtonSign>
      )}
    </nav>
  );
}
