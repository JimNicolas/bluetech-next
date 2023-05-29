// COMPONENTE PARA PROBAR REDUX STORE
'use client';
import { useSelector } from 'react-redux';
import styles from './DatosUsuario.module.css';
export default function DatosUsuario() {
  const user = useSelector((state) => state.userLoggedReducer);
  console.log(user);
  return (
    <>
      <div className={styles.container}>
        <h1>Username: {user.username} </h1>
        <h1>Email: {user.email} </h1>
        <h1>Password: {user.password} </h1>
      </div>
    </>
  );
}
