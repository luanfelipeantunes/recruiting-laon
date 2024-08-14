import styles from "./styles/Background.module.css";

function Background({ children }) {
  return (
    <div className={styles.background}>
      {children}
    </div>
  );
}

export default Background;