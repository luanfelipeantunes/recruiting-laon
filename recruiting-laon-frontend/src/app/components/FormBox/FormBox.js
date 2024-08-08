import styles from "./FormBox.module.css";

function FormBox({title, subtitle, children}){
    return(
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h1 className="semibold24">{title}</h1>
                <h2 className="regular16" style={{marginBottom: '35px'}}>{subtitle}</h2>
                {children}
            </div>
        </div>
    )
}

export default FormBox;