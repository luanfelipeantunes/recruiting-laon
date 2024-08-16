import styles from "./Alert.module.css";

function Alert(){
    return (
        <div className={styles.alert} role="alert">
            Credenciais incorretas!
        </div>
    );
}

export default Alert;