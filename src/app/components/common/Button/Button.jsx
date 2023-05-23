import styles from './Button.module.css';
export default function Button({ text, type, value }) {
  return type == 'submit' ? (
    <input type={type} className={styles.buttonInput} value={value}></input>
  ) : (
    <button className={styles.button}>{text}</button>
  );
}
