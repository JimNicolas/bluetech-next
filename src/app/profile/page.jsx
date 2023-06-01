'use client';
import { getUsersData } from '../api/bluetechApi';
function Profile() {
  const handleShowProfile = async () => {
    const datos = await getUsersData(`${process.env.API_URL}/obtenerCookies`);
    console.log(datos);
  };
  return (
    <>
      <h1 style={{ color: '#00FFFF;' }}>Perfil de usuario</h1>
      <button onClick={handleShowProfile}>Mostrar perfil</button>
    </>
  );
}

export default Profile;
