import styles from './Button.module.css';
export default function Button({ text, type, value, style }) {
  return type == 'submit' ? (
    <input
      style={style}
      type={type}
      className={styles.buttonInput}
      value={value}
    ></input>
  ) : (
    <button className={styles.button}>{text}</button>
  );
}
