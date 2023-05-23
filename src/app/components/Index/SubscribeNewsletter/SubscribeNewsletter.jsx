import Button from '../../common/Button/Button';
import styles from './SubscribeNewsletter.module.css';
export default function SubscribeNewsletter() {
  return (
    <>
      <section className={styles.container} id='newsletter'>
        <h2 className={styles.title}>Get in Touch</h2>
        <p>
          Subscribe to our weekly newsletter and receive exclusive offers on
          products you love!
        </p>
        <form className={styles.form}>
          <label htmlFor='email-newsletter'></label>
          <input
            className={styles.inputText}
            name='email-newsletter'
            type='text'
            placeholder='Email Address'
          ></input>
          <Button
            className={styles.inputSubmit}
            type='submit'
            value={'SUBSCRIBE'}
          ></Button>
        </form>
      </section>
    </>
  );
}
