import styles from './Background.module.css';

export default function Background({ children }) {
  return (
    <div className={styles.background}>
      {children}
    </div>
  );
}