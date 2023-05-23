import styles from './ButtonShowMore.module.css';
import Button from '../Button/Button';

export default function ButtonShowMore({ submit }) {
  return (
    <>
      <div className={styles.showMore}>
        <Button text={'SHOW MORE'} submit={submit} />
      </div>
    </>
  );
}
