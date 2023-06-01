'use client';
import styles from './page.module.css';
import { getUsersData, logoutFetch } from '../api/bluetechApi';
import { useRouter } from 'next/navigation';
function Profile() {
  const router = useRouter();
  const handleShowProfile = async () => {
    const datos = await getUsersData(`${process.env.API_URL}/obtenerCookies`);
    console.log(datos);
  };
  const handleLogout = async () => {
    const isLogin = await logoutFetch(`${process.env.API_URL}/logout`);
    isLogin ? router.push('/') : '';
  };
  return (
    <>
      <h1 className={styles.title}>Perfil de usuario</h1>
      <button onClick={handleShowProfile}>Mostrar perfil</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
