'use client';
import styles from './SignForm.module.css';
import Link from 'next/link';
import { EyeIcon } from '../../Icon';
import Button from '../../Button/Button';
import { useState } from 'react';
import { loginAuthentication, register } from '@/app/api/bluetechApi';
import { useRouter } from 'next/navigation';
import API_URL from '@/app/config';

export default function SignForm({ type }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [registeredFailed, setRegisteredFailed] = useState(false);
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
  const registerHandle = async (event) => {
    event.preventDefault();
    const { registered } = await register(
      `${API_URL}/register`,
      event.target.username.value,
      event.target.email.value,
      event.target.password.value
    );
    registered ? router.push('/') : setRegisteredFailed(true);
  };
  return (
    <>
      <form
        className={styles.form}
        onSubmit={type == 'signIn' ? loginHandle : registerHandle}
      >
        {registeredFailed ? (
          <>
            <div className={styles.containerBubbleRegisteredFailed}>
              <h4>Este correo ya se encuentra reguistrado</h4>
            </div>
          </>
        ) : (
          ''
        )}
        {type === 'signUp' ? (
          <>
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
          </>
        ) : (
          ''
        )}
        <label className={styles.labelCredential} htmlFor='email'>
          Email
        </label>
        <input
          className={`${styles.email} ${
            loginFailed && type == 'signIn' ? styles.badCredentials : ''
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
              loginFailed && type == 'signIn' ? styles.badCredentials : ''
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
            <label htmlFor='checkbox'>
              {type === 'signUp' ? <>I Aggre</> : <>Keep me logged in</>}
            </label>
          </div>
          {type == 'signUp' ? (
            ''
          ) : (
            <>
              <Link className={styles.forgotPassword} href={'/forgot-password'}>
                Forgot your password
              </Link>
            </>
          )}
        </div>

        <Button
          style={{ width: '100%' }}
          type={'submit'}
          value={type == 'signIn' ? 'Sign In' : 'Sign Up'}
        />
      </form>
    </>
  );
}
