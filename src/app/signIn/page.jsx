import Sign from '../components/common/Sign/Sign.jsx';
export const metadata = {
  title: 'Login',
};
export default function SignIn() {
  return (
    <>
      <Sign type={'signIn'} namePage={'BlueTech'} title={'Welcome Back'} />;
    </>
  );
}
