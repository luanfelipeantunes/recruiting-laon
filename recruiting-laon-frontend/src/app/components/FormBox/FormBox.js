import styles from "./FormBox.module.css";

function FormBox({children}){
    return(
        <div className={styles.container}>
            <div className={styles.formBox}>

                {children}
                
            </div>
        </div>
    )
}

export default FormBox;