'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { PageIcon, EyeIcon } from '../components/common/Icon';
import Button from '../components/common/Button/Button';
import { useState } from 'react';
import { loginAuthentication } from '@/app/api/bluetechApi';
import { useRouter } from 'next/navigation';
import API_URL from '@/app/config';

export const metadata = {
  title: 'Login',
};
export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const router = useRouter();

  const handleClickOnShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandle = async (event) => {
    event.preventDefault();
    const { authentication } = await loginAuthentication(
      `${API_URL}/loginAuthentication`,
      event.target.email.value,
      event.target.password.value
    );
    authentication ? router.push('/') : setLoginFailed(true);
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles.containerLeft}>
          <PageIcon className={styles.icon} />
          <h1 className={styles.leftTitle}>BlueTech</h1>
        </div>
        <div className={styles.containerRight}>
          <h1 className={styles.titleRight}>Welcome Back</h1>
          <form className={styles.form} onSubmit={loginHandle}>
            <label className={styles.labelCredential} htmlFor='email'>
              Email
            </label>
            <input
              className={`${styles.email} ${
                loginFailed ? styles.badCredentials : ''
              }`}
              name='Email'
              type='email'
              placeholder='Enter Email'
              id='email'
            />
            <label className={styles.labelCredential} htmlFor='password'>
              Password
            </label>
            <div className={styles.containerPassword}>
              <input
                className={`${styles.password} ${
                  loginFailed ? styles.badCredentials : ''
                }`}
                name='Password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter Password'
                id='password'
              />
              <div className={styles.showPassword}>
                <EyeIcon
                  className={styles.iconEye}
                  onClick={handleClickOnShowPassword}
                />
              </div>
            </div>
            <div className={styles.help}>
              <div className={styles.containerCheckbox}>
                <input
                  className={styles.checkbox}
                  name='checkbox'
                  type='checkbox'
                  id='checkbox'
                />
                <label htmlFor='checkbox'>Keep me logged in</label>
              </div>
              <Link className={styles.forgotPassword} href={'/forgot-password'}>
                Forgot your password
              </Link>
            </div>
            <Button
              style={{ width: '100%' }}
              type={'submit'}
              value={'Sign In'}
            />
          </form>

          <span className={styles.lastSpan}>
            Don&apos;t have an account Sign up{' '}
            <Link className={styles.lastSpanLink} href={'/register'}>
              here
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}
