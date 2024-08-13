import styles from "./Button.module.css";

function Button({children, style}){
    return(
        <button className={`${styles.btn} semibold16`} style={style}>
            {children}
        </button>
    )
}

export default Button;