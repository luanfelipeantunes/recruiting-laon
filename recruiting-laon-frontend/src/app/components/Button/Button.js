import styles from "./Button.module.css";

function Button({children, style, handleSubmit}) {
    return(
        <button 
            className={`${styles.btn} semibold16`} style={style}
            onClick={handleSubmit}
        >
            {children}
        </button>
    )
}

export default Button;