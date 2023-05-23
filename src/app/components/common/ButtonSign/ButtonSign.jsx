import Link from 'next/link';
import styles from './ButtonSign.module.css';
export default function ButtonSign({
  backgroundColor,
  color,
  link,
  text,
  onClick,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
  };
  return (
    <Link
      className={styles.LinkButton}
      href={link}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}
