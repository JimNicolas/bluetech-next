'use client';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { SearchIcon, FavoriteIcon, CartIcon, ToggleIcon } from '../Icon';
import ListNav from './ListNav/ListNav';
import ButtonSign from './ButtonSign/ButtonSign.jsx';
import InLoggedOption from './InLoggedOption/InLoggedOption';
import { useEffect, useState } from 'react';
import ObtenerUsuario from '@/app/utils/ObtenerUsuarios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/redux/slices/userLoggedSlices';

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
    console.log('Se ejecuta el use effect');
    const reqData = async () => {
      try {
        console.log('Se ejecutó');
        const tokenData = await ObtenerUsuario();
        console.log(tokenData);
        dispatch(
          login({
            isLogged: true,
            username: tokenData.username,
            email: tokenData.email,
            password: tokenData.password,
          })
        );
      } catch (error) {
        console.log('No se realizó la solicitud');
      }
    };
    reqData();
  }, []);
  const username = useSelector((state) => state.userLoggedReducer.username);
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
      {!isLogged ? (
        <ButtonSign
          backgroundColor={'#00FFFF'}
          color={'#071E3D'}
          link={'/signIn'}
          text={username}
          onClick={hiddenMenu}
        ></ButtonSign>
      ) : (
        <InLoggedOption />
      )}
    </nav>
  );
}
