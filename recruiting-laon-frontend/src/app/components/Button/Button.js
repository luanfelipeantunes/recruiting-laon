import styles from "./Button.module.css";
import Loader from "react-js-loader";

function Button({ children, style, handleSubmit, isLoading }) {

    return (
        <button
            className={`${styles.btn} semibold16`} style={style}
            onClick={handleSubmit}
            disabled={isLoading}
        >
            {isLoading ? ( <Loader type="box-rectangular" bgColor="var(--gray-100)" size={80} />

            ) : (
                children
            )}

        </button>
    )
}

export default Button;