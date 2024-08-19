import styles from "./FormBox.module.css";

function FormBox({ children }) {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>

                <div className={styles.elements}>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default FormBox;