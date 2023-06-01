'use client';
import styles from './page.module.css';
import { PageIcon, EyeIcon } from '../components/common/Icon';
import Link from 'next/link';
import Button from '../components/common/Button/Button';
import { useState } from 'react';
import { register } from '@/app/api/bluetechApi';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [registeredFailed, setRegisteredFailed] = useState(false);
  const router = useRouter();

  const handleClickOnShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const registerHandle = async (event) => {
    event.preventDefault();
    const { registered } = await register(
      `${process.env.API_URL}/register`,
      event.target.username.value,
      event.target.email.value,
      event.target.password.value
    );
    registered ? router.push('/') : setRegisteredFailed(true);
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles.containerLeft}>
          <PageIcon className={styles.icon} />
          <h1 className={styles.leftTitle}>BlueTech</h1>
        </div>
        <div className={`${styles.containerRight} ${styles.containerSignUp}`}>
          <h1 className={styles.titleRight}>Welcome</h1>
          <form className={styles.form} onSubmit={registerHandle}>
            {registeredFailed ? (
              <>
                <div className={styles.containerBubbleRegisteredFailed}>
                  <h4>This email is already registered</h4>
                </div>
              </>
            ) : (
              ''
            )}

            <label className={styles.labelCredential} htmlFor='Username'>
              Username
            </label>
            <input
              className={styles.fullname}
              name='username'
              type='text'
              placeholder='Enter Username'
              id='username'
            />
            <label className={styles.labelCredential} htmlFor='email'>
              Email
            </label>
            <input
              className={styles.email}
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
                className={styles.password}
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
                <label htmlFor='checkbox'>I Aggre</label>
              </div>
            </div>

            <Button
              style={{ width: '100%' }}
              type={'submit'}
              value={'Sign Up'}
            />
          </form>
          <span className={styles.lastSpan}>
            Already a member? {''}
            <Link className={styles.lastSpanLink} href={'/signIn'}>
              Sign In
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}
