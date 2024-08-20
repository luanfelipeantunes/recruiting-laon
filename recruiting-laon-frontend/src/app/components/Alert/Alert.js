import styles from "./Alert.module.css";

function Alert({ message }) {
    return (
        <div className={styles.alert} role="alert" >
            {message}
        </div>
    );
}

export default Alert;