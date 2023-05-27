import Link from 'next/link';
import { PageIcon } from '../Icon';
import styles from './Sign.module.css';
import SignForm from './Form/SignForm';
// El prop type recibe el valor signIn o signUp
export default function Sign({ type, namePage, title }) {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.containerLeft}>
          <PageIcon className={styles.icon} />
          <h1 className={styles.leftTitle}>{namePage}</h1>
        </div>
        <div
          className={`${styles.containerRight} ${
            type == 'signIn' ? '' : styles.containerSignUp
          }`}
        >
          <h1 className={styles.titleRight}>{title}</h1>
          <SignForm type={type} />
          <span className={styles.lastSpan}>
            {type == 'signIn' ? (
              <>Don&apos;t have an account Sign up </>
            ) : (
              <>Already a member? {''}</>
            )}
            <Link
              className={styles.lastSpanLink}
              href={type == 'signIn' ? '/register' : '/signIn'}
            >
              {type == 'signIn' ? <>here</> : <>Sign In</>}
            </Link>
          </span>
        </div>
      </main>
    </>
  );
}
