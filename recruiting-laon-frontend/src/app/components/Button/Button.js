import styles from "./Button.module.css";

function Button({children}){
    return(
        <button className={`${styles.btn} semibold16`}>
            {children}
        </button>
    )
}

export default Button;